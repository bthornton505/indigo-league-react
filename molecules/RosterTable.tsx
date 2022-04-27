import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Box, Button, Grid, TextField } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const createData = (
  name: string,
  type_1: string,
  type_2: string,
  kills: number,
  deaths: number,
  price: number,
) => {
  return {
    name,
    type_1,
    type_2,
    kills,
    deaths,
    price,
    history: [
      {
        hp: 90,
        attack: 120,
        defense: 100,
        specialAttack: 150,
        specialDefense: 120,
        speed: 100
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
              <p>Telepathy: This Pokémon does not take damage from friendly Pokémon's moves, including single-target moves aimed at it.</p>
              <p>Pressure: This Pokémon does not take damage from friendly Pokémon's moves, including single-target moves aimed at it.</p>
              <p>Pressure: This Pokémon does not take damage from friendly Pokémon's moves, including single-target moves aimed at it.</p>
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
                  {row.history.map((historyRow) => (
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
              <Button className="mr-3" variant="contained">Serebii</Button>
              <Button variant="contained">Pikalytics</Button>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Palkia', 'water', 'dragon', 24, 4.0, 3.99),
  createData('Necrozma Dusk-Mane', 'psychic', 'steel', 37, 4.3, 4.99),
  createData('Latias', 'dragon', 'psychic', 24, 6.0, 3.79),
  createData('Incineroar', 'fire', 'dark', 67, 4.3, 2.5),
  createData('Rillaboom', 'grass', '', 49, 3.9, 1.5),
];

export const RosterTable = ({ ...props }) => {
  console.log(props)
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
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}