import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "Adil Ahamed | Modern Frontend Developer",
  description: "Aesthetic Dark UI Portfolio website built with Next.js, HTML5, CSS3, JavaScript, Tailwind CSS.",
  keywords: ["Frontend Developer Portfolio", "Next.js Portfolio", "JavaScript Coding Projects", "Dark UI Design"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="font-sans antialiased bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
