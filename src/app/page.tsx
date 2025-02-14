import Board from "@/components/Board";

export default function Home() {
  return (
    <div>
      <header>
        <div className="p-12 md:p-20 text-3xl md:text-6xl text-gray-700 font-semibold text-center">
          WHACK A MOLE
        </div>
        <div className="flex justify-center">
          <button className="bg-black border border-gray-400 text-gray-400  px-10 rounded-lg py-2">
            start
          </button>
        </div>
      </header>
      <Board />
    </div>
  );
}
