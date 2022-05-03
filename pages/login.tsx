import React, { useState } from 'react';
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { LoginForm } from '../organisms/LoginForm';
import { Layout } from '../organisms/Layout';
import { useRouter } from 'next/router'
// import axios, { AxiosResponse } from 'axios';

const Login: NextPage = () => {
  const router = useRouter()
  const [ loggedIn, setLoggedIn ] = useState(false);

  const login = (credentials: any) => {
    console.log('logged in!', credentials)
    router.push('/')
    // axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //   .then((data: AxiosResponse) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  const loginProps = { login };

  return (
    <Layout>
      <h1 className={styles.title}>
        Login
      </h1>

      <LoginForm { ...loginProps }/>
    </Layout>
  )
}

export default Login;
