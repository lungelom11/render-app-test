import { Box, IconButton } from "@chakra-ui/react";
import { CiMenuFries } from "react-icons/ci";
import MyImage from "../../assets/lungelom.jpeg";
import "./header.css";

const Header = ({ onOpen }) => {
  return (
    <Box
      as="header"
      w="100%"
      h="70px"
      bg="white"
      color="blue.700"
      px={4}
      py={2}
      position="fixed"
      top={0}
      left={0}
      zIndex={100}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <IconButton
        aria-label="Open menu"
        icon={<CiMenuFries />}
        display={{ base: "block", md: "none" }}
        onClick={onOpen}
        bg="transparent"
        color="black"
        fontSize="1.3rem"
        _hover={{ bg: "teal.600" }}
      />
      <div className="logo">
        <h2>Tracksphere</h2>
      </div>

      <div className="profile-img">
        <img src={MyImage} alt="" />
      </div>
    </Box>
  );
};

export default Header;
