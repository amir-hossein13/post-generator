import Link from "next/link";

const NavItemObj = [{ label: "Home", href: "/" }];

function NavItem() {
  return (
    <ul className="nav-ul">
      {NavItemObj.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="nav-li cursor-pointer transition ">
            {item.label}
          </Link>
        </li>
      ))}
      <Link href="/agent" className="bg-primary transition-colors hover:bg-primary-hover text-white rounded-xl px-3 py-3 text-base shadow-lg shadow-primary/30">
        Generate Your First Post
      </Link>
    </ul>
  );
}

export default NavItem;
