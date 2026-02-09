"use client";

import {
  Box,
  Button,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface SignUpDropdownProps {
  triggerLabel: string;
  placement?: "bottom" | "bottom-end" | "bottom-start";
}

export default function SignUpDropdown({
  triggerLabel,
  placement = "bottom-end",
}: SignUpDropdownProps) {
  const [showFindACleanerSub, setShowFindACleanerSub] = useState(false);

  return (
    <Menu placement={placement}>
      <MenuButton
        as={Button}
        rightIcon={
          <MdOutlineKeyboardArrowDown
            style={{ width: "16px", height: "16px" }}
          />
        }
        rounded="full"
        h="47px"
        px="16px"
        bg="#4A90E2"
        color="white"
      >
        {triggerLabel}
      </MenuButton>

      <MenuList
        p="0"
        borderRadius="16px"
        minW={showFindACleanerSub ? "720px" : "360px"}
        w={showFindACleanerSub ? "720px" : "360px"}
        boxShadow="lg"
        onMouseLeave={() => setShowFindACleanerSub(false)}
      >
        <HStack align="stretch" spacing="0">
          {/* Left panel: Sign up as? */}
          <Box p="16px" minW="360px">
            <Heading fontSize="18px" mb="12px">
              Sign up as?
            </Heading>

            <Box
              as="span"
              display="block"
              onMouseEnter={() => setShowFindACleanerSub(true)}
            >
              <MenuItem
                p="12px"
                borderRadius="12px"
                _hover={{ bg: "#F2F6FF" }}
                closeOnSelect={false}
              >
                <HStack w="100%" spacing="12px">
                  <Box
                    w="40px"
                    h="40px"
                    bg="#EAF1FF"
                    borderRadius="full"
                    flexShrink={0}
                  />
                  <VStack align="flex-start" spacing="2px" flex="1">
                    <Text fontWeight={600}>Find a Cleaner</Text>
                    <Text fontSize="14px" color="gray.500">
                      Book trusted cleaners for home.
                    </Text>
                  </VStack>
                  <FiChevronRight />
                </HStack>
              </MenuItem>
            </Box>

            <Link href="/kyc/become-a-cleaner">
              <MenuItem
                p="12px"
                borderRadius="12px"
                _hover={{ bg: "#F2F6FF" }}
              >
                <HStack w="100%" spacing="12px">
                  <Box
                    w="40px"
                    h="40px"
                    bg="#EAF1FF"
                    borderRadius="12px"
                    flexShrink={0}
                  />
                  <VStack align="flex-start" spacing="2px" flex="1">
                    <Text fontWeight={600}>Become a Cleaner</Text>
                    <Text fontSize="14px" color="gray.500">
                      Earn by cleaning with Errbud.
                    </Text>
                  </VStack>
                </HStack>
              </MenuItem>
            </Link>
          </Box>

          {/* Right panel: Choose Your Cleaning Type */}
          {showFindACleanerSub && (
            <Box
              p="16px"
              minW="360px"
              borderLeft="1px solid"
              borderColor="gray.200"
              bg="white"
              borderRadius="0 16px 16px 0"
              onMouseEnter={() => setShowFindACleanerSub(true)}
            >
              <HStack
                mb="12px"
                spacing="8px"
                cursor="pointer"
                onClick={() => setShowFindACleanerSub(false)}
                _hover={{ color: "blue.600" }}
              >
                <FiChevronLeft />
                <Heading fontSize="18px">Choose Your Cleaning Type</Heading>
              </HStack>

              <Link href="/kyc/find-a-cleaner">
                <MenuItem
                  p="12px"
                  borderRadius="12px"
                  _hover={{ bg: "#F2F6FF" }}
                >
                  <VStack align="flex-start" spacing="2px" w="100%">
                    <Text fontWeight={600}>Domestic Client</Text>
                    <Text fontSize="14px" color="gray.500">
                      Book trusted, fully-vetted Errbuddies for your flat, house,
                      or personal space.
                    </Text>
                  </VStack>
                </MenuItem>
              </Link>

              <Link href="/kyc/business-client">
                <MenuItem
                  p="12px"
                  borderRadius="12px"
                  _hover={{ bg: "#F2F6FF" }}
                >
                  <VStack align="flex-start" spacing="2px" w="100%">
                    <Text fontWeight={600}>Business Client</Text>
                    <Text fontSize="14px" color="gray.500">
                      Apply for contract-based cleaning tailored to offices,
                      restaurants, schools, and other facilities.
                    </Text>
                  </VStack>
                </MenuItem>
              </Link>
            </Box>
          )}
        </HStack>
      </MenuList>
    </Menu>
  );
}
