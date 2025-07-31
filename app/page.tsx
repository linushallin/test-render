import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-xl">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Tailwind fungerar! 🎉
        </h1>
        <p className="text-gray-700">
          Om du ser färg, centrering och rundade hörn – då är Tailwind CSS
          igång! 💨
        </p>
      </div>
      <Link href="/users">next page</Link>
    </main>
  );
}
