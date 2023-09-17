import React from "react";
import {
  CustomStackFullWidth,
  SliderCustom,
} from "../../styled-components/CustomStyles.style";
import { Stack, styled } from "@mui/system";
import CustomImageContainer from "../CustomImageContainer";
import { Typography } from "@mui/material";
import image from "./asset/Layer_1.png";
import { useTheme } from "@emotion/react";
import LineSvg from "./asset/LineSvg";
import image2 from "./asset/OBJECTS.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 2400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        // dots: false
      },
    },
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        // dots: false
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        // dots: false
      },
    },
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: false,
      },
    },
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: false,
      },
    },
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.7,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 479,
      settings: {
        slidesToShow: 1.7,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1.7,
        slidesToScroll: 1,
      },
    },
  ],
};
const SliderCustomStyle = styled(Stack)(({ theme }) => ({
  "& .slick-slider": {
    "& .slick-list": {
      "& .slick-track": {
        "& .slick-slide": {
          display: "flex",
          justifyContent: "center",
        },
      },
    },
  },
}));
const data = [
  {
    image: image.src,
    title: "Product Safety",
    subTitle:
      "All packages are handled with utmost care to ensure product safety\n" +
      "          during transit.",
  },
  {
    image: image2.src,
    title: "Product Safety",
    subTitle:
      "All packages are handled with utmost care to ensure product safety\n" +
      "          during transit.",
  },
  {
    image: image.src,
    title: "Product Safety",
    subTitle:
      "All packages are handled with utmost care to ensure product safety\n" +
      "          during transit.",
  },
];

const ParcelFeatures = () => {
  const theme = useTheme();
  return (
    <CustomStackFullWidth
      sx={{ position: "relative" }}
      alignItems="center"
      justifyContent="center"
      mt={{ xs: "20px", sm: "30px", md: "50px" }}
    >
      <Stack position="absolute" top="50px" maxWidth="767px" width="100%">
        <LineSvg width="100%" />
      </Stack>

      <CustomStackFullWidth>
        <SliderCustomStyle>
          <Slider {...settings}>
            {data &&
              data?.map((item, index) => {
                return (
                  <Stack
                    key={index}
                    alignItems="center"
                    justifyContent="center"
                    maxWidth="275px"
                    width="100%"
                    display="flex !important"
                    spacing={{ xs: 1, sm: 2, md: 3 }}
                    // sx={{ scrollSnapAlign: "center", minWidth: "275px" }}
                  >
                    <CustomImageContainer
                      src={item.image}
                      width="140px"
                      height="122px"
                      objectfit="contain"
                      smWidth="64px"
                      smHeight="56px"
                    />
                    <Stack spacing={{ xs: 1, sm: 1, md: 0 }}>
                      <Typography
                        textAlign="center"
                        fontSize={{ xs: "12px", sm: "16px", md: "22px" }}
                        fontWeight="700"
                      >
                        {item?.title}
                      </Typography>
                      <Typography
                        fontSize={{ xs: "10px", sm: "12px", md: "14px" }}
                        color={theme.palette.neutral[400]}
                        textAlign="center"
                      >
                        {item.subTitle}
                      </Typography>
                    </Stack>
                  </Stack>
                );
              })}
          </Slider>
        </SliderCustomStyle>
      </CustomStackFullWidth>
    </CustomStackFullWidth>
  );
};

export default ParcelFeatures;
