import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tauri + React + Typescript</title>
      </head>

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col bg-gradient-to-br ">
            <header className="border-b  backdrop-blur-sm">
              <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold">Call and Roll</h1>
                  {/* <nav className="flex space-x-4"> */}
                  {/*   <Link href="/" className="transition-colors"> */}
                  {/*     Home */}
                  {/*   </Link> */}
                  {/*   <Link href="/about" className="transition-colors"> */}
                  {/*     About */}
                  {/*   </Link> */}
                  {/* </nav> */}
                </div>
              </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-8">
              {children}
            </main>

            <footer className="border-t  mt-auto">
              <div className="container mx-auto px-4 py-6">
                <p className="text-center text-slate-600 text-sm">
                  2025 | Created by Romka Horokhov | @beardy_coding
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
