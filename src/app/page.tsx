import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
export default function Home() {
  return (
    <main className="h-screen">
      <section className="h-[10%]">
        <Navbar />
      </section>
      <section className="body h-[90%]">
        <div className="h-full w-full flex items-center justify-center">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-2xl font-semibold">
              Welcome to the Quick productivity tool
            </h2>
            <Link href="/dashboard" className="ml-2 text-blue-500">
              Login
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
