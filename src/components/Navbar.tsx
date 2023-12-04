import Link from "next/link";
import React from "react";

type Rota = {
  name: string;
  link: string;
};

export default function Navbar() {
  const routes: Rota[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Personagens",
      link: "/personagens",
    },
    {
      name: "Locais",
      link: "/locais",
    },
    {
      name: "Episódios",
      link: "/episodios",
    },
  ];
  return (
    <nav className="w-screen h-12 px-3 py-3 border-b border-gray-500">
      <ul className="flex gap-20 list-none">
        {routes.map((rota: Rota) => (
          <li key={rota.link}>
            <Link className="min-w-100" href={rota.link}>
              {rota.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
