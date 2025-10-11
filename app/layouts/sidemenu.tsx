import { Link, Outlet } from "react-router";

export default function Sidemenu() {
  const menu = [
    { name: "記事一覧", path: "/" },
    { name: "人気記事", path: "/popular" },
    { name: "記事検索", path: "/search" },
  ];

  return (
    <div>
      <aside
        className="fixed top-0 left-0 z-40 w-48 h-screen shadow-lg"
        aria-label="Sidebar"
      >
        <nav>
          {menu.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex item-center px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
      <Outlet />
    </div>
  );
}
