import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export interface NewBox extends Box {
  children?: JSX.Element|JSX.Element[];
}

export const RosterTable = ({ ...props }) => {
  const { pokemon } = props;

  const handleRedirect = (name: string, url: string) => {
    window.open(url + name, '_blank');
  }

  const createData = (
    name: string,
    type_1: string,
    type_2: string,
    kills: number,
    deaths: number,
    price: number,
    abilities: any[],
    stats: any[]
  ) => {
    return {
      name,
      type_1,
      type_2,
      kills,
      deaths,
      price,
      abilities,
      history: [
        {
          hp: stats[0].base_stat,
          attack: stats[1].base_stat,
          defense: stats[2].base_stat,
          specialAttack: stats[3].base_stat,
          specialDefense: stats[4].base_stat,
          speed: stats[5].base_stat
        }
      ],
    };
  }

  const Row = (props: { row: ReturnType<typeof createData> }) => {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.type_1}</TableCell>
          <TableCell align="right">{row.type_2}</TableCell>
          <TableCell align="right">{row.kills}</TableCell>
          <TableCell align="right">{row.deaths}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <h3>Abilities:</h3>
                {row.abilities.map((ability: any) => {
                  <p>{ability.name}</p>
                })}
              </Box>
              <hr />
              <Box sx={{ margin: 1 }}>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Hp</TableCell>
                      <TableCell>Attack</TableCell>
                      <TableCell>Defense</TableCell>
                      <TableCell>Special Attack</TableCell>
                      <TableCell>Special Defense</TableCell>
                      <TableCell>Speed</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow: any) => (
                      <TableRow key={historyRow.hp}>
                        <TableCell component="th" scope="row">
                          {historyRow.hp}
                        </TableCell>
                        <TableCell>{historyRow.attack}</TableCell>
                        <TableCell>{historyRow.defense}</TableCell>
                        <TableCell>{historyRow.specialAttack}</TableCell>
                        <TableCell>{historyRow.specialDefense}</TableCell>
                        <TableCell>{historyRow.speed}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
              <Box sx={{ margin: 1.5 }}>
                <Button 
                  onClick={() => handleRedirect(row.name, 'https://www.serebii.net/pokedex-swsh/')} 
                  className="mr-3" 
                  variant="contained">
                  Serebii
                </Button>
                <Button 
                  onClick={() => handleRedirect(row.name, `https://www.pikalytics.com/pokedex/ss/`)} 
                  variant="contained">
                  Pikalytics
                </Button>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  const rows = (pokemon: any) => {
    const pokemonRows: any = [];

    pokemon.map((mon: any) => {
      const type1 = mon.types[0].type.name;
      const type2 = mon.types.length > 1 ? mon.types[1].type.name : '';

      const abilities: any[] = [];
      mon.abilities.forEach((a: any) => {
        abilities.push(a.ability.name);
      })

      pokemonRows.push(createData(mon.name, type1, type2, 24, 4.0, 3.99, abilities, mon.stats));
    });

    return pokemonRows;
  };

  const pokemonRows = rows(pokemon);

  console.log('pokemon rows', pokemonRows)

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Type 1</TableCell>
            <TableCell align="right">Type 2</TableCell>
            <TableCell align="right">Kills</TableCell>
            <TableCell align="right">Deaths</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemonRows.map((row: any) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}