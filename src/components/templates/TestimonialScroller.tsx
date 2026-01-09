// components/TestimonialScroller.tsx
import { Box, SimpleGrid } from "@chakra-ui/react";
import TestimonialCard from "../organisms/Cards/TestimonialCard";
import { testimonials } from "@/constants/TestimonialsData";
import { MotionBox } from "../helper/motion";

const TestimonialScroller = () => {
  // Duplicate testimonials for seamless looping
  const items = [...testimonials, ...testimonials];

  return (
    <Box
      position="relative"
      h={{
        base: "420px", // mobile
        md: "480px", // tablets
        lg: "420px", // laptops+
      }}
      overflow="hidden"
      w="full"
    >
      {/* Scrolling content */}
      <MotionBox
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <SimpleGrid
          columns={{
            base: 1,
            md: 1, // tablets stay single column
            lg: 2, // small laptops
            xl: 2,
          }}
          spacing={{
            base: 4,
            md: 5,
            lg: 6,
          }}
        >
          {items.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </SimpleGrid>
      </MotionBox>

      {/* Top fade overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h={{
          base: "60px",
          md: "70px",
          lg: "80px",
        }}
        bgGradient="linear(to-b, white, transparent)"
        pointerEvents="none"
      />

      {/* Bottom fade overlay */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h={{
          base: "60px",
          md: "70px",
          lg: "80px",
        }}
        bgGradient="linear(to-t, white, transparent)"
        pointerEvents="none"
      />
    </Box>
  );
};

export default TestimonialScroller;
