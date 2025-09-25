import { Header } from "@/components/header";

export default function Page404() {
  return (
    <>
      <Header />
      <main className="grid min-h-full h-[100vh] place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-[#FA9F18]">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            Page introuvable
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-white sm:text-xl/8">
            Désolé, nous n'avons pas trouvé la page que vous recherchez.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md  px-3.5 py-2.5 text-sm font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Retour à l'accueil
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
