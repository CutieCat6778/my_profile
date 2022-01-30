import { Box, Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { Link } from 'react-scroll'
import * as Chakra from '@chakra-ui/react';
import React from "react";
import { NavigationToggle } from "../../../interface/state";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

const Navigation: React.FC<NavigationToggle> = ({ toggle, setToggle }) => {
  const toggleProject = () => {
    setToggle(!toggle);
  }

  const toggleProjectOff = () => {
    setToggle(true);
  }

  return (
    <Flex flexDir={"row"} justifyContent={"right"}
      alignItems={"center"}>
      <Box marginRight="auto">
        <Chakra.Link href="https://txzje.xyz">
          <Image src="https://cutiecat6778.github.io/cdn/logo/logo_238.png" alt="Logo" boxSize={"118px"}/>
        </Chakra.Link>
      </Box>
      <Menu autoSelect={false} isLazy>
        <MenuButton as={Button} _hover={{
          backgroundColor: "none"
        }} _focus={{boxShadow: "none"}} variant="ghost" fontFamily={"Open Sans"} rightIcon={<ChevronDownIcon />} fontSize="2xl" d={{ base: "none", md: "flex" }} textAlign="center">
          Categories
        </MenuButton>
        <MenuList p={0} fontSize="2xl" fontFamily={"Open Sans"}>
          <MenuItem>
            <Text onClick={toggleProjectOff} to="about" as={Link} href="#about" spy={true} smooth={true} width="100%">About</Text>
          </MenuItem>
          <MenuItem>
            <Text onClick={toggleProjectOff} to="skills" as={Link} href="#skills" spy={true} smooth={true} width="100%">Skills</Text>
          </MenuItem>
          <MenuItem>
            <Text onClick={toggleProjectOff} to="contact" as={Link} href="#contact" spy={true} smooth={true} width="100%">Contact</Text>
          </MenuItem>
          <MenuItem>
            <Text onClick={toggleProjectOff} to="projects" as={Link} href="#projects" spy={true} smooth={true} width="100%">Projects</Text>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu autoSelect={false} isLazy>
        <MenuButton as={HamburgerIcon} d={{ base: "block", md: "none" }} boxSize={"30px"} />
        <MenuList p={0} maxW="200px">
          <MenuItem>
            <Text onClick={toggleProjectOff} as={Link} to="about" href="#about" spy={true} smooth={true} width={"100%"}>
              About
            </Text>
          </MenuItem>
          <MenuItem>
            <Text onClick={toggleProjectOff} as={Link} to="skills" href="#skills" spy={true} smooth={true} width={"100%"}>
              Skills
            </Text>
          </MenuItem>
          <MenuItem>
            <Text onClick={toggleProjectOff} as={Link} to="contact" href="#contact" spy={true} smooth={true} width={"100%"}>
              Contact
            </Text>
          </MenuItem>
          <MenuItem>
            <Text onClick={toggleProject} as={Link} to="projects" href="#projects" spy={true} smooth={true} width={"100%"}>
              Projects
            </Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default Navigation;