import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["400", "500", "700"], // Adjust weights as needed
});

export const metadata = {
   title: "Fauzan Sadi",
   description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en" className={poppins.className}>
         <body className="relative bg-purple-dark dark:bg-purple-light min-h-screen">
         <div className="watermark"></div>
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               <Layout>{children}</Layout>
            </ThemeProvider>
         </body>
      </html>
   );
}
