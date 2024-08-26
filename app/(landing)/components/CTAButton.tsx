'use client';

import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const CTAButton = () => {
	const session = useSession();

	return (
		<>
			{session.data ? (
				<Button asChild>
					<Link href="/dashboard">Get Started</Link>
				</Button>
			) : (
				<Button asChild>
					<Link href="/login">Get Started</Link>
				</Button>
			)}
		</>
	);
};

export default CTAButton;
