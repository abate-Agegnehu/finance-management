import React from "react";
import {
  Flex,
  Heading,
  Button,
  Box,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons"; 

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      as="header"
      bg="white"
      py="4"
      px="8"
      shadow="sm"
      justify="space-between"
      align="center"
    >
      <Heading as="h1" size="lg" color="teal.500">
        Easy Finance
      </Heading>

      {isMobile ? (
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open menu"
          variant="outline"
          colorScheme="teal"
          onClick={onOpen}
          size="lg"
        />
      ) : (
        <Box>
          <Button
            variant="outline"
            colorScheme="teal"
            onClick={() => navigate("/login")}
            mr="4"
          >
            Login
          </Button>
          <Button colorScheme="teal" onClick={() => navigate("/signup")}>
            Sign Up
          </Button>
        </Box>
      )}

      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <Button
                variant="outline"
                colorScheme="teal"
                onClick={() => {
                  navigate("/login");
                  onClose();
                }}
                width="100%"
                mb="4"
              >
                Login
              </Button>
              <Button
                colorScheme="teal"
                onClick={() => {
                  navigate("/signup");
                  onClose();
                }}
                width="100%"
              >
                Sign Up
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
};

export default Header;
