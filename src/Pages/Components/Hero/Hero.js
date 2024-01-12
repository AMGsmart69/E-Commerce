import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Pagination } from "swiper/modules";
import { useTheme } from "@emotion/react";

const Hero = () => {
  const theme = useTheme();
  const heroImgList = [
    {
      title: "MEN",
      imgSrc: "imgs/slider/slider-img1.jpg",
      imgAlt: "slider-img1",
    },
    {
      title: "WOMEN",
      imgSrc: "imgs/slider/slider-img2.jpg",
      imgAlt: "slider-img2",
    },
    {
      title: "WOMEN",
      imgSrc: "imgs/slider/slider-img3.jpg",
      imgAlt: "slider-img3",
    },
  ];
  return (
    <Container sx={{ mt: 9 }}>
      <Box
        sx={{
          mt: 2.5,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {heroImgList.map((item) => {
            return (
              <SwiperSlide
                key={item.title}
                className="parent-slider"
                sx={{ position: "relative" }}
              >
                <img src={item.imgSrc} alt={item.imgAlt} />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    textAlign: "left",
                    left: 130,
                  }}
                >
                  <Typography
                    sx={{ color: "red", fontSize: "40px", fontWeight: "300" }}
                  >
                    WELCOME TO
                  </Typography>
                  <Typography
                    sx={{
                      color: "blue",
                      my: 9,
                      fontSize: "45px",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    A&M Store
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      color: "black",
                      backgroundColor: "#FFB534",
                      borderRadius: 0,
                      width: "150px",
                      ":hover .shop-icon": {
                        position: "relative",
                        left: "5px",
                      },
                      ":hover": {
                        backgroundColor: "#FFE382",
                        transition: ".5s ease"
                      },
                    }}
                  >
                    Shop Now <KeyboardArrowRightIcon className="shop-icon" />
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* 
        {useMediaQuery("(min-width: 965px)") && (
          <Box sx={{ minWidth: "26.7%" }}>
            <Box sx={{ position: "relative" }}>
              <img
                width={"100%"}
                src="./hero-imgs/mini-img1.jpg"
                alt="mini-img1"
              />

              <Stack
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: 31,
                }}
              >
                <Typography
                  sx={{ color: "#283445", fontSize: "18px" }}
                  variant="caption"
                >
                  NEW ARRIVALS
                </Typography>
                <Typography
                  sx={{ color: "#283445", fontSize: "16px" }}
                  variant="caption"
                >
                  SUMMER
                </Typography>
                <Typography
                  sx={{ color: "#283445", fontSize: "16px" }}
                  variant="caption"
                >
                  SALE 20% OFF
                </Typography>

                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: "#2B3445",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    "&:hover": {
                      ".shop-now-icon": {
                        position: "relative",
                        left: "4px",
                      },
                      color: "#D23F57",
                    },
                    transition: ".2s ease",
                  }}
                >
                  <Typography variant="body1">Shop Now</Typography>
                  <ArrowForward
                    className="shop-now-icon"
                    sx={{ fontSize: "13px" }}
                  />
                </Link>
              </Stack>
            </Box> */}

        {/* <Box sx={{ position: "relative" }}>
              <img
                width={"100%"}
                src="./hero-imgs/mini-img2.jpg"
                alt="mini-img2"
              />

              <Stack
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: 31,
                }}
              >
                <Typography
                  sx={{ color: "#283445", fontSize: "18px" }}
                  variant="caption"
                >
                  GAMING 4K
                </Typography>
                <Typography
                  sx={{ color: "#283445", fontSize: "16px" }}
                  variant="caption"
                >
                  DESKTOPS &
                </Typography>
                <Typography
                  sx={{ color: "#283445", fontSize: "16px" }}
                  variant="h6"
                >
                  LAPTOPS
                </Typography>

                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: "#2B3445",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    "&:hover": {
                      ".shop-now-icon": {
                        position: "relative",
                        left: "4px",
                      },
                      color: "#D23F57",
                    },
                    transition: ".2s ease",
                  }}
                >
                  <Typography variant="body1">Shop Now</Typography>
                  <ArrowForward
                    className="shop-now-icon"
                    sx={{ fontSize: "13px" }}
                  />
                </Link>
              </Stack>
            </Box>
          </Box>
        )}
        
    <Icons /> */}
      </Box>
    </Container>
  );
};

export default Hero;
