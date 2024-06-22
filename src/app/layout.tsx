import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

import { LoadingProvider } from "@/contexts/LogginProvider";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: "Web Scraping",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" suppressHydrationWarning>
            <body className={cn(
                "h-screen bg-background font-sans antialiased px-5",
                fontSans.variable
            )}>
                <LoadingProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Header />
                        <main className="w-full">
                            {children}
                        </main>
                        <Footer />
                    </ThemeProvider>
                </LoadingProvider>
            </body>
        </html>
    )
}
