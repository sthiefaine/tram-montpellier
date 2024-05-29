"use client";
/* eslint-disable react/no-unescaped-entities */
import { View } from "lucide-react";
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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className={styles.title}>Suivi de l'état du trafic</h1>{" "}
      <button onClick={handleNavigate}>
        <View
          size="32px"
          style={{
            marginLeft: "20px",
          }}
        />
      </button>
    </header>
  );
}
