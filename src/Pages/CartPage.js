import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useTheme } from "@emotion/react";

const CartPage = () => {
  // For Loop for id > 9
  const currentLink = window.location.href;
  const proId = currentLink.charAt(27);

  const [product, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState([]);
  
  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/products/show_products/${proId}`
      );
      setProducts(data);
    }
    fetchProducts();
  });

  async function EnterProducts() {
    const { newdata } = await axios.post(
      `http://127.0.0.1:8000/api/products/show_products`
    );
    setNewProduct(newdata);
  }  

  const count = 1;
  const theme = useTheme();
  return (
    <Stack
      sx={{ position: "relative", mt: 5 }}
      //   className="border"
      flexDirection={"column"}
    >
      <Typography
        // className="border"
        sx={{ position: "absolute", left: "40%", fontSize: "40px" }}
      >
        <strong>Cart Information</strong>
      </Typography>

      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mx={5}
        mt={15}
        // className="border"
      >
        {/* Cart Details */}
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexGrow={0.7}
          sx={{
            position: "relative",
            backgroundColor: "#EEE",
            boxShadow: "0px 0px 9px 2px rgb(0 0 0 / 30%)",
            p: "2px",
            px: "15px",
          }}
          // className="border"
        >
          <img src={product.image} width={"110px"} alt="IMG" />

          {/* Product Name */}
          <Stack
            //   className="border"
            flexDirection={"column"}
            alignItems={"center"}
            gap={1}
            sx={{ position: "absolute", left: 140 }}
          >
            <Typography>
              <strong>Name</strong>
            </Typography>
            <Link href={`/view_details/${product.id}`} sx={{ color: "black" }}>
              <Typography>{product.name}</Typography>
            </Link>
          </Stack>

          {/* Product Count */}
          <Stack
            //   className="border"
            flexDirection={"column"}
            alignItems={"center"}
            gap={1}
            mx={5}
            ml={10}
          >
            <Typography>
              <strong>Count</strong>
            </Typography>
            <Typography>{count}</Typography>
          </Stack>

          {/* Product Price */}
          <Stack
            //   className="border"
            flexDirection={"column"}
            alignItems={"center"}
            gap={1}
          >
            <Typography>
              <strong>Price</strong>
            </Typography>
            <Typography>
              <strong>${product.price}</strong>
            </Typography>
          </Stack>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              height: "7vh",
              ":hover": { backgroundColor: "#151515" },
            }}
            onClick={EnterProducts}
          >
            Add To Cart
            <AddShoppingCartIcon sx={{ ml: 1 }} />
          </Button>
        </Stack>

        {/* Pay Button */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: " center",
            position: "absolute",
            right: 100,
          }}
        >
          <Button
            sx={{
              backgroundColor: theme.palette.success.main,
              color: "white",
              fontSize: "18px",
              textTransform: "capitalize",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              height: "7vh",
              ":hover": {
                backgroundColor: "transparent",
                transition: ".5s ease",
                color: theme.palette.hovertextTheme.main,
                borderColor: theme.palette.hovertextTheme.main,
              },
              ":hover .pay-icon": {
                color: theme.palette.hovertextTheme.main,
                transition: ".5s ease",
              },
            }}
            variant="outlined"
          >
            <strong>Pay</strong>
            <MonetizationOnIcon className="pay-icon" sx={{ ml: 1 }} />
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default CartPage;
