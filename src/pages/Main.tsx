import { Flex } from "@chakra-ui/react";
import { Footer } from "../components/main/_footer_index";
import { FooterMobile } from "../components/main/_footer_mobile";
import { HeaderIndex } from "../components/main/_header_index";
import { SideBar } from "../components/main/_sideBar_index";

export function Main() {
  return (
    <Flex
      alignItems={"center"}
      width={"100%"}
      justifyContent={"space-between"}
      flexDirection={{base: "column", lg: "row"}}
    >
      <SideBar/>
      <HeaderIndex/>
      <Footer />
      <FooterMobile/>
    </Flex>
  )
}