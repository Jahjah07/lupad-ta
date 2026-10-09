"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header
        className="site-header"
        onKeyDown={(event) => {
          if (open && event.key === "Escape") {
            setOpen(false);
            event.currentTarget
              .querySelector<HTMLButtonElement>(".menu-toggle")
              ?.focus();
          }
        }}
      >
        <div className="container header-inner">
          <Link className="brand" href="/#home" aria-label="LUPAD-Ta home">
            <Image
              src="/logo.png"
              alt="LUPAD-Ta Travel & Tours"
              width={1024}
              height={425}
            />
          </Link>
          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="navigation"
          >
            <span className="menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>{open ? "Close" : "Menu"}</span>
          </button>
          <nav
            className={open ? "open" : ""}
            id="navigation"
            aria-label="Main navigation"
            onClick={() => setOpen(false)}
          >
            {[
              ["Home", "/#home"],
              ["Tours", "/tours"],
              ["Destinations", "/destinations"],
              ["About", "/#about"],
              ["Contact", "/#contact"],
            ].map(([label, href]) => (
              <Link
                href={href}
                key={label}
                aria-current={
                  href === "/#home"
                    ? pathname === "/"
                      ? "page"
                      : undefined
                    : href.startsWith("/#")
                      ? undefined
                      : pathname.startsWith(href)
                        ? "page"
                        : undefined
                }
              >
                {label}
              </Link>
            ))}
            <Link className="mobile-inquiry" href="/#inquiry">
              Inquire Now →
            </Link>
          </nav>
          <Link className="button gold nav-inquiry" href="/#inquiry">
            Inquire Now <span aria-hidden="true">→</span>
          </Link>
        </div>
      </header>
    </>
  );
}
