import { Avatar, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FiBox, FiDollarSign, FiHome, FiPieChart } from "react-icons/fi";

const Dashboard = () => {
  return (
    <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
      {/* column 1 */}
      <Flex
        w="15%"
        flexDir="column"
        alignItems="center"
        backgroundColor="#020202"
        color="#fff"
      >
        <Flex
          flexDir="column"
          h="100vh"
          justifyContent="space-between"
          as="nav"
        >
          {/* heading section */}
          <Heading
            mt={50}
            mb={100}
            fontSize="4xl"
            alignSelf="center"
            letterSpacing="tight"
          >
            Rise.
          </Heading>

          {/* menu section */}
          <Flex flexDir="column" align="flex-start" justifyContent="center">
            <Flex className="sidebar-items">
              <Link>
                <Icon as={FiHome} fontSize="2xl" className="active-icon" />
              </Link>
              <Link _hover={{ textDecor: "none" }}>
                <Text className="active">Home</Text>
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link>
                <Icon as={FiPieChart} fontSize="2xl" />
              </Link>
              <Link _hover={{ textDecor: "none" }}>
                <Text>Credit</Text>
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link>
                <Icon as={FiDollarSign} fontSize="2xl" />
              </Link>
              <Link _hover={{ textDecor: "none" }}>
                <Text>Wallet</Text>
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link>
                <Icon as={FiBox} fontSize="2xl" />
              </Link>
              <Link _hover={{ textDecor: "none" }}>
                <Text>Services</Text>
              </Link>
            </Flex>
          </Flex>

          {/* footer section */}
          <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
            <Avatar my={2} src="avatar1.png" />
            <Text textAlign="center"> Calvin West</Text>
          </Flex>
        </Flex>
      </Flex>

      {/* column 2 */}
      <Flex></Flex>

      {/* column 3 */}
      <Flex></Flex>
    </Flex>
  );
};

export default Dashboard;
