import React, { PropsWithChildren } from 'react';

const layout = ({ children }: PropsWithChildren) => {
	return <div className="pt-8">{children}</div>;
};

export default layout;
