import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { plans } from '@/constants';
import { CircleCheck, CircleX } from 'lucide-react';
import PricingButton from './PricingButton';

const PricingCards = () => {
	return (
		<>
			{plans.map((plan) => (
				<Card key={plan.name} className="flex flex-col w-full">
					<CardHeader className="text-center">
						<CardTitle>{plan.name}</CardTitle>

						<h3 className="scroll-m-20 text-4xl !my-3 font-semibold tracking-tight transition-colors">
							${plan.price}
						</h3>
						<CardDescription className="!m-0 text-base">
							{plan.credits} credits
						</CardDescription>
					</CardHeader>

					<CardContent className="grow">
						<ul className="flex flex-col gap-2">
							{plan.features.map((feature) => (
								<li
									key={`${plan.name}-${feature.label}`}
									className="flex gap-3 items-center"
								>
									{feature.isIncluded ? (
										<CircleCheck
											className="text-success size-5 mt-0.5"
											aria-hidden
										/>
									) : (
										<CircleX
											className="text-destructive size-5 mt-0.5"
											aria-hidden
										/>
									)}{' '}
									{feature.label}
								</li>
							))}
						</ul>
					</CardContent>

					<CardFooter>
						<PricingButton plan={plan} />
					</CardFooter>
				</Card>
			))}
		</>
	);
};

export default PricingCards;
