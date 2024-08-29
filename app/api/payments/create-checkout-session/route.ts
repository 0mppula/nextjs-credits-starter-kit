import { getStripeCredentials } from '@/lib/utils';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(getStripeCredentials().secret);

export async function POST(req: NextRequest) {
	const { userId, email, priceId, credits } = await req.json();

	try {
		const session = await stripe.checkout.sessions.create({
			customer_email: email || undefined,
			payment_method_types: ['card'],
			allow_promotion_codes: true,
			line_items: [{ price: priceId, quantity: 1 }],
			metadata: { userId, email, credits },
			mode: 'payment',
			success_url: `${process.env.FRONTEND_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${process.env.FRONTEND_URL}/payment-cancel`,
		});

		return NextResponse.json({ payment_url: session.url });
	} catch (error) {
		console.error('Error creating checkout session:', error);
		return NextResponse.json({ error: 'Failed to create checkout session' });
	}
}
