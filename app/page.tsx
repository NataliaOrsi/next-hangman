import Link from "next/link";

export default function Home() {
  return (
    <main className="my-44">
      <div className="justify-center items-center">
        <div className="animated-text text-8xl text-center">
          <span className="text-primary-color">H</span>
          <span className="text-secondary-color">A</span>
          <span className="text-third-color">N</span>
          <span className="text-primary-color">G</span>
          <span className="text-secondary-color">M</span>
          <span className="text-third-color">A</span>
          <span className="text-primary-color">N</span>
        </div>
        <div className="flex justify-center items-center">
          <div className="border-third-color border-2 bg-third-color text-white rounded-md flex absolute bottom-[35%]">
            <Link href="/game">
              <button className="p-4">{"Let's play"}</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}