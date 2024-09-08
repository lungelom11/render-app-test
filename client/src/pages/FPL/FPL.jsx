import axios from "axios";
import { useEffect, useState } from "react";
import { Box } from '@chakra-ui/react'
import WTAS2Table from "./WTAS2Table";
import "./fpl.css"
import OtherLeague from "./OtherLeague";

const FPL = () => {
  const endpoint = "/api/fpl/leagues/1";
  const endpoint2 = "/api/fpl/leagues/2";
  const [WTAS2, setWTAS2] = useState([]);
  const [otherLeague, setOtherLeague] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [leagueName, setLeagueName] = useState();
  const [leagueName2, setLeagueName2] = useState();

  useEffect(() => {
    const fetchLeague1 = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(endpoint);
        const top5Results = res.data.standings.results.slice(0, 8);
        setWTAS2(top5Results);
        setLeagueName(res.data.league.name);
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
        setIsLoading(false);
      } finally {
        setIsLoading(false)
      }
    }

    const fetchLeague2 = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(endpoint2);
        const top5Results = res.data.standings.results.slice(0, 8);
        setOtherLeague(top5Results);
        setLeagueName2(res.data.league.name);
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
        setIsLoading(false);
      } finally {
        setIsLoading(false)
      }
    }

    fetchLeague1();
    fetchLeague2();
  }, [])

  return (
    <Box w="90%" mx="auto" minH="calc(100vh - 72px)" textAlign="center">
      <div>
        <h2>{leagueName}</h2>
        
        <WTAS2Table WTAS2={WTAS2} isLoading = {isLoading} />
        
        <h2>{leagueName2}</h2>
        <OtherLeague otherLeague={otherLeague} isLoading={isLoading} />
      </div>
    </Box>
  )
}

export default FPL