export default function Home() {
  return (
    <main className="my-44">
      <div className="box-border rounded-xl max-w-7xl h-[32rem] border-yellow-50/80 border-2 m-auto bg-yellow-50/80 flex justify-center items-center relative">
        <div className="animated-text text-8xl text-center">
          <span className="text-primary-color">H</span>
          <span className="text-secondary-color">A</span>
          <span className="text-third-color">N</span>
          <span className="text-primary-color">G</span>
          <span className="text-secondary-color">M</span>
          <span className="text-third-color">A</span>
          <span className="text-primary-color">N</span>
        </div>
        <div className="border-third-color border-2 bg-third-color text-white rounded-md absolute self-end m-4">
          <button className="p-4">Let's play</button>
        </div>
      </div>
    </main>
  );
}