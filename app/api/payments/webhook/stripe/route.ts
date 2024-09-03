import db from '@/lib/db';
import { getStripeCredentials } from '@/lib/utils';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const { secret, webhookSecret } = getStripeCredentials();
const stripe = new Stripe(secret);

export async function POST(req: NextRequest) {
	const body = await req.text();
	const sig = req.headers.get('Stripe-Signature')!;

	try {
		const event = await stripe.webhooks.constructEventAsync(body, sig, webhookSecret);

		switch (event.type) {
			case 'checkout.session.completed':
				try {
					const session = (await stripe.checkout.sessions.retrieve(
						event.data.object.id
					)) as Stripe.Checkout.Session;

					const stripeCustomerEmail = session.customer_email;
					const dateTime = new Date(session.created * 1000).toISOString();

					const { credits, email, userId } =
						session.metadata ||
						({} as { userId: string; email: string; credits: string });

					// Update user credits.
					const db_user = await db.user.update({
						where: { id: userId },
						data: {
							credits: {
								increment: parseInt(credits),
							},
						},
					});

					if (!db_user) {
						return NextResponse.json({
							status: 404,
							error: 'User not found',
						});
					}

					// Store payment receipt.
					const paymentData = {
						userId: userId,
						userEmail: email,
						stripeSessionId: session.id,
						stripeCustomerEmail,
						amount: session.amount_total! / 100,
						customer_details: JSON.stringify(session.customer_details),
						paymentIntentId: String(session.payment_intent),
						paymentTime: dateTime,
						currency: session.currency || '',
					};

					await db.payments.create({
						data: paymentData,
					});
				} catch (error) {
					console.error('Error handling checkout session:', error);
					return NextResponse.json({
						status: 500,
						error,
					});
				}

				break;

			default:
				return NextResponse.json({
					status: 400,
					error: 'Unhandled event type',
				});
		}
	} catch (error) {
		console.error('Error constructing Stripe event:', error);
		return NextResponse.json({
			status: 500,
			error: 'Webhook Error: Invalid Signature',
		});
	}
}
