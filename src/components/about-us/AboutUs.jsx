import React from "react";

import { Box, Container, Typography } from "@mui/material";

import SecondaryButton from "../secondary-button/SecondaryButton";
import aboutUsImg from "../../assets/main/about-us-img.jpg";

const AboutUs = () => {
  return (
    <Container
      disableGutters
      maxWidth="lg"
      sx={{
        px: {
          xs: 2,
          sm: 5,
          md: 3.5,
        },
        my: 15,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "center",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "48px",
              color: "#161414",
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "32px",
              color: "#5B5B5B",
              my: 4,
            }}
          >
           Welcome to Travela, your ultimate companion for all things travel! We are a passionate team of explorers and adventurers who believe that traveling is not just a hobby; it's a way of life. Our mission is to inspire, inform, and connect travelers from around the world, turning their dream journeys into unforgettable realities.

          At Travela, we understand that planning a trip can be overwhelming and time-consuming. That's why we have curated a one-stop platform where you can find everything you need to plan your perfect vacation. From comprehensive destination guides to expert travel tips and insider recommendations, we aim to equip you with all the knowledge and resources you require to make the most of your travels.

          Our website features a user-friendly interface that allows you to search for destinations based on your interests, budget, and preferred travel dates. Whether you're a budget backpacker, luxury seeker, solo adventurer, or family traveler, Travela has something in store for everyone.
          </Typography>
          <SecondaryButton text="Read more" />
        </Box>
        <Box sx={{ flex: 1 }}>
          <img
            src={aboutUsImg}
            alt=""
            style={{
              borderRadius: "24px",
              maxWidth: "100%",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default AboutUs;
