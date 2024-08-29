'use server';

import db from '@/lib/db';
import { getAuthSession } from './auth';

export async function getUserCredits() {
	const session = await getAuthSession();

	if (!session) {
		return { credits: 0 };
	}

	const db_user = await db.user.findFirst({
		where: { id: session?.user.id },
	});

	return { credits: db_user?.credits || 0 };
}

export async function incrementUserCredits(credits: number) {
	const session = await getAuthSession();

	if (!session) {
		return { credits: 0 };
	}

	const db_user = await db.user.update({
		where: { id: session?.user.id },
		data: { credits: { increment: credits } },
	});

	return { credits: db_user.credits };
}
