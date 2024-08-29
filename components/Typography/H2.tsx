import { cn } from '@/lib/utils';
import React from 'react';

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {
	children: React.ReactNode;
}

const H2 = ({ children, className, ...props }: H2Props) => {
	return (
		<h2
			{...props}
			className={cn(
				'text-center scroll-m-20 text-4xl font-semibold tracking-tight transition-colors first:mt-0',
				className
			)}
		>
			{children}
		</h2>
	);
};

export default H2;
