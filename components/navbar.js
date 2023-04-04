import Link from "next/link";

export default function Navbar() {
  const navbarLinks = [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/#projects" },
    { name: "Contact", url: "#contact" },
  ];
  return (
    <nav className="md:max-w-6xl mx-auto sticky z-50">
      <div className=" flex flex-wrap items-center justify-center px-10 md:py-4 py-2 overflow-hidden font-2xl sm:px-4 md:overflow-visible md:px-2">
        <ul className="flex justify-center list-reset m-0 w-full md:w-auto">
          {navbarLinks.map((link, index) => {
            return (
              <li key={index} className="px-4">
                <Link href={link.url}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
