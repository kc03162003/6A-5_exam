import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: '比比星球｜比與比值星光調配所', description: '六年級比與比值互動複習遊戲：基本題、跨單元素養題、錯題修復與專屬學習證書。' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-Hant"><body>{children}</body></html>; }
