export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-200 h-screen flex items-center justify-center p-5 dark:bg-gray-700">
      <div className="flex flex-col bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm dark:bg-gray-600 gap-3">
        <div className="group">
          <input type="text" placeholder="이메일을 적어주세요" className="bg-gray-100 w-full" />
          <span className="group-focus-within:block hidden">이메일 형식인지 확인해주세요.</span>
        </div>
        <button>등록</button>
      </div>
    </main>
  );
}
