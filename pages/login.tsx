import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { LoginForm } from '../organisms/LoginForm';
import { Layout } from '../organisms/Layout';

const Login: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>
        Login
      </h1>

      <LoginForm/>
    </Layout>
  )
}

export default Login
