import { AppBar, Button, Divider, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { LowerMenu } from "../../components/LowerMenu";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Box, display, styled } from "@mui/system";
import { GlobalContext } from "../../global/GlobalContext";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ProductCard } from "../RestaurantsPage/ProductCard";
import { getRestaurantDetails } from "../../services/getRestaurantDetails";
import { RestaurantMetaData } from "./RestaurantMetaData";
import { calculateTotalPrice } from "./calculateTotalPrice";
import { LoadingButton } from "@mui/lab";
import { postPlaceOrder } from "../../services/postPlaceOrder";

const AddressContainer = styled("div")({
    backgroundColor: "#00000020",
    margin: "0.25rem 0rem",
    padding: "1rem",
});
const PricesContainer = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    margin: "0.5rem",
});
const PricesSubContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
});
const EmptyCartContainer = styled("div")({
    margin: "4rem 2rem",
    display: "flex",
    justifyContent: "center",
});
const PaymentContainer = styled("div")({
    margin: "2rem 0.5rem",
});
const FormContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "0rem 1rem 7rem 0rem",
});

export const ShoppingCartPage = () => {
    const [shoppingCartComponent, setShoppingCartComponent] = useState();
    const [paymentMethod, setPaymentMethod] = useState("");
    const [restaurantData, setRestaurantData] = useState({});
    const [errorMessage, setErrorMessage] = useState("");

    const [isLoading, setIsLoading] = useState(false); //Loading para quando enviar informações para a API

    useProtectedPage();
    const { setters, states } = useContext(GlobalContext);

    useEffect(() => {
        // buildShoppingCartComponent();
        buildRestaurantDataComponent();
    }, []);

    useEffect(() => {
        buildShoppingCartComponent();
    }, [states.shoppingCart]);

    const emptyCartComponent = (
        <EmptyCartContainer>
            <Typography variant="h5">O carrinho está vazio 🛒</Typography>
        </EmptyCartContainer>
    );

    const buildShoppingCartComponent = () => {
        if (states.shoppingCart.length) {
            const componentConstructor = states.shoppingCart.map((product) => {
                return <ProductCard product={product.product} quantity={product.quantity}/>;
            });
            setShoppingCartComponent(componentConstructor);
        } else {
            setShoppingCartComponent(
                <EmptyCartContainer>
                    <Typography variant="h5">
                        O carrinho está vazio 🛒
                    </Typography>
                </EmptyCartContainer>
            );
            setRestaurantData({});
            setters.setCurrentRestaurant(0);
        }
    };

    const buildRestaurantDataComponent = async () => {
        // será que estou pegando as informações que preciso??
        if (states.currentRestaurant) {
            const restaurantDataRequest = await getRestaurantDetails(
                states.currentRestaurant
            );
            // console.log(
            //     "estou no buildRestaurantDataComponent",
            //     restaurantDataRequest.data.restaurant
            // );
            setRestaurantData(restaurantDataRequest.data.restaurant);
        }
    };

    const handleChangePaymentMethod = (event) => {
        setPaymentMethod(event.target.value);
        // console.log("event.target.value", event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (paymentMethod === "") {
            setErrorMessage("Escolha um método de pagamento");
        } else if (Object.keys(restaurantData).length === 0) {
            setErrorMessage("Adicione itens ao carrinho");
        } else {

            const bodyBuilder = states.shoppingCart.map(item => {
                const bodyobject = {
                    id: item.product.id,
                    quantity: item.quantity
                }
                return bodyobject
            })

            const body = {
                products: bodyBuilder,
                paymentMethod: paymentMethod
            }
            const restaurantId = states.currentRestaurant
            // console.log("body que vai ser enviado", body);
            
            const placeOrderRequest = await postPlaceOrder(body, restaurantId)
            if (placeOrderRequest.request.status === 200) {
                setErrorMessage("Pedido feito com sucesso! Bom Apetite 😋")
            }
        
        }
    };

    return (
        <div>
            <AppBar
                position="static"
                color="menu"
                sx={{
                    boxShadow: "none",
                    borderBottom: "1px solid #c4c4c4",
                    padding: "1rem",
                }}
            >
                <Typography align="center">Meu Carrinho</Typography>
            </AppBar>
            <AddressContainer>
                <Typography color="text.secondary" sx={{ margin: "0.5rem 0" }}>
                    Endereço de Entrega
                </Typography>
                <Typography sx={{ margin: "0.5rem 0" }}>
                    {states.addressData.street}, {states.addressData.number}
                </Typography>
            </AddressContainer>
            {Object.keys(restaurantData).length === 0 ? (
                <></>
            ) : (
                <RestaurantMetaData restaurant={restaurantData} />
            )}
            {!shoppingCartComponent
                ? emptyCartComponent
                : shoppingCartComponent}
            <PricesContainer>
                <Typography variant="h6">SUBTOTAL</Typography>
                <PricesSubContainer>
                    <Typography>
                        Frete: R${" "}
                        {Object.keys(restaurantData).length === 0
                            ? "0.00"
                            : restaurantData.shipping.toFixed(2)}
                    </Typography>
                    <Typography
                        variant="h5"
                        color="primary"
                        sx={{ fontWeight: "bold" }}
                    >
                        R${" "}
                        {Object.keys(restaurantData).length === 0
                            ? "0.00"
                            : calculateTotalPrice(
                                  states.shoppingCart,
                                  restaurantData.shipping
                              )}
                    </Typography>
                </PricesSubContainer>
            </PricesContainer>
            <PaymentContainer>
                <Typography>Forma de Pagamento</Typography>
                <Divider />
                <FormControl sx={{ margin: "1rem 0rem 0rem 0rem" }}>
                    <RadioGroup
                        onChange={handleChangePaymentMethod}
                        aria-labelledby="paymentMethod"
                        name="paymentMethod"
                    >
                        <FormControlLabel
                            value="money"
                            control={<Radio />}
                            label="Dinheiro"
                        />
                        <FormControlLabel
                            value="creditcard"
                            control={<Radio />}
                            label="Cartão de Crádito"
                        />
                    </RadioGroup>
                </FormControl>
            </PaymentContainer>
            <FormContainer>
                {!isLoading ? (
                    <Button
                        type="submit"
                        sx={{
                            margin: "0.5rem 1rem",
                            height: "3rem",
                            "text-transform": "none",
                            boxShadow: "none",
                        }}
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        Confirmar Pedido
                    </Button>
                ) : (
                    <LoadingButton
                        loading
                        variant="contained"
                        sx={{
                            margin: "0.5rem 1rem",
                            height: "3rem",
                            "text-transform": "none",
                            boxShadow: "none",
                        }}
                    ></LoadingButton>
                )}
                {errorMessage ? (
                    <Typography sx={{ alignSelf: "center" }} color="error">
                        {errorMessage}
                    </Typography>
                ) : (
                    <></>
                )}
            </FormContainer>

            <LowerMenu activePage={"shoppingCart"} />
        </div>
    );
};
