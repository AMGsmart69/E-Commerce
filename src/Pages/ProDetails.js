import { Box, Rating, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ProDetails = () => {
  // For Loop for id > 9
  const currentLink = window.location.href;
  const proId = currentLink.charAt(35);

  const [product, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/products/show_products/${proId}`
      );
      setProducts(data);
    }
    fetchProducts();
  });
  return (
    <Stack
      alignItems={"center"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Typography my={7}>
        <strong style={{ fontSize: "40px" }}>Details</strong>
      </Typography>

      {/* Details */}
      <Stack
        alignItems={"center"}
        flexDirection={"row"}
        gap={10}
        mx={5}
        sx={{
          backgroundColor: "#EEE",
          boxShadow: "0px 0px 9px 2px rgb(0 0 0 / 30%)",
        }}
      >
        {/* Image */}
        <img width={"450px"} src={product.image} alt="IMG" />

        {/* Pro Info */}
        <Stack my={1} gap={25.5} flexDirection={"column"}>
          {/* Name + Desc */}
          <Stack flexDirection={"column"} gap={2}>
            {/* Name + Rating */}
            <Stack
              justifyContent={"space-between"}
              alignItems={"center"}
              flexDirection={"row"}
            >
              <Typography>
                <strong style={{ fontSize: "40px" }}>{product.name}</strong>
              </Typography>
              <Rating
                sx={{ mr: 2 }}
                defaultValue={2.5}
                precision={0.5}
                readOnly
              />
            </Stack>
            {/* Name + Rating */}

            <Box>
              <Typography>
                <strong>Description</strong>
              </Typography>
              <Typography>{product.desc}</Typography>
            </Box>
          </Stack>
          {/* Name + Desc */}

          <Box>
            <Typography>
              <strong>Price</strong>
            </Typography>
            <Typography>
              <strong>${product.price}</strong>
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProDetails;
