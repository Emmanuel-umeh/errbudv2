import Footer from "@/components/molecules/Footer";
import Navbar from "@/components/molecules/Navbar";
import CTA from "@/components/templates/CTA";
import {
  Box,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const page = () => {
  return (
    <Stack>
      <Box
        position="relative"
        bgGradient="linear(to-b, #C6DAF8 0%, #FFFFFF 100%)"
        height={{ base: "370px", md: "420px" }}
        overflow="hidden"
      >
        {/* Left vector  Desktop*/}
        <Image
          src="/images/pp-vector-left.png"
          alt="decorative vector"
          position="absolute"
          top="200px"
          left="0px"
          width="290px"
          height={"200px"}
          display={{ base: "none", md: "block" }}
        />
        {/* Left vector  Mobile*/}
        <Image
          src="/images/pp-vector-left.png"
          alt="decorative vector"
          position="absolute"
          top="200px"
          left="0px"
          width="190px"
          height={"150px"}
          display={{ base: "block", md: "none" }}
        />

        {/* Glove destop */}
        <Image
          src="/images/gloves.png"
          alt="decorative vector"
          position="absolute"
          top="180px"
          left="400px"
          width="200px"
          height="180px"
          display={{ base: "none", md: "block" }}
        />
        {/* Glove Mobile */}
        <Image
          src="/images/gloves.png"
          alt="decorative vector"
          position="absolute"
          top="190px"
          left="0px"
          width="150px"
          height="150px"
          display={{ base: "block", md: "none" }}
        />

        {/* Spray desktop */}
        <Image
          src="/images/spray.png"
          alt="decorative vector"
          position="absolute"
          top="180px"
          right="450px"
          width="132px"
          height={"179px"}
          display={{ base: "none", md: "block" }}
        />

        {/* Spray Mobile */}
        <Image
          src="/images/spray.png"
          alt="decorative vector"
          position="absolute"
          top="190px"
          right="0px"
          width="100px"
          height={"150px"}
          display={{ base: "block", md: "none" }}
        />

        {/* Right vector desktop */}
        <Image
          src="/images/pp-vector-right.png"
          alt="decorative vector"
          position="absolute"
          top="200px"
          right="0px"
          width="200px"
          height={"200px"}
          display={{ base: "none", md: "block" }}
        />
        {/* Right vector mobile */}
        <Image
          src="/images/pp-vector-right.png"
          alt="decorative vector"
          position="absolute"
          top="200px"
          right="0px"
          width="100px"
          height={"150px"}
          display={{ base: "block", md: "none" }}
        />

        <Navbar />

        <Heading
          fontWeight={600}
          fontSize={{ base: "32px", md: "56px" }}
          textAlign="center"
          pt={"92px"}
          letterSpacing={"-4%"}
        >
          <Box as="span" color="#4A90E2">
            Privacy
          </Box>{" "}
          Policy
        </Heading>
      </Box>

      {/* Privacy and Policy texts */}
      <Box bg="#FFFFFF" py={{ base: "40px", md: "40px" }}>
        <Box maxW="900px" mx="auto" px={{ base: "20px", md: "32px" }}>
          <Stack spacing="40px">
            {/* Title */}
            <Heading
              fontSize={{ base: "24px", md: "32px" }}
              fontWeight={600}
              color="#1D2739"
            >
              Data Protection Privacy Policy
            </Heading>

            {/* Intro */}
            <Text fontSize="16px" lineHeight="1.9" color="#4A5568">
              We at Errbud treat your privacy with the highest importance. Our
              Data Protection Privacy Policy outlines the measures we take to
              protect and safeguard your privacy when you visit our website, use
              our mobile application, or communicate with our personnel. This
              Data Protection Privacy Policy has been approved and provided by
              our Board and Legal Advisors.
            </Text>

            {/* Policy Includes */}
            <Box>
              <Text fontWeight={600}>This policy includes:</Text>
              <Stack pl="16px" spacing="6px">
                <Text>a. Privacy Policy</Text>
                <Text>i. Data Collection</Text>
                <Text>ii. Your Personal Data and How it is Used</Text>
                <Text>iii. Change of Purpose</Text>
                <Text>iv. Your Personal Data Rights</Text>
                <Text>v. Persons who have access to your Personal Data</Text>
                <Text>vi. Security & Confidentiality</Text>
                <Text>
                  vii. Transfer of Personal Data outside the United Kingdom
                </Text>
                <Text>viii. Retention of Personal Data</Text>
                <Text>ix. Third Party Links</Text>
                <Text>b. Cookies Policy</Text>
                <Text>c. Subject Access Request Response Procedure</Text>
                <Text lineHeight="1.9">
                  We regularly update our Privacy Policy, which we will notify
                  you of on our mobile application or by email.
                </Text>
              </Stack>
            </Box>

            {/* Glossary */}
            <Heading fontSize="24px" fontWeight={600}>
              Glossary
            </Heading>

            <Stack spacing="16px" lineHeight="1.9">
              <Text>
                <strong>Affiliated Third Parties</strong> include companies with
                which we have common ownership or management, or other
                contractual, strategic support, or partnership relationships
                with, our advisers, consultants, payment processors, identity
                verification providers, SMS and email service providers, cloud
                hosting providers, vendors, or sub-contractors.
              </Text>

              <Text>
                <strong>Client</strong> means a person (domestic or business)
                who uses the Errbud platform to book cleaning services.
              </Text>

              <Text>
                <strong>Cookies</strong> are small text files stored on your
                device to help us improve your experience and analyse how you
                use our services.
              </Text>

              <Text>
                <strong>Data</strong> is information that is stored
                electronically, on a computer, or in certain paper-based filing
                systems.
              </Text>

              <Text>
                <strong>Data Controller</strong> is a person responsible for
                determining the manner in which Personal Data would be
                processed.
              </Text>

              <Text>
                <strong>Data Subject</strong> means the individual to whom
                Personal Data relates.
              </Text>

              <Text>
                <strong>Errbuddy</strong> means a cleaner who has been verified
                and approved to provide cleaning services through the Errbud
                platform.
              </Text>

              <Text>
                <strong>GDPR</strong> means the General Data Protection
                Regulation (UK GDPR and EU GDPR as applicable).
              </Text>

              <Text>
                <strong>ICO</strong> means the Information Commissioner's
                Office, the UK's independent authority for upholding information
                rights.
              </Text>

              <Text>
                <strong>KYC</strong> means Know Your Customer, the identity
                verification process required for trust and safety on our
                platform.
              </Text>

              <Text>
                <strong>Personal Data</strong> is information relating to an
                identified or identifiable natural person. These include a name,
                gender, a photo, an email address, phone number, address, bank
                details, payment information, government-issued ID, facial
                recognition data, National Insurance Number, computer internet
                protocol address, and any other information specific to the
                physical, physiological, genetic, mental, economic, cultural, or
                social identity of that natural person.
              </Text>

              <Text>
                <strong>Processing</strong> is any activity that involves the
                use of Personal Data. It includes obtaining, recording, or
                holding the data, or carrying out any operation or set of
                operations on the data, including organising, amending,
                recording, retrieving, using, disclosing, erasing, or destroying
                it. Processing also includes transferring Personal Data to third
                parties.
              </Text>

              <Text>
                <strong>Sensitive Personal Data</strong>includes information
                about a person's racial origin, political opinions, religious or
                similar beliefs, trade union membership, physical or mental
                health or condition, sexual life, biometric data (facial
                recognition for identity verification), or criminal convictions.
              </Text>
            </Stack>

            {/* PRIVACY POLICY – DATA COLLECTION */}
            <Box mt="64px">
              <Stack spacing="48px">
                {/* Section Title */}
                <Heading
                  fontSize={{ base: "22px", md: "28px" }}
                  fontWeight={600}
                >
                  PRIVACY POLICY
                </Heading>

                {/* 1. Data Collection */}
                <Box>
                  <Heading fontSize="22px" fontWeight={600} mb="16px">
                    1. Data Collection
                  </Heading>

                  <Text lineHeight="1.9" mb="16px">
                    We may collect, use, store and transfer different kinds of
                    Personal Data about you, which we have grouped as follows:
                  </Text>

                  <Stack spacing="16px" pl="8px">
                    <Text>
                      <strong>Identity Data</strong> includes first name, last
                      name, username or similar identifier, date of birth,
                      gender, photograph, government-issued identification
                      documents (passport, driver's license, national ID),
                      facial recognition data (for KYC verification), and
                      National Insurance Number (for Errbuddies).
                    </Text>

                    <Text>
                      <strong>Contact Data</strong> includes residential
                      address, property addresses (for cleaning service
                      locations), business facility addresses, email address and
                      telephone numbers.
                    </Text>

                    <Text>
                      <strong>Financial Data</strong> includes bank account
                      details (account number, sort code, bank name), payment
                      card information, transaction history, billing
                      information, and referral credit balance.
                    </Text>

                    <Text>
                      <strong>Profile Data</strong> includes your username and
                      password, bookings or services requested by you, cleaner
                      preferences, cleaning frequency preferences, property
                      information, your interests, preferences, feedback, survey
                      responses, and complaints submitted.
                    </Text>

                    <Text>
                      <strong>Technical Data</strong> includes internet protocol
                      (IP) address, domain name, your login data, browser type
                      and version, time zone setting and location, browser
                      plug-in types and versions, operating system and platform,
                      device type and unique device identifiers, and other
                      technology on the devices you use to access our mobile
                      application or website.
                    </Text>

                    <Text>
                      <strong>Usage Data</strong> includes information about how
                      you use our mobile application, website and services,
                      features accessed, pages viewed, time spent in the
                      application, booking history, and interaction patterns.
                    </Text>

                    <Text>
                      <strong>Marketing and Communications Data</strong>{" "}
                      includes your preferences in receiving marketing
                      communications from us and our Affiliated Third Parties,
                      your communication preferences, and referral activity.
                    </Text>

                    <Text>
                      <strong>Employment Data (for Errbuddy applicants)</strong>{" "}
                      includes CV, employment history, professional and
                      educational information, Right-to-Work Share Code,
                      references, and cleaner category preference.
                    </Text>

                    <Text>
                      <strong>Business Client Data</strong> includes facility
                      type, business operation hours, contract duration,
                      cleaning materials availability, contact person details,
                      and business representative information.
                    </Text>

                    <Text>
                      <strong>Service Data</strong> includes booking details,
                      cleaning type selected (Regular Clean, Deep Clean, End of
                      Tenancy), room selections, add-ons requested, date and
                      time of service, cleaner assignments, job status, and
                      service completion records.
                    </Text>

                    <Text>
                      <strong>Communication Data</strong> includes messages
                      exchanged between Clients and Errbuddies through our
                      in-app messaging system, support inquiries, complaint
                      details, and correspondence with our team.
                    </Text>

                    <Text>
                      <strong>Location Data</strong> includes your device
                      location (with your permission) to match you with nearby
                      Errbuddies and provide location-based services.
                    </Text>
                  </Stack>
                </Box>

                {/* How We Collect Your Data */}
                <Box>
                  <Heading fontSize="20px" fontWeight={600} mb="16px">
                    How We Collect Your Data
                  </Heading>

                  <Text mb="16px">
                    You provide this information through direct interaction when
                    you:
                  </Text>

                  <UnorderedList spacing="8px" pl="24px">
                    <ListItem>
                      Create an account (domestic or business client, or
                      Errbuddy)
                    </ListItem>
                    <ListItem>Complete the KYC verification process</ListItem>
                    <ListItem>
                      Book cleaning services through our platform
                    </ListItem>
                    <ListItem>Add or manage property addresses</ListItem>
                    <ListItem>Apply to become an Errbuddy</ListItem>
                    <ListItem>Submit a complaint or support inquiry</ListItem>
                    <ListItem>Complete feedback forms or surveys</ListItem>
                    <ListItem>Use our in-app messaging feature</ListItem>
                    <ListItem>Sign up for our referral programme</ListItem>
                    <ListItem>
                      Provide your business card to any of our staff
                    </ListItem>
                    <ListItem>
                      Request marketing materials or newsletters
                    </ListItem>
                    <ListItem>
                      Contact us via email, phone, or our website
                    </ListItem>
                    <ListItem>Use our mobile application or website</ListItem>
                  </UnorderedList>

                  <Text mt="16px">
                    As you interact with our mobile application or website, we
                    will automatically collect Technical Data about your
                    equipment, browsing actions and patterns. We collect this
                    data by using cookies and other similar technologies. Please
                    see our Cookies Policy for further details.
                  </Text>

                  <Text mt="16px">
                    We also collect information from third parties including:
                  </Text>

                  <UnorderedList spacing="8px" pl="24px" mt="8px">
                    <ListItem>
                      Identity verification providers (KYC data, document
                      verification, facial recognition results)
                    </ListItem>
                    <ListItem>
                      Payment processors (payment status, transaction
                      confirmations)
                    </ListItem>
                    <ListItem>
                      Social media platforms (if you sign in with Google or
                      Apple)
                    </ListItem>
                    <ListItem>
                      Referrers (if you were invited by another user)
                    </ListItem>
                  </UnorderedList>
                </Box>

                {/* Sensitive Personal Data */}
                <Box>
                  <Heading fontSize="20px" fontWeight={600} mb="16px">
                    Sensitive Personal Data
                  </Heading>

                  <Text mb="16px">
                    We collect Sensitive Personal Data only where necessary for
                    specific purposes:
                  </Text>

                  <UnorderedList spacing="8px" pl="24px">
                    <ListItem>
                      Facial recognition data (biometric data) for KYC identity
                      verification and liveness checks to ensure platform safety
                    </ListItem>
                    <ListItem>
                      National Insurance Number for Errbuddies to comply with
                      employment and tax regulations
                    </ListItem>
                    <ListItem>
                      Criminal records information may be checked for Errbuddies
                      during background verification (where legally permitted)
                    </ListItem>
                  </UnorderedList>

                  <Text mt="16px">
                    We ask that you do not send to us nor disclose any other
                    Sensitive Personal Data, save where required for a specific
                    purpose and with your explicit consent.
                  </Text>
                </Box>

                {/* Children's Data */}
                <Box>
                  <Heading fontSize="20px" fontWeight={600} mb="16px">
                    Children's Data
                  </Heading>

                  <Text lineHeight="1.9">
                    Errbud is not intended for users under 18 years of age. We
                    do not knowingly collect Personal Data from minors. If you
                    believe we have collected data from a minor, please contact
                    us immediately at info@errbud.com.
                  </Text>
                </Box>
              </Stack>
            </Box>

            <Box mt="64px">
              <Box maxW="1000px" mx="auto">
                {/* Section Title */}

                <Heading
                  fontSize={{ base: "22px", md: "28px" }}
                  fontWeight={600}
                >
                  2. Your Personal Data and How it is Used
                </Heading>

                {/* Intro Text */}
                <Text
                  fontSize="16px"
                  lineHeight="28px"
                  color="#475467"
                  mb="32px"
                >
                  Primarily, we collect, process and store your Personal Data to
                  operate our cleaning services and connect Clients with
                  Errbuddies safely. The following are the purposes for which we
                  collect your Personal Data:
                </Text>

                {/* For All Users */}
                <Heading
                  fontSize="20px"
                  fontWeight={600}
                  mb="16px"
                  color="#1D2739"
                >
                  For All Users:
                </Heading>

                <UnorderedList
                  spacing="12px"
                  pl="20px"
                  mb="32px"
                  color="#475467"
                >
                  <ListItem>
                    To create and manage your account on the Errbud platform.
                  </ListItem>
                  <ListItem>
                    To verify your identity through KYC processes for safety,
                    trust, and legal compliance.
                  </ListItem>
                  <ListItem>
                    To monitor, review, evaluate and improve your experience
                    when you use our mobile application or visit our website.
                  </ListItem>
                  <ListItem>
                    To analyse traffic and usage patterns, including determining
                    the number of users and how they navigate our platform.
                  </ListItem>
                  <ListItem>
                    To provide customer support and respond to your inquiries,
                    requests, or complaints.
                  </ListItem>
                  <ListItem>
                    To send you service-related communications including account
                    verification emails, booking confirmations, service updates,
                    and important notices.
                  </ListItem>
                  <ListItem>
                    To invite you to complete surveys or provide feedback on
                    specific matters.
                  </ListItem>
                  <ListItem>
                    To improve our services, develop new features, and enhance
                    platform functionality.
                  </ListItem>
                  <ListItem>
                    To prevent fraud, ensure platform safety, and protect
                    against prohibited or illegal activities.
                  </ListItem>
                  <ListItem>
                    To comply with legal, regulatory, tax, and accounting
                    obligations.
                  </ListItem>
                  <ListItem>
                    To resolve disputes between Clients and Errbuddies.
                  </ListItem>
                  <ListItem>
                    To store data on our secure servers or third-party cloud
                    storage providers for operational and backup purposes.
                  </ListItem>
                </UnorderedList>

                {/* For Clients */}
                <Heading
                  fontSize="20px"
                  fontWeight={600}
                  mb="16px"
                  color="#1D2739"
                >
                  For Clients:
                </Heading>

                <UnorderedList
                  spacing="12px"
                  pl="20px"
                  mb="32px"
                  color="#475467"
                >
                  <ListItem>
                    To process and manage your cleaning service bookings.
                  </ListItem>
                  <ListItem>
                    To match you with available Errbuddies based on your
                    location, service requirements, and Errbuddy availability.
                  </ListItem>
                  <ListItem>
                    To share your property address and contact details with the
                    assigned Errbuddies so they can perform cleaning services.
                  </ListItem>
                  <ListItem>
                    To process payments for cleaning services through our
                    third-party payment processors.
                  </ListItem>
                  <ListItem>
                    To manage your property addresses and booking preferences.
                  </ListItem>
                  <ListItem>
                    To handle and investigate complaints you submit about
                    Errbuddies or services received.
                  </ListItem>
                  <ListItem>
                    To provide billing reports and transaction history.
                  </ListItem>
                  <ListItem>
                    For business clients: to manage contracts, service
                    schedules, and contract extension requests.
                  </ListItem>
                </UnorderedList>

                {/* For Errbuddies */}
                <Heading
                  fontSize="20px"
                  fontWeight={600}
                  mb="16px"
                  color="#1D2739"
                >
                  For Errbuddies:
                </Heading>

                <UnorderedList
                  spacing="12px"
                  pl="20px"
                  mb="32px"
                  color="#475467"
                >
                  <ListItem>
                    To assess and process your application to become an
                    Errbuddy.
                  </ListItem>
                  <ListItem>
                    To verify your Right-to-Work status and National Insurance
                    Number for legal compliance.
                  </ListItem>
                  <ListItem>
                    To match you with cleaning jobs based on your category ,
                    location, and availability.
                  </ListItem>
                  <ListItem>
                    To share your name, profile picture, and Cleaner ID with
                    Clients who book your services.
                  </ListItem>
                  <ListItem>
                    To process payments to your bank account for completed
                    cleaning jobs.
                  </ListItem>
                  <ListItem>
                    To manage your availability, job assignments, and service
                    history.
                  </ListItem>
                  <ListItem>
                    To handle and investigate complaints submitted against you
                    by Clients.
                  </ListItem>
                  <ListItem>
                    To provide performance feedback and service quality
                    monitoring.
                  </ListItem>
                </UnorderedList>

                {/* Marketing */}
                <Heading
                  fontSize="20px"
                  fontWeight={600}
                  mb="12px"
                  color="#1D2739"
                >
                  Marketing Communications:
                </Heading>

                <Text
                  fontSize="16px"
                  lineHeight="28px"
                  color="#475467"
                  mb="32px"
                >
                  To keep you updated on our activities, programmes, events, new
                  features, and promotional offers where your explicit consent
                  has been given.
                </Text>

                {/* Location */}
                <Heading
                  fontSize="20px"
                  fontWeight={600}
                  mb="12px"
                  color="#1D2739"
                >
                  Location-Based Services:
                </Heading>

                <Text
                  fontSize="16px"
                  lineHeight="28px"
                  color="#475467"
                  mb="24px"
                >
                  With your permission, we collect location data to match
                  Clients with nearby Errbuddies, provide accurate service
                  delivery, and improve our geographical coverage.
                </Text>

                <Text
                  fontSize="15px"
                  lineHeight="26px"
                  color="#475467"
                  mb="40px"
                >
                  Be aware that we do not reveal identifiable information about
                  you to our advertisers, though we may at times share
                  statistical visitor information with our advertisers.
                </Text>

                {/* Legal Basis */}
                <Heading
                  fontSize="20px"
                  fontWeight={600}
                  mb="16px"
                  color="#1D2739"
                >
                  Legal Basis for Processing (UK GDPR)
                </Heading>

                <UnorderedList
                  spacing="12px"
                  pl="20px"
                  mb="48px"
                  color="#475467"
                >
                  <ListItem>
                    <strong>Contract Performance:</strong> To provide the
                    cleaning services you've requested or to process your
                    application to become an Errbuddy.
                  </ListItem>
                  <ListItem>
                    <strong>Legal Obligation:</strong> For tax, accounting, KYC
                    verification, fraud prevention, Right-to-Work checks, and
                    regulatory compliance.
                  </ListItem>
                  <ListItem>
                    <strong>Legitimate Interests:</strong> To improve our
                    services, ensure platform safety, prevent fraud, match
                    Clients with Errbuddies efficiently, and resolve disputes.
                    We ensure our legitimate interests do not override your
                    fundamental rights and freedoms.
                  </ListItem>
                  <ListItem>
                    <strong>Consent:</strong> For marketing communications,
                    location tracking, optional features, and processing of
                    Sensitive Personal Data (facial recognition, NI Number). You
                    can withdraw consent at any time.
                  </ListItem>
                </UnorderedList>

                {/* Change of Purpose */}
                <Heading fontSize="22px" fontWeight={600} mb="16px">
                  3. Change of Purpose
                </Heading>

                <Text
                  fontSize="16px"
                  lineHeight="28px"
                  color="#475467"
                  mb="16px"
                >
                  We will only use your Personal Data for the aforementioned
                  purposes, unless we reasonably consider that we need to use it
                  for another reason and that reason is compatible with the
                  original purpose.
                </Text>

                <Text fontSize="16px" lineHeight="28px" color="#475467">
                  If you wish to get an explanation as to how the processing for
                  the new purpose is compatible with the original purpose,
                  please contact us at info@errbud.com. If we need to use your
                  Personal Data for an unrelated purpose, we will notify you and
                  request your express consent before proceeding.
                </Text>
              </Box>
            </Box>

            <Box mt="64px">
              <Box maxW="1000px" mx="auto">
                {/* Section 4 */}
                <Heading fontSize="22px" fontWeight={600} mb="16px">
                  4. Your Personal Data Rights
                </Heading>

                <Text
                  fontSize="16px"
                  lineHeight="28px"
                  color="#475467"
                  mb="24px"
                >
                  Data Protection Laws (UK GDPR and Data Protection Act 2018)
                  provide you with certain rights in relation to the information
                  that we collect about you:
                </Text>

                <UnorderedList
                  spacing="14px"
                  pl="20px"
                  mb="32px"
                  color="#475467"
                >
                  <ListItem>
                    The right to withdraw consent previously given to our
                    Affiliated Third Parties. In order to make use of your
                    Personal Data, we would have obtained your consent where
                    required. For consent to be valid, it must be given
                    voluntarily. In line with regulatory requirements, consent
                    cannot be implied, and we ensure that you have the
                    opportunity to read our data protection privacy policy
                    before you provide your consent. Consent in respect of
                    Sensitive Personal Data (such as facial recognition data,
                    National Insurance Number) must be explicit and will be
                    given by you in writing to us or through explicit opt-in
                    mechanisms in our application.
                  </ListItem>

                  <ListItem>
                    You can ask Affiliated Third Parties to stop sending you
                    marketing messages at any time by adjusting your marketing
                    preferences in your account settings or by following the
                    opt-out links on any marketing message sent to you.
                  </ListItem>

                  <ListItem>
                    The right to request that we delete your Personal Data that
                    is in our possession, subject to retention required for
                    legal purposes (tax, accounting, dispute resolution) and the
                    time required technically to delete such information. Please
                    note that deleting your account will prevent you from
                    accessing the Errbud platform.
                  </ListItem>

                  <ListItem>
                    The right to request access to your Personal Data or object
                    to our processing of the same. Where Personal Data is held
                    electronically in a structured form, you have a right to
                    receive that data in a common electronic format.
                  </ListItem>

                  <ListItem>
                    The right to rectify (update) your Personal Data that is
                    kept with us. You may update your username directly through
                    your profile settings. For changes to other personal
                    information, such as email, phone number, or name, please
                    contact our support team at info@errbud.com.
                  </ListItem>

                  <ListItem>
                    The right to receive your Personal Data and have it
                    transferred to another Data Controller (data portability),
                    as applicable.
                  </ListItem>

                  <ListItem>
                    The right to restrict processing of your Personal Data in
                    certain circumstances, such as while we verify the accuracy
                    of disputed data.
                  </ListItem>

                  <ListItem>
                    The right to object to the processing of your Personal Data
                    based on legitimate interests or for direct marketing
                    purposes.
                  </ListItem>

                  <ListItem>
                    The right to complain to the Information Commissioner's
                    Office (ICO) if you believe we have not handled your
                    Personal Data properly. You can contact the ICO at:
                    <Box mt="8px" pl="12px">
                      <Text>● Website: ico.org.uk</Text>
                    </Box>
                  </ListItem>
                </UnorderedList>

                <Text
                  fontSize="16px"
                  lineHeight="28px"
                  color="#475467"
                  mb="56px"
                >
                  You may exercise any of the above stated rights by following
                  our Subject Access Request Response Procedure, detailed below
                  or by contacting us at info@errbud.com.
                </Text>

                {/* Section 5 */}
                <Heading fontSize="22px" fontWeight={600} mb="16px">
                  5. Persons who have access to your Personal Data
                </Heading>

                <Text
                  fontSize="16px"
                  lineHeight="28px"
                  color="#475467"
                  mb="24px"
                >
                  In addition to our staff who have a business need to know, the
                  following trusted third parties have access to your
                  information:
                </Text>

                <Heading
                  fontSize="18px"
                  fontWeight={600}
                  mb="12px"
                  color="#1D2739"
                >
                  Between Platform Users:
                </Heading>

                <UnorderedList
                  spacing="12px"
                  pl="20px"
                  mb="24px"
                  color="#475467"
                >
                  <ListItem>
                    Clients can see: Errbuddy's name, profile picture, Cleaner
                    ID, and cleaner category for Errbuddies assigned to their
                    bookings.
                  </ListItem>
                  <ListItem>
                    Errbuddies can see: Client's name, property address, phone
                    number, and booking details for jobs assigned to them.
                  </ListItem>
                </UnorderedList>

                <Heading
                  fontSize="18px"
                  fontWeight={600}
                  mb="12px"
                  color="#1D2739"
                >
                  Service Providers and Affiliated Third Parties:
                </Heading>

                <UnorderedList
                  spacing="12px"
                  pl="20px"
                  mb="24px"
                  color="#475467"
                >
                  <ListItem>
                    Identity verification providers (for KYC checks, document
                    verification, facial recognition, and liveness detection).
                  </ListItem>
                  <ListItem>
                    Payment processors (to process transactions, handle refunds,
                    and manage payouts to Errbuddies).
                  </ListItem>
                  <ListItem>
                    Email and SMS service providers (to send verification codes,
                    booking confirmations, notifications, and support
                    communications).
                  </ListItem>
                  <ListItem>
                    Cloud hosting and data storage providers (to securely store
                    your information and ensure platform availability).
                  </ListItem>
                  <ListItem>
                    Customer relationship management tools (to manage our user
                    database and communications).
                  </ListItem>
                  <ListItem>
                    Analytics providers (to understand usage patterns and
                    improve our services - data is anonymised where possible).
                  </ListItem>
                  <ListItem>
                    Our Affiliated Third Parties who require your information
                    for the same purposes described in this Policy and who have
                    adopted similar privacy policy standards, further to
                    contractual obligations to us under a third-party data
                    processing agreement we have entered with them.
                  </ListItem>
                  <ListItem>
                    Professional service providers such as IT service providers,
                    website and application hosts, legal advisors, and auditors.
                  </ListItem>
                </UnorderedList>

                <Heading
                  fontSize="18px"
                  fontWeight={600}
                  mb="12px"
                  color="#1D2739"
                >
                  For Legal and Business Reasons:
                </Heading>

                <UnorderedList
                  spacing="12px"
                  pl="20px"
                  mb="32px"
                  color="#475467"
                >
                  <ListItem>
                    Regulatory authorities and law enforcement (when required by
                    law, court order, or to protect rights and safety).
                  </ListItem>
                  <ListItem>
                    Business transaction parties (in the event of a merger,
                    acquisition, or sale of assets, your data may be transferred
                    to the new owner, subject to this Privacy Policy).
                  </ListItem>
                </UnorderedList>

                <Heading
                  fontSize="18px"
                  fontWeight={600}
                  mb="12px"
                  color="#1D2739"
                >
                  Data Sharing Principles:
                </Heading>

                <Text
                  fontSize="16px"
                  lineHeight="28px"
                  color="#475467"
                  mb="56px"
                >
                  We will transfer your Personal Data only to those Affiliated
                  Third Parties who we are sure can offer the required level of
                  protection to your privacy and information and who are also
                  contractually obligated to us to do so. We do not and will not
                  at any point in time sell your Personal Data. We require all
                  Affiliated Third Parties to respect the security of your
                  Personal Data and to treat it in accordance with the law. We
                  do not allow our service providers to use your Personal Data
                  for their own purposes and only permit them to process your
                  Personal Data for specified purposes and in accordance with
                  our instructions.
                </Text>

                {/* Section 6 */}
                <Heading fontSize="22px" fontWeight={600} mb="16px">
                  6. Security & Confidentiality
                </Heading>

                <Text
                  fontSize="16px"
                  lineHeight="28px"
                  color="#475467"
                  mb="24px"
                >
                  Information submitted by you is stored on secure servers we
                  have, which are encrypted, and access is restricted only to
                  authorised persons in charge of maintaining the servers. We
                  have put in place physical, electronic and procedural
                  processes that safeguard and protect your information against
                  unauthorised access, modification or erasure.
                </Text>

                <Heading
                  fontSize="18px"
                  fontWeight={600}
                  mb="12px"
                  color="#1D2739"
                >
                  Our security measures include:
                </Heading>

                <UnorderedList
                  spacing="12px"
                  pl="20px"
                  mb="32px"
                  color="#475467"
                >
                  <ListItem>
                    Encryption of sensitive data in transit (using SSL/TLS) and
                    at rest.
                  </ListItem>
                  <ListItem>
                    Secure authentication mechanisms and password protection.
                  </ListItem>
                  <ListItem>
                    Regular security audits, vulnerability assessments, and
                    penetration testing.
                  </ListItem>
                  <ListItem>
                    Access controls limiting staff access to Personal Data on a
                    need-to-know basis.
                  </ListItem>
                  <ListItem>
                    Background verification for Errbuddies, including identity
                    checks and Right-to-Work verification.
                  </ListItem>
                  <ListItem>
                    Secure payment processing through PCI-DSS compliant
                    third-party payment providers.
                  </ListItem>
                  <ListItem>
                    Regular staff training on data protection and
                    confidentiality obligations.
                  </ListItem>
                  <ListItem>
                    Incident response procedures and personal data breach
                    management protocols.
                  </ListItem>
                </UnorderedList>

                <Text
                  fontSize="16px"
                  lineHeight="28px"
                  color="#475467"
                  mb="24px"
                >
                  However, we cannot guarantee 100% security as no security
                  programme is completely foolproof. In the unlikely event that
                  we experience any breach to your Personal Data, such breach
                  shall be handled in accordance with our Personal Data Breach
                  Management Procedures. All such breaches shall be notified to
                  the ICO within 72 hours of becoming aware of the breach, and
                  where deemed necessary, based on the severity and potential
                  risks to your rights and freedoms, we shall notify you of such
                  occurrence, steps taken and remedies employed to prevent a
                  recurrence.
                </Text>

                <Text
                  fontSize="16px"
                  lineHeight="28px"
                  color="#475467"
                  mb="32px"
                >
                  Our staff also have an obligation to maintain the
                  confidentiality of any Personal Data held by us. Any breach of
                  confidentiality by our staff is subject to disciplinary
                  action.
                </Text>

                <Heading
                  fontSize="18px"
                  fontWeight={600}
                  mb="12px"
                  color="#1D2739"
                >
                  Your Responsibilities:
                </Heading>

                <UnorderedList spacing="12px" pl="20px" color="#475467">
                  <ListItem>
                    Keep your account credentials (username and password)
                    confidential.
                  </ListItem>
                  <ListItem>
                    Use a strong, unique password for your Errbud account.
                  </ListItem>
                  <ListItem>
                    Log out of your account when using shared devices.
                  </ListItem>
                  <ListItem>
                    Notify us immediately if you suspect unauthorised access to
                    your account.
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>

            <Box mt="64px">
              <Box maxW="1000px" mx="auto">
                {/* Section 7 */}
                <Heading fontSize="22px" fontWeight={600} mb="16px">
                  7. Transfer of Personal Data outside the United Kingdom
                </Heading>

                <Text
                  fontSize="16px"
                  lineHeight="28px"
                  color="#475467"
                  mb="20px"
                >
                  The Personal Data we collect is primarily stored and processed
                  within the United Kingdom. However, your Personal Data may be
                  transferred to and processed in another country other than the
                  United Kingdom for the purposes stated above, particularly
                  when we use third-party service providers (such as cloud
                  hosting, payment processors, or identity verification
                  providers) that operate internationally.
                </Text>

                <Text
                  fontSize="16px"
                  lineHeight="28px"
                  color="#475467"
                  mb="20px"
                >
                  The data protection laws in those countries may be different
                  from, and potentially less stringent than, the laws applicable
                  in the United Kingdom.
                </Text>

                <Text
                  fontSize="16px"
                  lineHeight="28px"
                  color="#475467"
                  mb="24px"
                >
                  By accepting this Policy or by providing your Personal Data to
                  us, you acknowledge and consent to such transfer and
                  processing. We will however take all reasonable steps to
                  ensure that your data is treated securely and in accordance
                  with this Privacy Policy. Transfer of your Personal Data will
                  only be done:
                </Text>

                <UnorderedList
                  spacing="14px"
                  pl="20px"
                  mb="24px"
                  color="#475467"
                >
                  <ListItem>
                    To countries that provide an adequate level of data
                    protection as determined by the UK Government or relevant
                    authorities.
                  </ListItem>
                  <ListItem>
                    Under Standard Contractual Clauses (SCCs) approved by the
                    ICO or other legally approved transfer mechanisms.
                  </ListItem>
                  <ListItem>
                    To parties who have put in place adequate controls,
                    safeguards and technical measures to secure and protect your
                    Personal Data in compliance with UK data protection
                    standards.
                  </ListItem>
                </UnorderedList>

                <Text
                  fontSize="16px"
                  lineHeight="28px"
                  color="#475467"
                  mb="56px"
                >
                  We will not transfer your Personal Data to any third party
                  outside the UK without ensuring appropriate safeguards are in
                  place to protect your rights and freedoms.
                </Text>

                {/* Section 8 */}
                <Heading fontSize="22px" fontWeight={600} mb="16px">
                  8. Retention of Personal Data
                </Heading>

                <Text
                  fontSize="16px"
                  lineHeight="28px"
                  color="#475467"
                  mb="24px"
                >
                  We retain your Personal Data for no longer than reasonably
                  necessary for the purposes set out in this Policy and in
                  accordance with legal, regulatory, tax, accounting or
                  reporting requirements.
                </Text>

                <Heading
                  fontSize="18px"
                  fontWeight={600}
                  mb="12px"
                  color="#1D2739"
                >
                  General Retention Periods:
                </Heading>

                <UnorderedList
                  spacing="12px"
                  pl="20px"
                  mb="24px"
                  color="#475467"
                >
                  <ListItem>
                    Active account data: Retained while your account is active
                    and you continue to use our services.
                  </ListItem>
                  <ListItem>
                    Booking and transaction records: Retained for 6 years after
                    the transaction date for tax, accounting, and legal
                    compliance purposes.
                  </ListItem>
                  <ListItem>
                    Complaint records: Retained for 6 years after resolution for
                    dispute resolution and legal purposes.
                  </ListItem>
                  <ListItem>
                    KYC and identity verification data: Retained for 7 years
                    after account closure for regulatory compliance and fraud
                    prevention.
                  </ListItem>
                  <ListItem>
                    Marketing communications data: Retained until you withdraw
                    consent or 2 years of inactivity.
                  </ListItem>
                  <ListItem>
                    Communications and support inquiries: Retained for 3 years
                    for quality assurance and service improvement.
                  </ListItem>
                </UnorderedList>

                <Heading
                  fontSize="18px"
                  fontWeight={600}
                  mb="12px"
                  color="#1D2739"
                >
                  After Account Deletion:
                </Heading>

                <UnorderedList
                  spacing="12px"
                  pl="20px"
                  mb="24px"
                  color="#475467"
                >
                  <ListItem>
                    Most personal data is deleted within 90 days of your
                    request.
                  </ListItem>
                  <ListItem>
                    Some data may be retained longer for legal, tax, fraud
                    prevention, or dispute resolution purposes as outlined
                    above.
                  </ListItem>
                  <ListItem>
                    Anonymised or aggregated data may be retained indefinitely
                    for statistical analysis and service improvement (this data
                    cannot identify you personally).
                  </ListItem>
                  <ListItem>
                    Data required for ongoing legal proceedings or
                    investigations will be retained until the matter is
                    resolved.
                  </ListItem>
                </UnorderedList>

                <Text
                  fontSize="16px"
                  lineHeight="28px"
                  color="#475467"
                  mb="24px"
                >
                  We may retain your Personal Data for a longer period in the
                  event of a complaint or if we reasonably believe there is a
                  prospect of litigation in respect to our relationship with
                  you.
                </Text>
                <Text
                  fontSize="16px"
                  lineHeight="28px"
                  color="#475467"
                  mb="24px"
                >
                  To determine the appropriate retention period for Personal
                  Data, we consider the amount, nature and sensitivity of the
                  Personal Data, the potential risk of harm from unauthorised
                  use or disclosure of your Personal Data, the purposes for
                  which we process your Personal Data and whether we can achieve
                  those purposes through other means, and the applicable legal,
                  regulatory, tax, accounting or other requirements.
                </Text>

                <Heading fontSize="22px" fontWeight={600} mb="16px">
                  8. Third Party Links
                </Heading>

                <Text
                  fontSize="16px"
                  lineHeight="28px"
                  color="#475467"
                  mb="24px"
                >
                  Our mobile application, website or email communications may
                  include links to third-party websites, plug-ins and
                  applications (such as social media platforms, payment
                  providers, or support resources). Clicking on those links or
                  enabling those connections may allow third parties to collect
                  or share data about you.
                </Text>
                <Text
                  fontSize="16px"
                  lineHeight="28px"
                  color="#475467"
                  mb="24px"
                >
                  We do not control these third-party websites and services and
                  are not responsible for their privacy practices or content.
                  When you leave our mobile application or website, we encourage
                  you to read the privacy policy of every website or service you
                  visit.
                </Text>
                <Text
                  fontSize="16px"
                  lineHeight="28px"
                  color="#475467"
                  mb="24px"
                >
                  The inclusion of any link does not imply endorsement by Errbud
                  of the linked site or service. Use of any such linked website
                  or service is at the user's own risk.
                </Text>
              </Box>
            </Box>

            <Box mt="64px">
              <Stack spacing={10}>
                {/* COOKIES POLICY */}
                <Box>
                  <Heading fontSize="28px" fontWeight={700} mb={4}>
                    COOKIES POLICY
                  </Heading>

                  <Heading fontSize="20px" fontWeight={600} mt={6} mb={2}>
                    What are Cookies?
                  </Heading>
                  <Text color="gray.700" lineHeight="1.8">
                    Cookies are small text files that are placed on your device
                    (computer, smartphone, or tablet) when you visit our website
                    or use our mobile application. Cookies help us provide you
                    with a better experience by remembering your preferences,
                    keeping you logged in, and analysing how you use our
                    services.
                  </Text>

                  <Heading fontSize="20px" fontWeight={600} mt={6} mb={2}>
                    How We Use Cookies:
                  </Heading>
                  <UnorderedList spacing={2} pl={6} color="gray.700">
                    <ListItem>
                      To keep you logged in to your Errbud account across
                      sessions.
                    </ListItem>
                    <ListItem>
                      To remember your preferences and settings (such as
                      language preferences).
                    </ListItem>
                    <ListItem>
                      To analyse traffic and usage patterns on our website and
                      mobile application.
                    </ListItem>
                    <ListItem>
                      To understand how visitors navigate our platform and
                      identify areas for improvement.
                    </ListItem>
                    <ListItem>
                      To provide personalised experiences based on your usage
                      patterns.
                    </ListItem>
                    <ListItem>
                      To monitor the performance and functionality of our
                      platform.
                    </ListItem>
                    <ListItem>
                      To help us detect and prevent fraud and security threats.
                    </ListItem>
                  </UnorderedList>

                  <Text mt={4} color="gray.700" lineHeight="1.8">
                    Our advertisers and organisation may have the occasion to
                    collect information regarding your device for our services.
                    The information is gained in a statistical manner for our
                    use or advertisers on our site.
                  </Text>

                  <Text mt={4} color="gray.700" lineHeight="1.8">
                    Data gathered through cookies will not identify you
                    personally. It is strictly aggregate statistical data about
                    our visitors and how they used our resources on the
                    platform. No identifying Personal Data will be shared at any
                    time via cookies with advertisers.
                  </Text>

                  <Heading fontSize="20px" fontWeight={600} mt={6} mb={2}>
                    Types of Cookies We Use:
                  </Heading>
                  <UnorderedList spacing={2} pl={6} color="gray.700">
                    <ListItem>
                      <strong>Essential Cookies:</strong> Necessary for the
                      platform to function properly (e.g., keeping you logged
                      in, remembering your session).
                    </ListItem>
                    <ListItem>
                      <strong>Performance Cookies:</strong> Help us understand
                      how you use our services and identify technical issues.
                    </ListItem>
                    <ListItem>
                      <strong>Functional Cookies:</strong> Remember your
                      preferences and provide enhanced features.
                    </ListItem>
                    <ListItem>
                      <strong>Analytics Cookies:</strong> Collect information
                      about how visitors use our platform to help us improve it.
                    </ListItem>
                  </UnorderedList>

                  <Heading fontSize="20px" fontWeight={600} mt={6} mb={2}>
                    Managing Cookies:
                  </Heading>
                  <Text color="gray.700" lineHeight="1.8">
                    You may elect to decline all cookies via your device
                    settings or browser settings, or set up alerts to prompt you
                    when websites set or access cookies. Every computer and
                    mobile device can decline file downloads like cookies.
                  </Text>

                  <Text mt={4} color="gray.700">
                    <strong>Web Browsers:</strong> Your browser has an option to
                    enable the declining of cookies. Please refer to your
                    browser's help section for instructions.
                  </Text>

                  <Text mt={2} color="gray.700">
                    <strong>Mobile Devices:</strong> You can manage cookie
                    preferences through your device settings or within the
                    Errbud mobile application settings.
                  </Text>

                  <Text mt={4} color="gray.700" lineHeight="1.8">
                    If you do decline cookie downloads, you may be limited to
                    certain areas of our platform, as there are parts of our
                    service that require cookies to function properly (such as
                    staying logged in or completing bookings).
                  </Text>

                  <Text mt={4} color="gray.700" lineHeight="1.8">
                    Any of our advertisers or third-party service providers may
                    also have a use for cookies. We are not responsible for, nor
                    do we have control over, the cookies downloaded from third
                    parties. They are downloaded only if you click on
                    advertisements or use third-party integrations.
                  </Text>

                  <Text mt={4} color="gray.700">
                    For more information about cookies and how to manage them,
                    visit: www.aboutcookies.org or www.allaboutcookies.org.
                  </Text>
                </Box>

                {/* SUBJECT ACCESS REQUEST */}
                <Box>
                  <Heading fontSize="28px" fontWeight={700} mb={4}>
                    SUBJECT ACCESS REQUEST RESPONSE PROCEDURE
                  </Heading>

                  <Heading fontSize="20px" fontWeight={600} mt={6} mb={2}>
                    How to Exercise Your Data Rights:
                  </Heading>
                  <Text color="gray.700">
                    Where you wish to exercise any of your data privacy rights
                    outlined in Section 4, you shall make a formal request using
                    one of the following methods:
                  </Text>

                  <UnorderedList spacing={2} pl={6} mt={2} color="gray.700">
                    <ListItem>
                      Email: Send your request to info@errbud.com with the
                      subject line "Subject Access Request"
                    </ListItem>
                    <ListItem>
                      In-App: Submit a request through the Help & Support
                      section in your Errbud account
                    </ListItem>
                    <ListItem>Post: Write to us</ListItem>
                  </UnorderedList>

                  <Heading fontSize="20px" fontWeight={600} mt={6} mb={2}>
                    What to Include in Your Request:
                  </Heading>
                  <UnorderedList spacing={2} pl={6} color="gray.700">
                    <ListItem>Your full name</ListItem>
                    <ListItem>
                      Your registered email address and/or phone number
                    </ListItem>
                    <ListItem>
                      A description of the information you are requesting or the
                      right you wish to exercise
                    </ListItem>
                    <ListItem>
                      Proof of identity (copy of passport, driver's license, or
                      national ID card)
                    </ListItem>
                    <ListItem>
                      Any additional information that may help us locate your
                      data or process your request
                    </ListItem>
                  </UnorderedList>

                  <Heading fontSize="20px" fontWeight={600} mt={6} mb={2}>
                    Our Response Process:
                  </Heading>

                  <OrderedList spacing={4} pl={6} color="gray.700">
                    <ListItem>
                      <strong>Acknowledgement (Within 5 Working Days)</strong>
                      <UnorderedList pl={6} mt={2}>
                        <ListItem>
                          Confirm receipt of the subject access request
                        </ListItem>
                        <ListItem>
                          Request additional information if needed to verify and
                          confirm your identity
                        </ListItem>
                        <ListItem>
                          Provide an estimated timeframe for response
                        </ListItem>
                      </UnorderedList>
                    </ListItem>
                  </OrderedList>
                </Box>
              </Stack>
            </Box>

            <Box mt="64px">
              <Stack spacing={8}>
                {/* 2. Identity Verification */}
                <Box>
                  <Heading fontSize="20px" fontWeight={600} mb={3}>
                    2. Identity Verification
                  </Heading>

                  <Text color="gray.700" mb={3}>
                    On receiving your request, we shall:
                  </Text>

                  <UnorderedList pl={6} spacing={2} color="gray.700">
                    <ListItem>
                      Record the request in our data subject access request log
                    </ListItem>
                    <ListItem>
                      Verify your identity using the details provided and a
                      valid means of identification (international passport,
                      driver's license, national identification card, or any
                      other acceptable means of identification)
                    </ListItem>
                    <ListItem>
                      Where the request is from a third party (such as a
                      relative or your representative), we will verify their
                      authority to act for you and may contact you directly to
                      confirm their identity and request your consent to
                      disclose the information
                    </ListItem>
                  </UnorderedList>
                </Box>

                {/* 3. Information Gathering and Response */}
                <Box>
                  <Heading fontSize="20px" fontWeight={600} mb={3}>
                    3. Information Gathering and Response
                  </Heading>

                  <Text color="gray.700" mb={3}>
                    When your identity is verified, we shall:
                  </Text>

                  <UnorderedList pl={6} spacing={2} color="gray.700">
                    <ListItem>
                      Coordinate the gathering of all information collected with
                      respect to you
                    </ListItem>
                    <ListItem>
                      Present the information in a concise, transparent,
                      intelligible and easily accessible form, using clear and
                      plain language
                    </ListItem>
                    <ListItem>
                      Respond to your specific request in the format requested
                      (in writing, electronically via email, or through your
                      Errbud account)
                    </ListItem>
                    <ListItem>
                      Contact you if we need further information to speed up our
                      response or clarify your request
                    </ListItem>
                    <ListItem>
                      Where the information requested relates directly or
                      indirectly to another person (such as an Errbuddy assigned
                      to your booking or another Client), we will seek the
                      consent of that person before processing the request
                    </ListItem>
                    <ListItem>
                      Where disclosure would adversely affect the rights and
                      freedoms of others, and we are unable to disclose the
                      information, we will inform you promptly with reasons for
                      that decision
                    </ListItem>
                  </UnorderedList>
                </Box>

                {/* Fees and Timeframe */}
                <Box>
                  <Heading fontSize="20px" fontWeight={600} mb={3}>
                    Fees and Timeframe:
                  </Heading>

                  <UnorderedList pl={6} spacing={3} color="gray.700">
                    <ListItem>
                      <strong>Standard Response Time:</strong> We shall provide
                      the information required within one month from receipt of
                      the request.
                    </ListItem>
                    <ListItem>
                      <strong>Complex Requests:</strong> Occasionally, it could
                      take us longer than one month if your request is
                      particularly complex or if you have made multiple
                      requests. In this case, we will notify you within one
                      month and keep you updated on our progress. We may extend
                      the response period by a further two months where
                      necessary.
                    </ListItem>
                    <ListItem>
                      <strong>Inability to Act:</strong> Where we are unable to
                      act on your request, we shall inform you promptly, at
                      least within one month of receipt of the request, of the
                      reasons for not taking action and inform you of your right
                      to complain with the ICO.
                    </ListItem>
                    <ListItem>
                      <strong>Remedial Action:</strong> Where your request
                      relates to any perceived violation of your rights, we
                      shall take appropriate steps to remedy such violations
                      once confirmed. Remedies shall include, but not be limited
                      to, investigation, reporting to appropriate authorities,
                      recovering the Personal Data, correcting it, and/or
                      enhancing controls around it. You shall be appropriately
                      informed of the remedies employed.
                    </ListItem>
                    <ListItem>
                      <strong>Fees:</strong> Any information provided to you by
                      us shall be provided free of charge. However, where
                      requests are manifestly unfounded or excessive, in
                      particular because of their repetitive or cumbersome
                      nature, we may:
                      <OrderedList pl={6} mt={2}>
                        <ListItem>
                          Charge a reasonable fee, taking into account the
                          administrative costs of providing the information,
                          communication, or taking the action required.
                        </ListItem>
                        <ListItem>
                          Refuse to act on the request and inform you of the
                          reasons, with a copy sent to the Information
                          Commissioner's Office (ICO).
                        </ListItem>
                      </OrderedList>
                    </ListItem>
                  </UnorderedList>
                </Box>

                {/* Exceptions */}
                <Box>
                  <Heading fontSize="20px" fontWeight={600} mb={3}>
                    Exceptions to Data Subject Access Rights:
                  </Heading>

                  <Text color="gray.700" mb={3}>
                    To the extent permitted by applicable laws, we may refuse to
                    act on your request if at least one of the following
                    applies:
                  </Text>

                  <OrderedList pl={6} spacing={2} color="gray.700">
                    <ListItem>
                      Complying would violate a legal obligation to which we are
                      subject or conflict with another person's legal rights.
                    </ListItem>
                    <ListItem>
                      The request is manifestly unfounded or excessive.
                    </ListItem>
                    <ListItem>
                      The information is subject to legal professional
                      privilege.
                    </ListItem>
                    <ListItem>
                      The request would adversely affect the rights and freedoms
                      of others (such as revealing another user's Personal
                      Data).
                    </ListItem>
                    <ListItem>
                      Disclosure would prejudice the prevention or detection of
                      crime or the apprehension or prosecution of offenders.
                    </ListItem>
                    <ListItem>
                      Complying is necessary for protecting your vital interests
                      or those of another natural person.
                    </ListItem>
                    <ListItem>
                      The request relates to information processed for public
                      interest, scientific or historical research purposes, or
                      statistical purposes, and fulfilling the request would
                      render impossible or seriously impair the achievement of
                      those purposes.
                    </ListItem>
                    <Text mt={4} color="gray.700">
                      Where we refuse a request, we will inform you of the
                      reasons and your right to complain to the ICO.
                    </Text>
                  </OrderedList>
                </Box>
              </Stack>
            </Box>

            <Box mt="64px">
              <Stack spacing={8}>
                {/* CONTACT US */}
                <Box>
                  <Heading fontSize="22px" fontWeight={600} mb={3}>
                    CONTACT US
                  </Heading>

                  <Text color="gray.700">
                    We welcome any queries, comments, requests or complaints you
                    may have regarding our Data Protection Privacy Policy or our
                    privacy practices.
                  </Text>
                </Box>

                {/* General Inquiries */}
                <Box>
                  <Heading fontSize="18px" fontWeight={600} mb={2}>
                    General Inquiries:
                  </Heading>

                  <UnorderedList pl={6} color="gray.700">
                    <ListItem>Email: info@errbud.com</ListItem>
                  </UnorderedList>
                </Box>

                {/* Data Protection and Privacy Matters */}
                <Box>
                  <Heading fontSize="18px" fontWeight={600} mb={2}>
                    Data Protection and Privacy Matters:
                  </Heading>

                  <UnorderedList pl={6} color="gray.700">
                    <ListItem>Email: info@errbud.com</ListItem>
                    <ListItem>
                      Subject Access Requests: info@errbud.com
                    </ListItem>
                  </UnorderedList>
                </Box>

                {/* Support and Complaints */}
                <Box>
                  <Heading fontSize="18px" fontWeight={600} mb={2}>
                    Support and Complaints:
                  </Heading>

                  <UnorderedList pl={6} color="gray.700">
                    <ListItem>Email: info@errbud.com</ListItem>
                    <ListItem>In-App: Help & Support section</ListItem>
                  </UnorderedList>
                </Box>

                {/* Registered Address */}
                <Box>
                  <Heading fontSize="18px" fontWeight={600} mb={2}>
                    Registered Address:
                  </Heading>
                </Box>

                {/* Supervisory Authority */}
                <Box>
                  <Heading fontSize="18px" fontWeight={600} mb={2}>
                    Supervisory Authority:
                  </Heading>

                  <Text color="gray.700" mb={2}>
                    If you are unhappy with how we handle your Personal Data or
                    believe we have not complied with data protection laws, you
                    have the right to complain with the UK Information
                    Commissioner's Office (ICO):
                  </Text>

                  <UnorderedList pl={6} color="gray.700">
                    <ListItem>Website: www.ico.org.uk</ListItem>
                  </UnorderedList>
                </Box>

                {/* Acceptance & Update Notice */}
                <Box>
                  <Text color="gray.700" mb={4}>
                    By using Errbud, creating an account, or providing your
                    Personal Data to us, you acknowledge that you have read,
                    understood, and agree to this Data Protection Privacy
                    Policy.
                  </Text>

                  <Text color="gray.600" fontSize="14px">
                    This Privacy Policy was last updated on 2/1/2026. We reserve
                    the right to modify this policy at any time. Changes will be
                    communicated through our mobile application, website, or via
                    email. Your continued use of Errbud after such modifications
                    constitutes your acceptance of the updated policy.
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>

      {/* CTA */}
      <Box
        position="relative"
        px={{ base: "16px", md: "163px" }}
        mt="79px"
        py={{ base: "48px", md: "89px" }}
      >
        {/* Left star */}
        <Image
          src="/images/left-star.png"
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
          src="/images/right-star.png"
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

      {/* Footer */}
      <Footer />
    </Stack>
  );
};

export default page;
