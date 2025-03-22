import { Anonymous_Pro } from "next/font/google";
import "./globals.css";

const getAnonymous = Anonymous_Pro({
  variable: "--font-anonymous-pro",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "TCG Local League",
  description: "Online TCG Local League Testing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${getAnonymous.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
