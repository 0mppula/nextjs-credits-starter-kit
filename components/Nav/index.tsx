import { getAuthSession } from '@/app/actions/auth';
import { APP_NAME } from '@/constants';
import { LogIn } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import ThemeToggler from './ThemeToggler';
import UserAccountNav from './UserAccountNav';

const Nav = async () => {
	const session = await getAuthSession();

	return (
		<header className="sticky inset-x-0 top-0 w-full z-50 bg-card/75 border-b-2 backdrop-blur-sm">
			<div className="flex max-w-6xl items-center justify-between h-14 mx-auto px-6 md:px-8">
				<Link href="/">
					<p className="font-semibold">{APP_NAME}</p>
				</Link>

				<div className="gap-2 hidden md:flex">
					<Button variant="link" asChild>
						<Link href="/dashboard">Dashboard</Link>
					</Button>

					<Button variant="link" asChild>
						<Link href="/pricing">Pricing</Link>
					</Button>
				</div>

				<div className="flex items-center gap-2">
					<div className="flex items-center gap-2">
						<ThemeToggler />

						{session?.user ? (
							<UserAccountNav user={session.user} />
						) : (
							<Button asChild>
								<Link href="/login">
									Login <LogIn className="ml-1 h-[1.125rem] w-[1.125rem]" />
								</Link>
							</Button>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Nav;
