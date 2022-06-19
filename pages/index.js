import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import { getPostsData } from '../lib/post'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

// SSGの場合
export async function getStaticProps() {
  const allPostData = getPostsData();
  console.log(allPostData);

  return {
    props: {
      allPostData,
    },
  };
}

// SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // コンポーネントに渡すためのprops
//     },
//   };
// }

export default function Home({allPostData}) {
  return (
   <Layout home>
    <section className={utilStyles.headingMd}>
      <p>
        こちらは事項紹介文です。ダーミーテキスト。こちらは事項紹介文です。ダーミーテキスト。こちらは事項紹介文です。ダーミーテキスト。
      </p>
    </section>
    <section>
      <h2>💻エンジニアのブログ</h2>
      <div className={styles.grid}>
        {allPostData.map(({id, title, date, thumbnail}) => (
          <article key={id}>
            <Link href={`/posts/${id}`}>
              <img src={`${thumbnail}`} alt="" className={styles.thumbnailImage} />
            </Link>
            <Link href={`/posts/${id}`}>
              <a className={utilStyles.boldText}>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>{date}</small>
          </article>
        ))}
      </div>
    </section>
   </Layout>
  )
}
