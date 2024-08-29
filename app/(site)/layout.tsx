import React, { PropsWithChildren } from 'react';

const layout = ({ children }: PropsWithChildren) => {
	return (
		<div className="flex flex-col items-center pt-10 lg:pt-16 max-w-6xl px-6 md:px-8 w-full">
			{children}
		</div>
	);
};

export default layout;
