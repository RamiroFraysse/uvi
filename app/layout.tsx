export const metadata = {
    title: "UVI",
    description: "Portfolio builded on NextJS",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
