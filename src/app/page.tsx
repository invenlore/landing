import Image from "next/image";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.logo}
        src="/logotype-web.png"
        alt="invenlore.io"
        width={800}
        height={196}
        quality={100}
        draggable={false}
        priority
      />
      <span className={styles.desc}>Currently in development...</span>
    </main>
  );
}
