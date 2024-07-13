export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-200 h-screen flex items-center justify-center p-5 dark:bg-gray-700">
      <div className="flex flex-col gap-2 bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm dark:bg-gray-600 md:flex-row">
        <input
          className="w-full rounded-full h-12 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-green-500 focus:ring-offest-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
          type="email"
          required
          placeholder="Email address"
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block">Email is required</span>
        <button className="text-white py-2 rounded-full outline-none focus:scale-90 active:scale-90 transition-transform font-medium md:px-10 bg-black peer-valid:bg-green-500">
          Login
        </button>
      </div>
    </main>
  );
}