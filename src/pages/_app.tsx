import "@/styles/globals.css";
import "@/styles/cursor.css";
import type { AppProps } from "next/app";
import { useCursor } from "../custompackages/cursor";

export default function App({ Component, pageProps }: AppProps) {
  useCursor();
  return <Component {...pageProps} />;
}
