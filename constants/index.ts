export const APP_NAME = 'Credits Starter Kit';

export const USER_CREDITS_QUERY_KEY = 'user-credits';

export const plans = [
	{
		priceId: process.env.NEXT_PUBLIC_STRIPE_BASIC_PRICE_ID || '',
		name: 'Basic',
		price: 4.99,
		credits: 10,
		popular: false,
		features: [
			{
				label: '10 Credits',
				isIncluded: true,
			},
			{
				label: 'Full Access to Services',
				isIncluded: true,
			},
			{
				label: 'Priority Customer Support',
				isIncluded: false,
			},
			{
				label: 'Priority Updates',
				isIncluded: false,
			},
		],
	},
	{
		priceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID || '',
		name: 'Pro',
		price: 9.99,
		credits: 25,
		popular: true,
		features: [
			{
				label: '25 Credits',
				isIncluded: true,
			},
			{
				label: 'Full Access to Services',
				isIncluded: true,
			},
			{
				label: 'Priority Customer Support',
				isIncluded: true,
			},
			{
				label: 'Priority Updates',
				isIncluded: false,
			},
		],
	},
	{
		priceId: process.env.NEXT_PUBLIC_STRIPE_PREMIUM_PRICE_ID || '',
		name: 'Premium',
		price: 19.99,
		credits: 75,
		popular: false,
		features: [
			{
				label: '75 Credits',
				isIncluded: true,
			},
			{
				label: 'Full Access to Services',
				isIncluded: true,
			},
			{
				label: 'Priority Customer Support',
				isIncluded: true,
			},
			{
				label: 'Priority Updates',
				isIncluded: true,
			},
		],
	},
];

export const landingPageImages = [
	'/image1.jpg',
	'/image2.jpg',
	'/image3.jpg',
	'/image4.jpg',
	'/image5.jpg',
	'/image6.jpg',
	'/image7.jpg',
	'/image8.jpg',
	'/image9.jpg',
	'/image10.jpg',
	'/image11.jpg',
];
