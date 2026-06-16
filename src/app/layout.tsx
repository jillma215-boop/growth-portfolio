import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { I18nProvider } from '@/lib/i18n';
import Shell from '@/components/common/Shell';
const inter = Inter({subsets:['latin'], variable:'--font-inter'});
export const metadata: Metadata = {title:'Growth Portfolio', description:'AI-powered personal growth portfolio platform'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body className={`${inter.variable} font-sans`}><I18nProvider><Shell>{children}</Shell></I18nProvider></body></html>}
