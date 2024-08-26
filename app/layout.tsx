import Nav from '@/components/Nav';
import Providers from '@/components/providers';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

const inter = Inter({
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	subsets: ['latin'],
	style: ['normal'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={(cn(inter.className), 'antialiased')}>
				<Providers>
					<Nav />

					<main className="flex flex-col min-h-[calc(100svh-3.5rem-2px)] items-center mx-auto pb-32">
						{children}

						<Toaster />
					</main>

					<Footer />
				</Providers>
			</body>
		</html>
	);
}
