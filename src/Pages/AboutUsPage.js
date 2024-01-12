import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";

function AboutUsPage() {
  return (
    <Stack
      mt={5}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography mr={100}>
        <strong style={{ fontSize: "30px" }}>About Us</strong>
      </Typography>
      <Typography mx={25.5} mt={3}>
        When in doubt, start with a question. That’s exactly what AMG brand that
        creates healthy cereals for grownups—does with the introductory
        paragraph on its About Us page. Want to take it to the next level? Start
        your About page with a question that pulls on your audience’s emotions.
        The makers of AMG pose an effective first question that makes you think:
        “Remember the carefree days of childhood, when you didn’t feel guilty
        about eating mountains of cereal with questionable nutrition?” Don’t be
        afraid to use bright, fun colors on your About Us page (assuming they’re
        part of your brand identity) to make your brand more memorable. Where
        AMG really shines is its comparison chart. It gives you a clear visual
        of how its cereal compares to the competition. Plus, AMG's copy is
        relatable to its audience. Why sound like a stiff corporate welcome
        packet when you don’t have to?
      </Typography>
    </Stack>
  );
}

export default AboutUsPage;
