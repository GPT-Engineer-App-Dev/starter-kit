import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="lg" fontWeight="bold" mr={4}>
            Home
          </Link>
          <Link as={RouterLink} to="/login" color="white" fontSize="lg" fontWeight="bold">
            Login
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;