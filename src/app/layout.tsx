import { ReactNode } from 'react';
import { Metadata } from 'next';
import { poppins } from './ui/fonts';

export const metadata: Metadata = {
    title: 'RS React',
    description: 'Welcome to Next.js',
}

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
            {/* <head>
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="/star-wars-logo.svg"
                />
            </head> */}
            <body className={poppins.className}>
                {children}
            </body>
        </html>
    );
}
