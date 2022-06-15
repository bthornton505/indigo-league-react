import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Layout } from '../organisms/Layout';
import { StandingsTable } from '../molecules/StandingsTable';
import { ScheduleTable } from '../molecules/ScheduleTable';

const Schedule: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>
        Standings
      </h1>
      
      <div className="standings">
        <h3>Kanto</h3>
        <StandingsTable/>
      </div>

      <div className="standings">
        <h3>Johto</h3>
        <StandingsTable/>
      </div>

      <div className="standings">
        <h3>Week 7</h3>
        <ScheduleTable/>
      </div>
    </Layout>
  )
}

export default Schedule
