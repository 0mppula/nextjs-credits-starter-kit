import { APP_NAME } from '@/constants';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const setAppTitle = (title: string) => {
	return `${title} – ${APP_NAME}`;
};

export function getGoogleCredentials(): { clientId: string; clientSecret: string } {
	const clientId = process.env.GOOGLE_CLIENT_ID;
	const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

	if (!clientId || clientId.length === 0) {
		throw new Error('Missing GOOGLE_CLIENT_ID');
	}

	if (!clientSecret || clientSecret.length === 0) {
		throw new Error('Missing GOOGLE_CLIENT_SECRET');
	}

	return { clientId, clientSecret };
}

export function getGitHubCredentials(): { clientId: string; clientSecret: string } {
	const clientId = process.env.GITHUB_CLIENT_ID;
	const clientSecret = process.env.GITHUB_CLIENT_SECRET;

	if (!clientId || clientId.length === 0) {
		throw new Error('Missing GITHUB_CLIENT_ID');
	}

	if (!clientSecret || clientSecret.length === 0) {
		throw new Error('Missing GITHUB_CLIENT_SECRET');
	}

	return { clientId, clientSecret };
}

export function getNextAuthSecret() {
	const secret = process.env.NEXTAUTH_SECRET;

	if (!secret || secret.length === 0) {
		throw new Error('Missing NEXTAUTH_SECRET');
	}

	return secret;
}

export function getStripePublicKey() {
	const publicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;

	if (!publicKey || publicKey.length === 0) {
		throw new Error('Missing NEXT_PUBLIC_STRIPE_PUBLIC_KEY');
	}

	return publicKey;
}

export function getStripeCredentials() {
	const secret = process.env.STRIPE_SECRET_KEY;
	const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

	if (!secret || secret.length === 0) {
		throw new Error('Missing STRIPE_SECRET_KEY');
	}

	if (!webhookSecret || webhookSecret.length === 0) {
		throw new Error('Missing STRIPE_WEBHOOK_SECRET');
	}

	return { secret, webhookSecret };
}
