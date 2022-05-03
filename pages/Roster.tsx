import React, { useEffect } from 'react';
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Layout } from '../organisms/Layout';
import { RosterTable } from '../molecules/RosterTable';
import axios, { AxiosResponse } from 'axios';

const Roster: NextPage = () => {
  const pokemon: any[] = [];
  const ids = [484, 380, 727, 812, 473, 302]

  const fetchRoster = (pokemonIds: number[]) => {
    pokemonIds.forEach((id) => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((data: AxiosResponse) => {
          console.log(data.data);
          pokemon.push(data.data)
        })
        .catch((error) => {
          console.log(error);
        });
    })
  }

  // BELOW WON'T WORK, NEED TO MOVE UP INTO ECOSYSTEMS AND PASS DOWN
  useEffect(() => {
    fetchRoster(ids);
  })

  const tableProps = {
    pokemon: pokemon
  }

  return (
    <Layout>
      <h1 className={styles.title}>
        Roster
      </h1>

      { pokemon.length > 0 && <RosterTable { ...tableProps } />}
    </Layout>
  )
}

export default Roster
