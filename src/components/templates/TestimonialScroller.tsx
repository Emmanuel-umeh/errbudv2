// components/TestimonialScroller.tsx
import { Box, SimpleGrid } from "@chakra-ui/react";
import TestimonialCard from "../organisms/Cards/TestimonialCard";
import { testimonials } from "@/constants/TestimonialsData";
import { MotionBox } from "../helper/motion";

const TestimonialScroller = () => {
  // Duplicate testimonials for seamless looping
  const items = [...testimonials, ...testimonials];

  return (
    <Box position="relative" h="420px" overflow="hidden" w="full">
      {/* Scrolling content */}
      <MotionBox
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {items.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </SimpleGrid>
      </MotionBox>

      {/* Fade overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="80px"
        bgGradient="linear(to-b, white, transparent)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h="80px"
        bgGradient="linear(to-t, white, transparent)"
        pointerEvents="none"
      />
    </Box>
  );
};

export default TestimonialScroller;
