import Image from "next/image";

export default function Home() {
  return (
    // <></>
    <div className="min-h-screen grid grid-cols-2 w-[1440px]">
      <div className="relative">
        <Image src={"/walp.png"} alt="" fill className=""></Image>
      </div>
      <div className="flex items-center justify-center justify-self-center w-full">
        <div className="flex flex-col gap-4 w-full px-[129px]">
          <p className="text-4xl font-bold">Sign In</p>
          <p className="font-medium">
            Don’t have an account?{" "}
            <span className="text-slate-900">Create now</span>
          </p>
          <input
            type="email"
            className="border border-black p-4 rounded-lg  w-full"
            placeholder="Email"
          />
          <input
            type="password"
            className="border  border-black p-4 rounded-lg  w-full"
            placeholder="Password"
          />
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="font-medium" />
              Keep me signed in
            </label>
            <p className="font-medium">Forgot password?</p>
          </div>

          <button className="bg-slate-900 text-white p-4 rounded-xl w-full">
            Sign In
          </button>

          <div className="flex items-center">
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300"></hr>
            <p className="font-montserrat text-center font-semibold text-gray-400">
              OR
            </p>
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300"></hr>
          </div>
          <button className="border border-black p-4 rounded-xl flex items-center justify-center gap-3">
            <Image
              src={"/google.png"}
              alt=""
              height={32}
              width={32}
              className=""
            ></Image>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
