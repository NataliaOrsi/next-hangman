import Link from "next/link";

export default function Home() {
  return (
    <main className="my-44">
      <div className="flex flex-col justify-center items-center gap-y-10 md:gap-y-20">
        <div className="animated-text text-5xl text-center md:text-8xl">
          <span className="text-primary-color">H</span>
          <span className="text-secondary-color">A</span>
          <span className="text-third-color">N</span>
          <span className="text-primary-color">G</span>
          <span className="text-secondary-color">M</span>
          <span className="text-third-color">A</span>
          <span className="text-primary-color">N</span>
        </div>
        <div className="justify-center items-center">
          <div className="border-third-color border-2 bg-third-color text-white rounded-md">
            <Link href="/game">
              <button className="p-2 md:p-4">{"Let's play"}</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}