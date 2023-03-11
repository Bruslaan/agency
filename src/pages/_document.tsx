import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />

      <body>
        <div id="cursor" className="cursor">
          <div className="cursor__content"></div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
