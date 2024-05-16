/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center mx-124">
      <div className="w-[1440px] flex flex-col gap-32 justify-center">
        <div className="px-[180px] h-[87px] py-4 flex items-center justify-end">
          <div className="flex items-center gap-4 text-xl font-medium">
            <p>Twitter</p>
            <p>Connect</p>
          </div>
        </div>
        {/* <div className="flex flex-col space-x-4">
          <div className="flex text-black  ">
            <p>Hey,</p>
            <p>{"I'm Aron"}</p>
          </div>
          <div className="flex text-black justify-end text-left">
            <p>
              — a UI/UX designer and web developer elevating early-stage brands
              through intuitive design and robust solutions.
            </p>
          </div>
        </div>

        <image /> */}

        <div className="flex justify-center">
          <div className=" flex flex-col gap-10 w-[1000px] justify-center">
            <p className="text-4xl font-medium">
              In just a year and a half, I've crafted intuitive user interfaces
              and engaging web experiences that have garnered praise from users
              and stakeholders alike.
            </p>
            <p className="text-4xl font-extrabold">
              From streamlining complex workflows to enhancing accessibility, my
              designs have consistently elevated user satisfaction metrics by
              double digits, driving tangible business growth.
            </p>
            <p className="text-4xl font-semibold">
              With a focus on innovation and user-centricity, I've successfully
              delivered projects on time and within budget, establishing a
              reputation for excellence in UI/UX design and web development
              despite my relatively short tenure in the field.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="flex text-7xl font-bold w-[786px] justify-center">
            Here’s what you can expect from me...
          </p>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col space-y-5 w-[1000px]">
            <div className="flex space-x-5">
              <p className="flex bg-slate-700 text-white px-8 py-6 rounded-3xl">
                Fostering growth through exceptional design and team-building
                expertise.
              </p>
              <p className="flex bg-gray-900 text-white px-8 py-6 rounded-3xl">
                Engage, innovate, align—partnering with your team to deliver
                expert design and web solutions fueled by passion.
              </p>
            </div>
            <div className="flex">
              <p className="flex w-full bg-gray-900 text-white px-8 py-6 justify-center rounded-3xl">
                With seasoned expertise, boundless energy, and fresh insights,
                I'll invigorate projects in UI/UX design and web development.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="flex w-[1000px] font-medium text-3xl">
            Looking forward to the opportunity of collaborating on future
            projects together. Ready to connect and bring our visions to life?
            Let's make it happen.
          </p>
        </div>

        {/* <div className="flex items-center justify-start w-full">
          <button className="flex items-center gap-4 bg-slate-900 py-6 px-8 rounded-xl font-medium text-3xl text-white">
            <svg />
            <p>Get in touch</p>
          </button>
        </div> */}

        <div className="flex items-center justify-start w-full">
          <button className="flex items-center gap-4 text-[30px] font-medium text-white bg-slate-900 py-3 px-6 rounded-xl">
            {/* <Mail /> */}
            <p>Get in touch</p>
          </button>
        </div>

        <div className="px-[180px] h-[87px] py-4 flex items-center justify-end">
          <div className="flex items-center gap-4 text-xl font-medium">
            <p>Twitter</p>
            <p>Connect</p>
          </div>
        </div>
      </div>
    </main>
  );
}
