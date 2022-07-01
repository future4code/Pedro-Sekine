import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { goToRestaurant } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const CardComponent = styled(Card)({
  margin: "1rem",
});

const SecondaryText = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export const buildRestaurantComponent = (list, setRestaurantComponent, handleClickRestaurant) => {

  const restaurantCards = list.map((restaurant) => {
    return (
      <CardComponent key={restaurant.id}>
        <CardActionArea onClick={() => handleClickRestaurant(restaurant.id)}>
          <CardMedia
            component="img"
            height="140"
            image={restaurant.logoUrl}
            alt="green iguana"
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {restaurant.name}
            </Typography>
            <SecondaryText>
              <Typography variant="body2" color="text.secondary">
                {restaurant.deliveryTime} min
              </Typography>
              <Typography
                display="inline"
                variant="body2"
                color="text.secondary"
              >
                Frete: R${restaurant.shipping.toFixed(2)}
              </Typography>
            </SecondaryText>
          </CardContent>
        </CardActionArea>
      </CardComponent>
    );
  });
  setRestaurantComponent(restaurantCards);
};
