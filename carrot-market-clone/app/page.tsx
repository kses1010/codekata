export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-200 h-screen flex items-center justify-center p-5 dark:bg-gray-700">
      <div className="flex flex-col bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm dark:bg-gray-600 gap-3">
        <input type="text" />
        <button className="bg-black h-10 text-white rounded-hello-name">등록</button>
      </div>
    </main>
  );
}
