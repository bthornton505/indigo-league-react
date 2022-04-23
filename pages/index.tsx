import { Box } from '@mui/system';
import type { NextPage } from 'next'
import { Layout } from '../organisms/Layout';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>
        Welcome to the Indigo League
      </h1>
      
      <Box sx={{ flexGrow: 1, textAlign: 'center', marginTop: '2rem' }}>
        <p>
          Login to get ready for your next battle!
        </p>
      </Box>
    </Layout>
  )
}

export default Home
