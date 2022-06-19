import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link";

const name = "test sample"
export const siteTitle = "Next.js blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div style={{ position: 'relative', width: '100px', height: '100px' }}>
              <Image src="/images/7075_color.png" alt="" layout="fill" objectFit="contain" className={`${utilStyles.borderCircle} ${styles.headerHomeImage}` } />
            </div>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
             <div style={{ position: 'relative', width: '100px', height: '100px' }}>
              <Image src="/images/7075_color.png" alt="" layout="fill" objectFit="contain" className={`${utilStyles.borderCircle}` } />
            </div>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
        <main>{children}</main>
      </header>

      {!home && (
          <div>
            <Link href="/">
              ← ホームへ戻る
            </Link>
          </div>
        )}
    </div>
  );
}

export default Layout;
