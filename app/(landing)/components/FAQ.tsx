import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
	return (
		<>
			<h2 className="text-center scroll-m-20 text-4xl font-semibold tracking-tight transition-colors first:mt-0">
				Frequently Asked Questions
			</h2>

			<Accordion type="single" collapsible className="mt-6 w-full">
				<AccordionItem value="item-1">
					<AccordionTrigger className="text-xl">Is it accessible?</AccordionTrigger>
					<AccordionContent className="text-lg">
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-2">
					<AccordionTrigger className="text-xl">Is it styled?</AccordionTrigger>
					<AccordionContent className="text-lg">
						Yes. It comes with default styles that matches the other components&apos;
						aesthetic.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-3">
					<AccordionTrigger className="text-xl">Is it animated?</AccordionTrigger>
					<AccordionContent className="text-lg">
						Yes. It&apos;s animated by default, but you can disable it if you prefer.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</>
	);
};

export default FAQ;
