'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { landingPageImages } from '@/constants';
import Image from 'next/image';
import AutoScroll from 'embla-carousel-auto-scroll';

interface ImageCarouselProps {
	direction?: 'forward' | 'backward';
}

const ImageCarousel = ({ direction = 'forward' }: ImageCarouselProps) => {
	return (
		<Carousel
			plugins={[
				AutoScroll({
					startDelay: 0,
					speed: 0.2,
					direction,
					stopOnFocusIn: false,
				}),
			]}
			opts={{
				align: 'start',
				loop: true,
				direction: 'ltr',
				dragFree: true,
				watchDrag: false,
				watchFocus: false,
			}}
			className="w-full"
		>
			<CarouselContent className="-ml-2 md:-ml-4 lg:-ml-6">
				{(direction === 'backward'
					? [...landingPageImages].reverse()
					: landingPageImages
				).map((_, index) => (
					<CarouselItem
						key={index}
						className="pl-2 md:pl-4 lg:pl-6 basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-[12.5%]"
					>
						<Image
							className="rounded-lg"
							src={_}
							alt={`Image ${index + 1} of ${landingPageImages.length}`}
							width="260"
							height="260"
						/>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};

export default ImageCarousel;
