"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  width: 100%;
  height: 40px;
  padding: 10px 60px;
  border-bottom: 1px solid black;
`;
const NavUl = styled.ul`
  display: flex;
  gap: 20px;
  list-style-type: none;
`;

const LiLink = styled(Link)`
  min-width: 100px;
`;
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
    <NavBar>
      <NavUl>
        {routes.map((rota: Rota) => (
          <li>
            <LiLink href={rota.link}>{rota.name}</LiLink>
          </li>
        ))}
      </NavUl>
    </NavBar>
  );
}
