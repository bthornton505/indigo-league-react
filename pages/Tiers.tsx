import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Layout } from '../organisms/Layout';

const Tiers: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>
        Tiers
      </h1>

    </Layout>
  )
}

export default Tiers
