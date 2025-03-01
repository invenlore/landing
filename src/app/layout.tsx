import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import CustomThemeProvider from "@/providers/CustomThemeProvider";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "invenlore.io",
  description: "Creative platform for your fantasy worlds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </body>
    </html>
  );
}
