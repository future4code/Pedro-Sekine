import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

const CardComponent = styled(Card)({
    margin: "0rem",
});

export const RestaurantMetaData = (props) => {
    return (
        <CardComponent key={props.restaurant.id} sx={{ boxShadow: "none" }}>
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    color="primary"
                >
                    {props.restaurant.name}
                </Typography>
                <Typography
                    variant="body"
                    component="div"
                    color="text.secondary"
                    sx={{ margin: "0.5rem 0rem" }}
                >
                    {props.restaurant.deliveryTime} min
                </Typography>
                <Typography
                    variant="body"
                    component="div"
                    color="text.secondary"
                    sx={{ margin: "0.5rem 0rem" }}
                >
                    {props.restaurant.address}
                </Typography>
            </CardContent>
        </CardComponent>
    );
};
