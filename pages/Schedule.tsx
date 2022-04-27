import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Layout } from '../organisms/Layout';

const Schedule: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>
        Schedule
      </h1>

    </Layout>
  )
}

export default Schedule
