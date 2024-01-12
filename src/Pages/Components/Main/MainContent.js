import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const MainContent = () => {
  const navTo = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("api/products/show_products");
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Latest Products */}
      <Box my={6}>
        <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
          Latest Products
        </Typography>
      </Box>

      {/* Products */}
      <Box
        sx={{
          display: "flex",
          mx: 13,
          alignItems: "center",
          flexWrap: "wrap",
          gap: 5,
          justifyContent: "space-between",
        }}
      >
        {products.map((item) => {
          return (
            <Card sx={{ position: "relative", maxWidth: 345, minHeight: 520 }}>
              <CardMedia
                sx={{
                  ":hover": {
                    scale: "105%",
                    cursor: "pointer",
                    transition: ".5s ease",
                  },
                  height: 250,
                }}
                image={item.image}
              />
              <CardContent flexDirection={"column"} display={"flex"}>
                <Box
                  flexDirection={"row"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography
                    color="success.main"
                    fontWeight={"bold"}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    ${item.price}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </CardContent>

              <CardActions>
                <Stack
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <Button
                    onClick={() => {
                      navTo(`/cart/${item.id}`);
                    }}
                    variant="contained"
                    size="large"
                  >
                    Buy Now
                  </Button>

                  <Button
                    ml={5}
                    onClick={() => {
                      navTo(`/view_details/${item.id}`);
                    }}
                    variant="contained"
                    size="large"
                  >
                    View
                  </Button>

                  <Button size="larg">
                    <FavoriteIcon />
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default MainContent;
