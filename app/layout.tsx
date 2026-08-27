import type { Metadata } from "next";
import "./globals.css";
import "./brand-overrides.css";
export const metadata: Metadata={title:"RanTech Agentes",description:"Operação inteligente para empresas em crescimento.",icons:{icon:"/brand/favicon.svg",apple:"/brand/apple-touch-icon.png"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
