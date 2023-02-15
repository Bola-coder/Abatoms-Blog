import Link from "next/link";
const Nav = () => {
  return (
    // <div className="fixed z-10 top-0  w-full">
    <nav className="flex items-center justify-between p-3 text-green-400 w-full">
      <h2 className="font-bold text-2xl">
        Bloga<span className="text-white">Land</span>
      </h2>
      <div className="basis-1/5 flex items-center justify-between p-2 font-bold cursor-pointer">
        {/* <p>Home</p> */}
        <Link href="/blog">
          <p className="text-lg hover:tracking-wider">Blogs</p>
        </Link>
        <Link href={"/signup"}>
          <p className="text-lg hover:tracking-wider">Register</p>
        </Link>
      </div>
    </nav>
    // </div>
  );
};

export default Nav;
