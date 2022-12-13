import Image from "next/image";
import styles from "../styles/Home.module.css";

import Logo from "../public/assets/Moralis_logo.png";

export default function Header() {
  return (
    <section className={styles.header}>
      <Image src={Logo} alt="Logo image" width="102" height="82" />
      <h1 className={styles.title}>Get Content Of A Block</h1>
    </section>
  );
}