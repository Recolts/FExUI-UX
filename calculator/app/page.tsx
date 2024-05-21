import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="flex  w-[1440px] justify-center items-center">
        <div className="flex bg-slate-700 w-[640px] h-[724px] justify-center items-center rounded-xl">
          <div className="flex flex-col bg-white w-[300px] h-[450px] gap-1 rounded-xl ">
            <div className="flex justify-end ">
              <p className="flex">1000</p>
            </div>
            <div className="flex gap-1 justify-center">
              <p className="flex w-[75px] h-[70] bg-slate-400 px-3 py-6 justify-center">
                C
              </p>
              <p className="flex w-[75px] h-[70] bg-slate-400 px-3 py-6 justify-center">
                ±
              </p>
              <p className="flex w-[75px] h-[70] bg-slate-400 px-3 py-6 justify-center">
                %
              </p>
              <p className="flex w-[75px] h-[70] bg-slate-400 px-3 py-6 justify-center">
                ÷
              </p>
            </div>

            <div className="flex gap-1 justify-center">
              <p className="flex w-[75px] h-[70] px-3 py-6 justify-center">7</p>
              <p className="flex w-[75px] h-[70] px-3 py-6 justify-center">8</p>
              <p className="flex w-[75px] h-[70] px-3 py-6 justify-center">9</p>
              <p className="flex w-[75px] h-[70] bg-slate-400 px-3 py-6 justify-center">
                X
              </p>
            </div>

            <div className="flex gap-1 justify-center">
              <p className="flex w-[75px] h-[70] px-3 py-6 justify-center">4</p>
              <p className="flex w-[75px] h-[70] px-3 py-6 justify-center">5</p>
              <p className="flex w-[75px] h-[70] px-3 py-6 justify-center">6</p>
              <p className="flex w-[75px] h-[70] bg-slate-400 px-3 py-6 justify-center">
                -
              </p>
            </div>

            <div className="flex gap-1 justify-center">
              <p className="flex w-[75px] h-[70] px-3 py-6 justify-center">1</p>
              <p className="flex w-[75px] h-[70] px-3 py-6 justify-center">2</p>
              <p className="flex w-[75px] h-[70] px-3 py-6 justify-center">3</p>
              <p className="flex w-[75px] h-[70] bg-slate-400 px-3 py-6 justify-center">
                +
              </p>
            </div>

            <div className="flex gap-1 justify-center">
              <p className="flex w-[75px] h-[70] px-3 py-6 justify-center">0</p>
              <p className="flex w-[75px] h-[70] px-3 py-6 justify-center">,</p>

              <p className="flex w-[155px] h-[70] bg-slate-400 px-3 py-6 justify-center">
                =
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
