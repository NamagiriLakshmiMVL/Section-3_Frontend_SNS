import React from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { ChakraProvider } from "@chakra-ui/react";

const LoginPage = () => {
  const styles = {
    color: "darkred",
    fontWeight: 630,
  };
  return (
    <ChakraProvider>
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg="white"
          w="100%"
          borderWidth="1px"
          borderRadius="lg"
          m="40px 0 15px 0"
          textAlign={"center"}
          width={"100%"}
          color={"black"}
          backgroundColor={"lightgrey"}
        >
          <Tabs isFitted variant="soft-rounded">
            <TabList mb={"1em"}>
              <Tab style={styles}>Login</Tab>
              <Tab style={styles}>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>{<Login />}</TabPanel>
              <TabPanel>{<Signup />}</TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default LoginPage;
