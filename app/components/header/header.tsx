"use client";
/* eslint-disable react/no-unescaped-entities */

import styles from "./header.module.css";
import { usePathname, useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = () => {
    if (pathname === "/") {
      router.push("/cards");
    } else {
      router.push("/");
    }
  };

  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <span>
        <h1 className={styles.title}>Tramway de Montpellier</h1>
        <h2 className={styles.subtitle}>Suivi de l'état du trafic</h2>
      </span>
{/*       <button
        style={{ display: "flex", alignItems: "center", padding: "10px" }}
        onClick={handleNavigate}
      >
        {pathname === "/" && "Cards"}
        {pathname === "/cards" && "Timeline"}
        <View
          size="32px"
          style={{
            marginLeft: "20px",
          }}
        />
      </button> */}
    </header>
  );
}
