import { InfoIcon, StarIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, Stack } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import {
  forwardRef,
  ChakraProps,
  ComponentWithAs,
} from "@chakra-ui/react";
import { motion, MotionProps } from "framer-motion";


export type MotionBoxProps = Omit<
  ChakraProps,
  keyof MotionProps
> &
  MotionProps & {
    as?: React.ElementType;
  };

export const MotionBox = motion(
  forwardRef<ChakraProps, "div">((props, ref) => {
    return (
      <Box ref={ref} {...props}>
        <StarIcon color="main.yellow" 
          boxSize={10} />
      </Box>
    );
  })
) as ComponentWithAs<"div", MotionBoxProps>;

export function Footer() {
  return (
    <Stack 
      direction={{base: "row", lg: "column"}} 
      spacing="20px" 
      m="15px"
      alignSelf={{base: "right", lg: "center"}}>
      <Link to="/cv">
        <ViewIcon color="main.red" boxSize={10} />
      </Link>
      <Link to="/projects">
        <MotionBox
          animate={{ rotate: 720 }}
          transition={{ ease: "easeOut", duration: 5 }}
        />
      </Link>
      <Link to="/bio">
        <InfoIcon color="main.cyan" boxSize={10} />
      </Link>
    </Stack>
  )
}