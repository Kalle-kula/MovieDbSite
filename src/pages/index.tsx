import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kalles Arbetsprov</title>
        <meta name="description" content="Kalles arbetsprov" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Välkommen till Kalles arbetsprov
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/start"
            >
              <h3 className="text-2xl font-bold">Startsidan →</h3>
              <div className="text-lg">
                Klicka här för att komma till startsidan
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://github.com/Kalle-kula/MovieDbSite"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Kodbasen →</h3>
              <div className="text-lg">
                Klicka här för att komma till github för att ladda ner/titta
                igenom kodbasen
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
