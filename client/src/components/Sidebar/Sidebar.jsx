import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, Box } from "@chakra-ui/react";
import "./sidebar.css";
import SidebarContent from "./SidebarContent";

const Sidebar = ({ onClose, isOpen }) => {
  return (
    <>
      <Box
        as="nav"
        w="200px"
        h="100vh"
        bg="white"
        color="blue.600"
        position="fixed"
        boxShadow="2xl"
        rounded="md"
        top="70px"
        left={0}
        p={4}
        display={{ base: "none", md: "block" }}
      >
        <SidebarContent />
      </Box>

      {/* Mobile Drawer Sidebar */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody bg="gray.800" color="white" p={4}>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
