'use client';

import { getUserCredits } from '@/app/actions/userCredits';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { USER_CREDITS_QUERY_KEY } from '@/constants';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

const Credits = () => {
	const { data, isError, isLoading } = useQuery({
		queryKey: [USER_CREDITS_QUERY_KEY],
		queryFn: () => getUserCredits(),
	});

	return (
		<div className="flex flex-col items-center gap-4 mt-8">
			{isLoading && !isError ? (
				<Skeleton className="h-5 my-1 w-[225px]" />
			) : (
				<p className="leading-7 text-center">
					You have <span className="text-primary">{data?.credits}</span> credits
					remaining.
				</p>
			)}

			<Button asChild>
				<Link href="/pricing">Buy more credits</Link>
			</Button>
		</div>
	);
};

export default Credits;
