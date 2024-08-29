'use client';

import { plans } from '@/constants';
import usePaymentsStore from '@/hooks/usePaymentsStore';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { toast } from 'sonner';
import { ButtonWithIcon } from './ButtonWithIcon';
import { Button } from './ui/button';

interface IPricingButton {
	plan: (typeof plans)[number];
}

const PricingButton = ({ plan }: IPricingButton) => {
	const { data } = useSession();
	const { isCheckoutSessionLoading, setIsCheckoutSessionLoading, selectedPlan, setSelectedPlan } =
		usePaymentsStore();

	const createCheckoutSession = async (
		userId: string,
		priceId: string,
		credits: number,
		email?: string
	) => {
		try {
			setIsCheckoutSessionLoading(true);
			setSelectedPlan(plan.priceId);
			const { data } = await axios.post(`/api/payments/create-checkout-session`, {
				userId,
				email,
				credits,
				priceId,
			});

			if (data?.payment_url) {
				setSelectedPlan('');
				setIsCheckoutSessionLoading(false);
				window.location.href = data.payment_url;
			} else {
				console.error('Error creating checkout payment link:', data.error);
				toast('Error creating checkout session');
			}
		} catch (error) {
			setSelectedPlan('');
			setIsCheckoutSessionLoading(false);
			console.error('Error during checkout:', error);
			toast('Error during checkout');
			return;
		}
	};

	return (
		<>
			{data?.user ? (
				<ButtonWithIcon
					disabled={isCheckoutSessionLoading}
					loading={isCheckoutSessionLoading && selectedPlan === plan.priceId}
					className="w-full"
					onClick={() =>
						createCheckoutSession(
							data.user.id,
							plan.priceId,
							plan.credits,
							data.user?.email || ''
						)
					}
				>
					Get Started
				</ButtonWithIcon>
			) : (
				<Button disabled={isCheckoutSessionLoading} className="w-full" asChild>
					<Link href={`/login?redirectUrl=${'pricing'}`}>Get Started</Link>
				</Button>
			)}
		</>
	);
};

export default PricingButton;
