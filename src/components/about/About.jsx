import "./about.css";
import React from "../../img/react.svg";
import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
const About = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 480px)");
  return (
    <Flex
      align={"center"}
      m={"auto"}
      w={"95%"}
      h={["50vh", "70vh"]}
      mt={!isLargerThan && "55%"}
      id="about"
    >
      {/* {isLargerThan ? (
        <Box className="a-left">
          <Box className="a-card bg"></Box>
          <Box className="a-card"></Box>
        </Box>
      ) : null} */}
      <Box px={["1rem", "3rem", "3rem", "5rem"]}>
        <Heading fontWeight={"semibold"} textAlign={"center"} my={"5"}>
          <span style={{ color: "rgb(255,101,1)", fontWeight: "bold" }}>About</span> Me
        </Heading>
        <Text
          my={"5"}
          fontSize={["xs", "sm", "md", "lg"]}
          px={"2"}
          textAlign={"justify"}
        >
          <Text fontWeight={"semibold"}>Hello , I am Vishal Mewada</Text>
          <Box color={"rgb(255,101,1)"} fontWeight={"semibold"}>
            <Typewriter
              options={{
                strings: ["Front End Web Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </Box>
         A FrontEnd developer having
          1100+hrs of hands on experience in web development and always
          energetic and eager to learn new things,Learning new things is for me
          a motivation to expand my knowledge and always honest with my work.
          also collaborative, flexible and versatile who loves to develop the
          websites using mern stack. Ambitious and hardworking individual with
          competency in web development and looking forward to work in the
          software industry.
        </Text>
        {/* <p className="a-desc">
       
        </p> */}
      </Box>
    </Flex>
  );
};

export default About;
