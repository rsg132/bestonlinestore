"use client";

export default function Topbar() {
  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-8 shadow-sm">

      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome back, Admin 👋
        </p>
      </div>

      <div className="flex items-center gap-6">

        <button className="relative text-2xl">
          🔔
          <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
            3
          </span>
        </button>

        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
            A
          </div>

          <div>
            <p className="font-semibold">
              Admin
            </p>

            <p className="text-sm text-gray-500">
              Administrator
            </p>
          </div>
        </div>

      </div>

    </header>
  );
}