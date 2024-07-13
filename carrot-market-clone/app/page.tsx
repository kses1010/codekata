export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-200 h-screen flex items-center justify-center p-5 dark:bg-gray-700">
      <div className="flex flex-col bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm dark:bg-gray-600 gap-3">
        {['Nico', 'Sunny', 'You', 'faker'].map((person, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="size-7 bg-blue-400 rounded-full" />
            {/*<div className="w-40 h-5 rounded-full bg-gray-400" />*/}
            {/*<div className="w-20 h-5 rounded-full bg-gray-400" />*/}
            <div className="text-lg font-medium">{person}</div>
            <div className="relative size-6 bg-red-500 text-white flex items-center justify-center rounded-full">
              <span>{index + 1}</span>
              <div className="size-6 bg-red-500 rounded-full absolute animate-ping" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
