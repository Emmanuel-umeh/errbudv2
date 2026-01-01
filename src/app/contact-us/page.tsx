import ContactUsNav from "@/components/molecules/ContactUsNav";
import Footer from "@/components/molecules/Footer";
import ContactCard from "@/components/organisms/Cards/ContactCard";
import ContactForm from "@/components/organisms/Form/ContactForm";
import CTA from "@/components/templates/CTA";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";

const Page = () => {
  return (
    <Stack>
      {/* Contact Us Banner */}
      <Box
        width="100%"
        minHeight="100vh"
        backgroundImage="/images/contact-banner.png"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        // pl={{ base: 6, md: "49.81px" }}
        // pr={{ base: 6, md: "50.19px" }}
        py={{ base: 8, md: "22px" }}
      >
        {/* Top Navigation */}

        <Box>
          <ContactUsNav />
        </Box>

        <Divider borderColor="white" />

        {/* Main Content */}
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: "72px", md: "135px" }}
          alignItems="center"
          mt={"55px"}
          pl={{ base: 6, md: "49.81px" }}
          pr={{ base: 6, md: "50.19px" }}
        >
          {/* Left Content */}
          <Stack spacing={"8px"}>
            <Box>
              <Text
                fontWeight={{ base: 400, md: 500 }}
                fontSize={{ base: "14px", md: "16px" }}
                color="whiteAlpha.800"
              >
                CONTACT
              </Text>

              <Heading
                fontWeight={600}
                fontSize={{ base: "32px", md: "56px" }}
                color="white"
                lineHeight="100%"
                letterSpacing={"-4%"}
              >
                Get in Touch
              </Heading>
            </Box>

            {/* For desktop */}
            <Text
              fontSize="18px"
              fontWeight={500}
              color="#FFFFFF"
              display={{ base: "none", md: "block" }}
            >
              Have questions, partnership ideas, or want to contract our <br />
              cleaning services for your business? We’d love to hear <br /> from
              you.
            </Text>

            {/* For mobile */}
            <Text
              fontSize="14px"
              color="#FFFFFF"
              fontWeight={400}
              display={{ base: "block", md: "none" }}
            >
              Have questions, partnership ideas, or want to <br /> contract our
              cleaning services for your business? <br /> We’d love to hear from
              you.
            </Text>
          </Stack>

          {/* Contact Form Card */}
          <ContactForm />
        </SimpleGrid>
      </Box>

      {/* Socials */}
      <VStack mt={"54px"}>
        <Text
          color={"primary"}
          fontWeight={500}
          fontSize={{ base: "14px", md: "16px" }}
        >
          Socials
        </Text>
        <Heading fontWeight={600} fontSize={{ base: "24px", md: "36px" }}>
          Other Ways To Reach Us
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={"23px"} mt={"40px"}>
          <ContactCard
            icon={
              <BiMessageAltDetail
                style={{
                  color: "#4A90E2",
                  width: "26.67px",
                  height: "26.75px",
                  borderRadius: "10px",
                }}
              />
            }
            title="Email"
            link="info@errbud.com"
          />
          <ContactCard
            icon={
              <FaXTwitter
                style={{
                  color: "#4A90E2",
                  width: "32px",
                  height: "32px",
                  borderRadius: "10px",
                }}
              />
            }
            title="Twitter"
            link="@errbud"
          />
          <ContactCard
            icon={
              <FaLinkedin
                style={{
                  color: "#4A90E2",
                  width: "26.67px",
                  height: "26.75px",
                  borderRadius: "10px",
                }}
              />
            }
            title="Linkedin"
            link="Errand Buddy Ltd"
          />
        </SimpleGrid>
      </VStack>

      {/* FAQ */}
      <Box
        bg={"#EFF3FF"}
        mt={"54px"}
        pt={"120px"}
        sx={{
          "--c": "70px",
          mask: "radial-gradient(60% var(--c) at top, transparent calc(100% - 1px), black)",
          WebkitMask:
            "radial-gradient(60% var(--c) at top, transparent calc(100% - 1px), black)",
        }}
      >
        <VStack>
          <Text color={"primary"} fontWeight={500} fontSize={"16px"}>
            FAQs
          </Text>
          <Heading
            fontWeight={600}
            fontSize={{ base: "24px", md: "36px" }}
            textAlign={"center"}
          >
            Quick Answers Before You <br /> Reach Out
          </Heading>
        </VStack>
        {/* Accordion */}
        <Box px={{ base: "16px", md: "133px" }} pt={"77px"}>
          <Accordion>
            <AccordionItem
              border={"1px solid #F7F9FC"}
              rounded={"15px"}
              bg={"#F7F9FC"}
              mb={"24px"}
            >
              <Heading>
                <AccordionButton bg={"#F7F9FC"}>
                  <Box as="span" flex="1" textAlign="left">
                    <Heading
                      fontSize={{ base: "16px", md: "20px" }}
                      fontWeight={{ base: 500, md: 600 }}
                      color={"#1D2739"}
                    >
                      How do I book a cleaner?
                    </Heading>
                  </Box>
                  <IoIosAddCircleOutline
                    style={{ width: "32px", height: "32px" }}
                  />
                </AccordionButton>
              </Heading>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              border={"1px solid #F7F9FC"}
              rounded={"15px"}
              bg={"#F7F9FC"}
              mb={"24px"}
            >
              <Heading>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Heading
                      fontSize={{ base: "16px", md: "20px" }}
                      fontWeight={{ base: 500, md: 600 }}
                      color={"#1D2739"}
                    >
                      Are your cleaners verified?
                    </Heading>
                  </Box>
                  <IoIosAddCircleOutline
                    style={{ width: "32px", height: "32px" }}
                  />
                </AccordionButton>
              </Heading>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              border={"1px solid #F7F9FC"}
              rounded={"15px"}
              bg={"#F7F9FC"}
            >
              <Heading>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Heading
                      fontSize={{ base: "16px", md: "20px" }}
                      fontWeight={{ base: 500, md: 600 }}
                      color={"#1D2739"}
                    >
                      Do you offer business contracts?
                    </Heading>
                  </Box>
                  <IoIosAddCircleOutline
                    style={{ width: "32px", height: "32px" }}
                  />
                </AccordionButton>
              </Heading>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        {/* CTA section */}

        {/* <Box px={"163px"}>
            <CTA />
          </Box> */}
        <Box
          position="relative"
          px={{ base: "16px", md: "163px" }}
          mt="79px"
          py={{ base: "48px", md: "89px" }}
        >
          {/* Left star */}
          <Image
            src="/images/left-star-white.png"
            alt="star left"
            position="absolute"
            display={{ base: "none", md: "block" }}
            top="100px"
            left="25px"
            width="130px"
            height="125px"
          />

          {/* Right star */}
          <Image
            src="/images/right-star-white.png"
            alt="star right"
            position="absolute"
            display={{ base: "none", md: "block" }}
            top="50%"
            transform="translateY(-50%)"
            right="90px"
            width="130px"
            height="125px"
          />

          <CTA />
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Stack>
  );
};

export default Page;
