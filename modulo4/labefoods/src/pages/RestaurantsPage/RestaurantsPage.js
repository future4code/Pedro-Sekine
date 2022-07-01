import {
    AppBar,
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Divider,
    IconButton,
    Skeleton,
    Toolbar,
    Typography,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goBack, goToShoppingCart } from "../../routes/coordinator";
import { getRestaurantDetails } from "../../services/getRestaurantDetails";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { AppBarComponent } from "./AppBarComponent";
import { buildRestaurantDetailsComponent } from "./buildRestaurantDetailsComponent";
import { ProductCard } from "./ProductCard";
import { GlobalContext } from "../../global/GlobalContext";

export const RestaurantsPage = () => {
    const [restaurantDetailsComponent, setRestaurantDetailsComponent] =
        useState();
    const [productsComponent, setProductsComponent] = useState([]);
    const [restaurantProductsInfo, setRestaurantProductsInfo] = useState({});
    const navigate = useNavigate();
    const params = useParams();
    const { states, setters } = useContext(GlobalContext);

    useProtectedPage();

    useEffect(() => {
        updateRestaurantDetails();
    }, []);

    useEffect(() => {
        if (Object.keys(restaurantProductsInfo).length !== 0) {
            // console.log(
            //     "estou aqui com o seguinte estado",
            //     restaurantProductsInfo
            // );

            separateProductsByCategory(restaurantProductsInfo);
        }
    }, [states.shoppingCart]);

    const updateRestaurantDetails = async () => {
        const restaurantData = await getRestaurantDetails(params.id);
        buildRestaurantDetailsComponent(
            restaurantData.data.restaurant,
            setRestaurantDetailsComponent
        );
        setRestaurantProductsInfo(restaurantData.data.restaurant.products);
        separateProductsByCategory(restaurantData.data.restaurant.products);
    };

    const separateProductsByCategory = (products) => {
        const allCategories = products.map((product) => {
            return product.category;
        });
        const singleCategories = allCategories.filter((category, index) => {
            return allCategories.indexOf(category) === index;
        });

        let localProductsComponent = [];

        if (!productsComponent.length) {
            for (let category of singleCategories) {
                const categoryRestaurants = products.filter((product) => {
                    return product.category === category;
                });
                // console.log("categoria atual", category);
                localProductsComponent.push(
                    <Typography
                        key={category}
                        variant="h5"
                        component="div"
                        sx={{ margin: "2rem 0.5rem 0.3rem 0.5rem" }}
                    >
                        {category}
                    </Typography>
                );
                localProductsComponent.push(<Divider key={`${category}Divider`}/>);
                const categoryRestaurantsComponent = categoryRestaurants.map(
                    (product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                product={product}
                                restaurantId={params.id}
                            />
                        );
                    }
                );
                localProductsComponent.push(categoryRestaurantsComponent);
            }
            setProductsComponent([...productsComponent, localProductsComponent]);
        }
        
        // console.log("singleCategories", singleCategories);
    };

    return (
        <div>
            <AppBarComponent />
            {restaurantDetailsComponent ? (
                restaurantDetailsComponent
            ) : (
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
                    <Skeleton
                        variant="text"
                        sx={{ height: "3rem", margin: "0.25rem 0" }}
                    />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton
                        variant="text"
                        sx={{ height: "3rem", margin: "0.25rem 0" }}
                    />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                </Card>
            )}
            {productsComponent ? productsComponent : "Loading Components"}
        </div>
    );
};
