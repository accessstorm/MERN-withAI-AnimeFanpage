import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HStack, Box, Text, Container } from "@chakra-ui/react";
import { FaHome, FaPlusCircle } from "react-icons/fa"; // Import icons
import Chat from "./Chat"; // Import the Chat Component

const Navbar = () => {
  const [showChat, setShowChat] = useState(false); // State to manage chat visibility

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <Box bg="transparent" p={4} color="white">
      <HStack spacing={5} align="center" justify="space-between"> {/* Flex alignment */}
        {/* Brand Section */}
        <Text fontWeight="bold" fontSize="3xl">
          AttackOnTitan
        </Text>

        {/* Navigation Links */}
        <Container display="flex" alignItems="center" justifyContent="flex-end" spacing={4}>
          {/* Home Link with Home Icon */}
          <Link to="/">
            <FaHome size={24} color="white" />
          </Link>

          {/* Create Page Link with Plus Icon */}
          <Link to="/create" style={{ marginLeft: "16px" }}>
            <FaPlusCircle size={24} color="white" />
          </Link>

          {/* Chat Toggle Button */}
          <button
            onClick={toggleChat}
            style={{
              marginLeft: "16px",
              background: "cyan",
              color: "black",
              border: "none",
              padding: "8px 16px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {showChat ? "Hide Chat" : "Show Chat"}
          </button>
        </Container>
      </HStack>

      {/* Chat Modal */}
      {showChat && (
        <div className="chat-overlay">
          <div className="chat-modal">
            <Chat />
          </div>
        </div>
      )}
    </Box>
  );
};

export default Navbar;
