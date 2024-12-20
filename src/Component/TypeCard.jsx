import React from "react";
import { Card, CardMedia, Typography, Box, ButtonBase } from "@mui/material";

function TypeCard() {
  const handleClick = () => {
    console.log("Card Clicked!");
  };

  const file = [
    { path: "Food.webp", name: "Food" },
    { path: "Shoes.jpg", name: "Shoes" },
    { path: "Clothes.jpg", name: "Clothes" },
  ];
  return (
    <Box
      
      sx={{
        display:"flex",
        gap:2,
        width:'100%',
        height:'250px',
        padding: "15px",
      }}
    >
      {file.map((type) => (
        <Card
          key={type.name}
          sx={{
            width: 250,
            height: "fit-content",
            position: "relative",
            transition: "box-shadow 0.3s ease-in-out", 
            boxShadow: 4,
            "&:hover": { boxShadow: 8 }, 
          }}
        >
          <ButtonBase
            onClick={handleClick}
            sx={{
              position: "relative",
              width: "100%",
              height: "150px",
              display: "block",
              "&:hover .hover-overlay": { opacity: 1 },
            }}
          >
            <CardMedia
              component="img"
              alt={type.name}
              height="150"
              image={type.path}
            />

            <Box
              className="hover-overlay"
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                opacity: 0,
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                color="white"
                fontWeight="bold"
              >
                {type.name}
              </Typography>
            </Box>
          </ButtonBase>
        </Card>
      ))}
    </Box>
  );}

export default TypeCard;
