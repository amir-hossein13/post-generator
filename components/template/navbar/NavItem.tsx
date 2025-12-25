const NavItemObj = [
  { label: "Home", href: "#home" },

];

function NavItem() {
  return (
    <ul className="nav-ul">
      {NavItemObj.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className="nav-li cursor-pointer transition hover:text-electro-blue"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavItem;
