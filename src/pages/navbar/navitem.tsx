import Link from "next/link";
import React from 'react';

const NavItem: React.FC<{text: string, href: string, active: boolean}> = ({ text, href, active }) => {
  return (
    <Link href={href}
        className={`nav__item ${
          active ? "active" : ""
        }`}
      >
        {text}
    </Link>
  );
};

export default NavItem;