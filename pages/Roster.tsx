import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Layout } from '../organisms/Layout';
import { RosterTable } from '../molecules/RosterTable';
import axios, { AxiosResponse } from 'axios';

const Roster: NextPage = () => {
  const [ pokemon, setPokemon ] = useState([]);
  const ids = [484, 380, 727, 812, 473, 302]

  const fetchRoster = (pokemonIds: number[]) => {
    const pokemonData: any = [];
    pokemonIds.forEach((id) => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((data: AxiosResponse|any) => {
          pokemonData.push(data.data);
          setPokemon(pokemonData)
        })
        .catch((error) => {
          console.log(error);
        });
    })
  }

  useEffect(() => {
    if (pokemon.length <= 0) {
      fetchRoster(ids);
    }
  })

  const tableProps = { pokemon }

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
