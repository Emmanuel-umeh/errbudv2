import { Box, Heading, Text } from "@chakra-ui/react";
import { ICard } from "../Interface";

const ContactCard = ({ icon, link, title }: ICard) => {
  return (
    <Box
      width="349px"
      height={"182px"}
      rounded={"15px"}
      bg={"#F0F2F5"}
      py={"28px"}
      px={"16px"}
    >
      <Box mb={"28px"}>{icon}</Box>

      <Box>
        <Heading
          pb={"8px"}
          fontSize={{ base: "24px", md: "32px" }}
          fontWeight={600}
        >
          {title}
        </Heading>
        <Text fontSize="18px" fontWeight={500}>
          {link}
        </Text>
      </Box>
    </Box>
  );
};

export default ContactCard;
