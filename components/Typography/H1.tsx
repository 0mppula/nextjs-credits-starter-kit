import { cn } from '@/lib/utils';
import React from 'react';

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
	children: React.ReactNode;
}

const H1 = ({ children, className, ...props }: H1Props) => {
	return (
		<h1
			{...props}
			className={cn(
				'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center text-balance',
				className
			)}
		>
			{children}
		</h1>
	);
};

export default H1;
