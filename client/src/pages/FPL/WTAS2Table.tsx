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

interface Team {
  id: number;
  player_name: string;
  rank:number;
  entry_name: string;
  total: number;
}

interface WTAS2TableProps {
  WTAS2: Team[];
  isLoading: boolean;
}

const WTAS2Table: React.FC<WTAS2TableProps> = ({ WTAS2, isLoading }) => {
  const [myPoints, setMyPoints] = useState<number | undefined>();

  useEffect(() => {
    const myTeam = WTAS2.find((team) => team.id === 39860503);
    if (myTeam) {
      setMyPoints(myTeam.total);
    }
  }, [WTAS2]);
  return (
    <TableContainer border="2px solid #1374f4" borderRadius="10px" my="2rem" p="1rem">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Rank</Th>
            <Th>Manager</Th>
            <Th>Team Name</Th>
            <Th>Points</Th>
            <Th>Distance</Th>
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
            WTAS2.map((team) => (
              <Tr key={team.id} className={team.id == 39860503 ? "my-team" : ""}>
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

export default WTAS2Table;