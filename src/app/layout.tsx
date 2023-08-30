import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Time tracking dashboard",
  description: "Page built for a Frontend Mentor challenge",
  authors: { name: "Jean", url: "https://github.com/JenaCarry" },
  keywords: [
    "Frontend Mentor",
    "Frontend",
    "Mentor",
    "Time tracking dashboard",
    "Time",
    "tracking",
    "dashboard",
    "HTML",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "TypeScript",
    "React",
    "Next.js",
    "Responsive",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
