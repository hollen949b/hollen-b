import "./globals.css";
import { Inter } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToAnchor from "@/components/ScrollToAnchor";
import Navigation0001 from "@/components/layout/navigations/Navigation0001";
import Footer0001 from "@/components/layout/footers/Footer0001";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  return {
    title: 'Some Title',
    description: 'Some Description'
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation0001 />
        <ScrollToAnchor />
        <div id='topOfPage' className='absolute -top-96'>Top of page</div>
        <div className="flex flex-col h-screen">
          <main className={classNames("text-zinc-700")}>
            {children}
          </main>
          <div>
            <Footer0001 />
          </div>
        </div>
        <ScrollToTop href="/#topOfPage" />
      </body>
    </html>
  );
}
