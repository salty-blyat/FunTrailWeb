import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/AuthProvider";
import { ConfigProvider as ThemeProvider } from "antd";
import theme from "./theme/theme";
 
 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Funtrail",
  description: "Created by st23",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}> 
      <ThemeProvider theme={theme}>
          <AuthProvider>{children}</AuthProvider> 
      </ThemeProvider>
      </body>
    </html>
  );
}
