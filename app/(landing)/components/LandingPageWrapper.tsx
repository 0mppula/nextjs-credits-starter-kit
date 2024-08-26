import { PropsWithChildren } from 'react';

const LandingPageWrapper = ({ children }: PropsWithChildren) => {
	return <div className="px-6 md:px-8 w-full max-w-6xl mx-auto">{children}</div>;
};

export default LandingPageWrapper;
