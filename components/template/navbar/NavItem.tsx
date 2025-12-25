const NavItemObj = [{ label: "Home", href: "#home" }];

function NavItem() {
  return (
    <ul className="nav-ul">
      {NavItemObj.map((item) => (
        <li key={item.href}>
          <a href={item.href} className="nav-li cursor-pointer transition ">
            {item.label}
          </a>
        </li>
      ))}
      <button className="bg-primary transition-colors hover:bg-primary-hover text-white rounded-xl px-3 py-3 text-base shadow-lg shadow-primary/30">
        Generate Your First Post
      </button>
    </ul>
  );
}

export default NavItem;
