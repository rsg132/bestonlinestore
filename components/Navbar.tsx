export default function Navbar() {
  return (
    <nav className="w-full shadow-md bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-green-700">
          Best Online Store
        </h1>

        <ul className="flex gap-8 font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800">
          Login
        </button>

      </div>
    </nav>
  );
}