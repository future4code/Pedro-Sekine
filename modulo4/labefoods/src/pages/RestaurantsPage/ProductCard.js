import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Badge, Button, CardActions } from "@mui/material";
import { GlobalContext } from "../../global/GlobalContext";
import { QuantitySelector } from "./QuantitySelector";

export const ProductCard = (props) => {
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState("");

    const [alreadyCart, setAlreadyCart] = useState(false);
    const { states, setters } = useContext(GlobalContext);

    if (states.shoppingCart.length && !alreadyCart) {
        for (let item of states.shoppingCart) {
            if (item.product.id === props.product.id) {
                setAlreadyCart(true);
                setQuantity(item.quantity)
            }
            
        }
    }

    const addItemToCart = () => {
        if (
            states.currentRestaurant &&
            states.currentRestaurant !== props.restaurantId
        ) {
            alert(
                "Você pode ter itens de somente um restaurante no carrinho. Finalize seu pedido ou remova os itens do carrinho para continuar."
            );
        } else {
            setOpen(true);
        }
    };

    const removeItemFromCart = () => {
        const filteredCart = states.shoppingCart.filter((item) => {
            return item.product.id !== props.product.id;
        });
        if (filteredCart.length !== states.shoppingCart) {
            setters.setShoppingCart(filteredCart);
        }
        setAlreadyCart(false);
        if (!filteredCart) {
            setters.setCurrentRestaurant(0);
        }
        setQuantity("")
    };

    const handleChange = (event) => {
        setQuantity(Number(event.target.value) || "");
        // console.log("event.target.value", event.target.value);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason !== "backdropClick") {
            setOpen(false);
        }

        if (states.currentRestaurant === props.restaurantId) {
            setters.setShoppingCart([
                ...states.shoppingCart,
                {
                    product: props.product,
                    quantity: quantity,
                },
            ]);
        } else if (!states.currentRestaurant) {
            setters.setCurrentRestaurant(props.restaurantId);
            setters.setShoppingCart([
                ...states.shoppingCart,
                {
                    product: props.product,
                    quantity: quantity,
                },
            ]);
        }
    };

    return (
        <Badge
            key={props.product.id}
            component={"div"}
            color="primary"
            badgeContent={quantity || props.quantity}
            invisible={quantity || props.quantity ? false : true}
            sx={{ minWidth: "95%", margin: "1rem 0.5rem" }}
        >
            <Card sx={{ display: "flex", minWidth: "100%" }}>
                <CardMedia
                    component="img"
                    sx={{ width: "6rem" }}
                    image={props.product.photoUrl}
                    alt="Live from space album cover"
                />
                <Box sx={{ width: "100%" }}>
                    <CardContent
                        component="div"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "stretch",
                        }}
                    >
                        <Typography
                            variant="h5"
                            color="primary"
                            component="div"
                        >
                            {props.product.name}
                        </Typography>
                        <QuantitySelector
                            open={open}
                            setOpen={setOpen}
                            handleChange={handleChange}
                            handleClickOpen={handleClickOpen}
                            handleClose={handleClose}
                            quantity={quantity}
                        />

                        <Typography
                            component="div"
                            variant="subtitle1"
                            color="text.secondary"
                            lineHeight="1.5rem"
                            sx={{ margin: "0.25rem 0rem" }}
                        >
                            {props.product.description}
                        </Typography>
                        <Typography
                            component="div"
                            variant="body"
                            sx={{ margin: "0.5rem 0rem" }}
                        >
                            R$ {props.product.price.toFixed(2)}
                        </Typography>
                    </CardContent>
                    <CardActions
                        sx={{ display: "flex", justifyContent: "flex-end" }}
                    >
                        {alreadyCart ? (
                            <Button color="error" onClick={removeItemFromCart}>
                                Remover
                            </Button>
                        ) : (
                            <Button onClick={addItemToCart}>Adicionar</Button>
                        )}
                    </CardActions>
                </Box>
            </Card>
        </Badge>
    );
};
