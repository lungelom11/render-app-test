import React, { useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Spinner,
} from '@chakra-ui/react';
import './fpl.css';

interface Team {
  id: number;
  player_name: string;
  rank: number;
  entry_name: string;
  total: number;
}

interface OtherLeagueProps {
  otherLeague: Team[];
  isLoading: boolean;
}

const OtherLeague: React.FC<OtherLeagueProps> = ({ otherLeague, isLoading }) => {
  const [myPoints, setMyPoints] = useState<number | undefined>();

  useEffect(() => {
    const myTeam = otherLeague.find((team) => team.id === 38457515);
    if (myTeam) {
      setMyPoints(myTeam.total);
    }
  }, [otherLeague]);

  return (
    <TableContainer border="2px solid #1374f4" borderRadius="10px" p="1rem">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th className="table-head">Rank</Th>
            <Th className="table-head">Manager</Th>
            <Th className="table-head">Team Name</Th>
            <Th className="table-head">Points</Th>
            <Th className="table-head">Distance</Th>
          </Tr>
        </Thead>
        <Tbody>
          {isLoading ? (
            <Tr>
              <Td colSpan={5} textAlign="center">
                <Spinner />
              </Td>
            </Tr>
          ) : (
            otherLeague.map((team) => (
              <Tr key={team.id} className={team.id === 38457515 ? 'my-team' : ''}>
                <Td>{team.rank}</Td>
                <Td>{team.player_name}</Td>
                <Td>{team.entry_name}</Td>
                <Td>{team.total}</Td>
                <Td className={myPoints !== undefined && team.total < myPoints ? "distance-lesser" : "distance-greater"}>
                {myPoints !== undefined ? (team.total - myPoints !== 0 ? team.total - myPoints : '-') : '-'}
              </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OtherLeague;