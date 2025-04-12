"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Home {pathname === "/" ? "👈" : ""}
          </Link>
        </li>
        <li>
          <Link href="/about" className={pathname === "/about" ? "active" : ""}>
            About {pathname === "/about" ? "👈" : ""}
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={pathname === "/contact" ? "active" : ""}
          >
            Contact {pathname === "/contact" ? "👈" : ""}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
