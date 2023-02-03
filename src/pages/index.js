import Head from "next/head";
import Link from "next/link";
// import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="PNWRL Admin App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>PNWRL Admin App</h1>
        <Link href="/add-game">Add a game</Link>
      </main>
    </>
  );
}
