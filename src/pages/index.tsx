import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  const sampleData = "lorem ipsum 500";

  const returnUppercase = (str: string) => {
    return str.toUpperCase();
  };

  return (
    <>
      <Head>Agency </Head>
      <Script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/ipad-cursor-js@latest/index.js"
      ></Script>
      <main>
        <p className="text-9xl font-bold">Hello world!</p>
        <div>
          <p className={"text-red-500"}>{returnUppercase(sampleData)}</p>
        </div>

        <Link href="/secondPage">Hallo 5</Link>
      </main>
    </>
  );
}
