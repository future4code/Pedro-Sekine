import {
    AppBar,
    Typography,
    Box,
    Card,
    CardActions,
    CardContent,
    Button,
    IconButton,
    Divider,
    CircularProgress,
    Skeleton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LowerMenu } from "../../components/LowerMenu";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToEditAddress, goToEditProfile } from "../../routes/coordinator";
import EditIcon from "@mui/icons-material/Edit";
import { getProfile } from "../../services/getProfile";
import { getAddress } from "../../services/getAddress";
import { getOrdersHistory } from "../../services/getOrdersHistory";
import { getActiveOrder } from "../../services/getActiveOrder";

export const ProfilePage = () => {
    const [personalDataComponent, setPersonalDataComponent] = useState();
    const [addressComponent, setAddressComponent] = useState();
    const [ordersComponent, setOrdersComponent] = useState([]);
    const [activeOrderComponent, setActiveOrderComponent] = useState();

    const navigate = useNavigate();

    useProtectedPage();

    useEffect(() => {
        profileBuilder();
    }, []);

    const profileBuilder = async () => {
        const profileData = await getProfile();
        console.log("profileData", profileData);
        buildPersonalDataCard(profileData.data.user);
        const addressData = await getAddress();
        buildAddressCard(addressData.data.address);
        const activeOrder = await getActiveOrder();
        buildActiveOrder(activeOrder.data.order);
        const ordersHistory = await getOrdersHistory();
        buildOrdersHistory(ordersHistory.data.orders);
    };

    const loadingCard = (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                margin: "1rem 0.5rem",
                padding: "1rem",
            }}
        >
            <Skeleton
                variant="text"
                sx={{ height: "3rem", margin: "0.25rem 0" }}
            />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
        </Card>
    );

    const handleClickEditPersonalData = () => {
        goToEditProfile(navigate);
    };

    const handleClickEditAddress = () => {
        goToEditAddress(navigate)
    }

    const buildPersonalDataCard = (user) => {
        const cardComponent = (
            <Card
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "1rem 0.5rem",
                }}
            >
                <CardContent>
                    <Box>
                        <Typography
                            variant="h5"
                            component="div"
                            color="primary"
                        >
                            Informações Pessoais{" "}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {user.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            CPF: {user.cpf}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            email: {user.email}
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleClickEditPersonalData}>
                        <IconButton>
                            <EditIcon />
                        </IconButton>
                    </Button>
                </CardActions>
            </Card>
        );
        setPersonalDataComponent(cardComponent);
    };

    const buildAddressCard = (data) => {
        const cardComponent = (
            <Card
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "1rem 0.5rem",
                }}
            >
                <CardContent>
                    <Box>
                        <Typography
                            variant="h5"
                            component="div"
                            color="primary"
                        >
                            Endereço
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {data.city} - {data.state}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {data.street}, {data.number}{" "}
                            {data.complement ? `, ${data.complement}` : ""} -{" "}
                            {data.neighbourhood}
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleClickEditAddress}>
                        <IconButton>
                            <EditIcon />
                        </IconButton>
                    </Button>
                </CardActions>
            </Card>
        );
        setAddressComponent(cardComponent);
    };

    const buildOrdersHistory = (orders) => {
        const cardComponent = orders.map((order) => {
            const orderCreation = new Date(parseInt(order.createdAt));
            const orderCreationString =
                orderCreation.getDate() +
                "/" +
                (orderCreation.getMonth() + 1) +
                "/" +
                orderCreation.getFullYear();
            return (
                <Card
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "1rem 0.5rem",
                    }}
                >
                    <CardContent>
                        <Box>
                            <Typography variant="h5" color="primary">
                                {order.restaurantName}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {orderCreationString}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Subtotal: R$ {order.totalPrice.toFixed(2)}
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            );
        });
        setOrdersComponent(cardComponent);
    };

    const buildActiveOrder = (order) => {
        if (order) {
            const orderCreation = new Date(parseInt(order.createdAt));
            const orderCreationString =
                orderCreation.getDate() +
                "/" +
                (orderCreation.getMonth() + 1) +
                "/" +
                orderCreation.getFullYear();
            const activeOrderCard = (
                <Card
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "1rem 0.5rem",
                    }}
                >
                    <CardContent>
                        <Box>
                            <Typography variant="h5" color="primary">
                                {order.restaurantName}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {orderCreationString}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Subtotal: R$ {order.totalPrice.toFixed(2)}
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            );
            setActiveOrderComponent(activeOrderCard);
        }
    };

    return (
        <div>
            <AppBar
                position="static"
                color="menu"
                sx={{
                    boxShadow: "none",
                    borderBottom: "1px solid #00000025",
                    padding: "1rem",
                }}
            >
                <Typography align="center">Meu Perfil</Typography>
            </AppBar>

            {personalDataComponent ? personalDataComponent : loadingCard}
            {addressComponent ? addressComponent : loadingCard}
            <Typography
                variant="h5"
                component="div"
                sx={{ margin: "2rem 0.5rem 0.3rem 0.5rem" }}
            >
                Pedidos Ativos
            </Typography>
            <Divider />
            {activeOrderComponent ? (
                activeOrderComponent
            ) : (
                <Typography sx={{ margin: "1rem 0.5rem" }}>
                    Você ainda não possui nenhum pedido ativo.
                </Typography>
            )}
            <Typography
                variant="h5"
                component="div"
                sx={{ margin: "2rem 0.5rem 0.3rem 0.5rem" }}
            >
                Histórico de Pedidos
            </Typography>
            <Divider />
            {ordersComponent.length ? (
                ordersComponent
            ) : (
                <Typography sx={{ margin: "1rem 0.5rem" }}>
                    Você ainda não completou nenhum pedido
                </Typography>
            )}
            <Box sx={{height: "5rem"}}></Box>
            <LowerMenu activePage={"profile"} />
        </div>
    );
};
