import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

const HomePage = () => {
  const [isSliding, setIsSliding] = useState(false);

  // Check if the user has already slid the content once
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedHomePage");
    if (hasVisited === "true") {
      setIsSliding(true); // Skip the sliding animation if already visited
    }
  }, []);

  const handleReveal = () => {
    setIsSliding(true);
    sessionStorage.setItem("hasVisitedHomePage", "true"); // Mark as visited in session
  };

  return (
    <Box>
      <Box position="relative" height="100vh" overflow="hidden">
        {/* Background Box with Transparency */}
        <Box
     position="absolute"
     top={0}
     left={0}
     width="100%"
     height="100%"
     bgImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhe_ceUp_2foCvEZ61902xYRn3wN0YZiUKtA&s')"
     bgSize="100% auto" // Changed from "cover"
     bgPosition="center"
     bgRepeat="no-repeat"
     _before={{
       content: '""',
       position: "absolute",
       top: 0,
       left: 0,
       right: 0,
       bottom: 0,
       backgroundColor: "rgba(0, 0, 0, 0.8)",
     }}
     transform={isSliding ? "translateY(-100%)" : "translateY(0)"}
     transition="transform 0.8s ease-in-out"
   />
        
        {/* Content Box with Opaque Text */}
        <Box
          position="relative"
          display={isSliding ? "none" : "flex"} // Hide the content when sliding
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          zIndex={1} // Ensures content is above the background
          color="white"
          height="100%"
        >
          <Text fontSize="4xl" fontWeight="bold">
            Welcome
          </Text>
          <Text
            fontSize="lg"
            mt={4}
            cursor="pointer"
            position="absolute"
            bottom="5%"
            textDecoration="underline"
            onClick={handleReveal}
          >
            Slide up to continue
          </Text>
        </Box>

        {/* Sliding Box Content */}
        <Box
          position="absolute"
          top="100%"
          left={0}
          width="100%"
          height="100%"
          bg="black"
          transform={isSliding ? "translateY(-100%)" : "translateY(0)"}
          transition="transform 0.8s ease-in-out"
        >
          <Box p={4}>
            <Text fontSize="3xl" textAlign="center">
              Welcome to the Home Page
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
