import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main
        className="min-h-screen bg-[#fdfaf6] text-gray-900 flex flex-col justify-center items-center text-center p-6"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        <img
          src="/images/logo.png"
          alt="Home.ai Logo"
          className="w-24 h-24 mb-6 rounded-full shadow-md"
        />
        <h1 className="text-5xl font-bold mb-4">Welcome to Home.ai</h1>
        <p className="text-xl max-w-xl mb-8">
          Your intelligent partner in discovering, evaluating, and owning your perfect home.
        </p>
        <a
          href="/match"
          className="bg-black text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-gray-800 transition"
        >
          Get Started
        </a>
      </main>
    </>
  );
}
