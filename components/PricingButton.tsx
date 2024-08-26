'use client';

import { plans } from '@/constants';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button } from './ui/button';

interface IPricingButton {
	plan: (typeof plans)[number];
}

const PricingButton = ({ plan }: IPricingButton) => {
	const { data } = useSession();

	const generateLink = () => {
		return plan.priceId;
	};

	return (
		<>
			{data?.user ? (
				<Button className="w-full" onClick={generateLink}>
					Get Started
				</Button>
			) : (
				<Button className="w-full" asChild>
					<Link href={`/login?redirectUrl=${'pricing'}`}>Get Started</Link>
				</Button>
			)}
		</>
	);
};

export default PricingButton;
