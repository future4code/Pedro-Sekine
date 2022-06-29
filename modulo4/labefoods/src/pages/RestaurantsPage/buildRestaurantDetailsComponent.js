import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";


const CardComponent = styled(Card)({
    margin: "1rem",
});

const SecondaryText = styled("div")({
    display: "flex",
    justifyContent: "space-between",
});

export const buildRestaurantDetailsComponent = (restaurant, setRestaurantDetailsComponent) => {
    setRestaurantDetailsComponent(
        <CardComponent key={restaurant.id} sx={{ boxShadow: "none" }}>
            <CardMedia
                component="img"
                height="140"
                image={restaurant.logoUrl}
                alt="Logo do Restaurante"
                sx={{ objectFit: "cover" }}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    color="primary"
                >
                    {restaurant.name}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ margin: "0.25rem 0rem" }}
                >
                    {restaurant.category}
                </Typography>
                <SecondaryText>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ margin: "0.25rem 0rem" }}
                    >
                        {restaurant.deliveryTime} min
                    </Typography>
                    <Typography
                        sx={{ margin: "0.25rem 0rem" }}
                        display="inline"
                        variant="body2"
                        color="text.secondary"
                    >
                        Frete: R${restaurant.shipping.toFixed(2)}
                    </Typography>
                </SecondaryText>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ margin: "0.25rem 0rem" }}
                >
                    {restaurant.address}
                </Typography>
            </CardContent>
        </CardComponent>
    );
};
