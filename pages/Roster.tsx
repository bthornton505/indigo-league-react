import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Layout } from '../organisms/Layout';
import { RosterTable } from '../molecules/RosterTable';

const Roster: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>
        Roster
      </h1>

      <RosterTable />
    </Layout>
  )
}

export default Roster
