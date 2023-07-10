import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main
        className={`${jakarta.variable} font-jakarta bg-andal-darkblue text-andal-lightblue overflow-hidden`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
