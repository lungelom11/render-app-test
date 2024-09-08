import {Outlet} from "react-router-dom"
import Sidebar from "../components/Sidebar/Sidebar"
import Header from "../components/Header/Header"
import { Box, Flex, useDisclosure } from "@chakra-ui/react"

const MainContent = () => (
    <Box
      as="main"
      ml={{ base: 0, md: "200px" }} // Adjust margin based on screen size
      mt="70px"
      p={4}
      bg="white"
      height="calc(100vh- 70px)"
      overflowY="auto"
      w="100%"
    >
      <Outlet />
    </Box>
  );

const MainLayout = () => {
  const { isOpen,onOpen, onClose } = useDisclosure();
  return (
    <>
    <Flex>
        <Header onOpen={onOpen} />
        <Sidebar onClose={onClose} isOpen={isOpen} />
        <MainContent />
    </Flex>
    </>
  )
}

export default MainLayout