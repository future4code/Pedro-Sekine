import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
    AppBar,
    Box,
    InputAdornment,
    TextField,
    Typography,
    Link,
    Skeleton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToProfile } from "../../routes/coordinator";
import { goToShoppingCart } from "../../routes/coordinator";
import { goToRestaurant } from "../../routes/coordinator";
import { SearchContainer } from "./styled";
import SearchIcon from "@mui/icons-material/Search";
import { getRestaurants } from "../../services/getRestaurants";
import { buildRestaurantComponent } from "./buildRestaurantComponent";
import { buildCategoryCarousel } from "./buildCategoryCarousel";
import { LowerMenu } from "../../components/LowerMenu";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useIncompleteProfilePage } from "../../hooks/useIncompleteProfilePage";

export const HomePage = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [restaurantComponent, setRestaurantComponent] = useState([]);
    const [carouselComponent, setCarouselComponent] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchField, setSearchField] = useState("");

    const [activeTab, setActiveTab] = useState(0);

    const navigate = useNavigate();

    useProtectedPage();
    useIncompleteProfilePage()

    useEffect(() => {
        updateRestaurantList();
    }, []);

    const updateRestaurantList = async () => {
        const restaurantsArray = await getRestaurants();
        setAllRestaurants(restaurantsArray);
        // console.log("restaurantsArray", restaurantsArray);
        buildRestaurantComponent(
            restaurantsArray,
            setRestaurantComponent,
            handleClickRestaurant
        );
        buildCategoryCarousel(
            restaurantsArray,
            setCategories,
            setCarouselComponent,
            activeTab
        );
    };

    const handleClickRestaurant = (id) => {
        goToRestaurant(navigate, id);
        // console.log("entrou no handleClickRestaurante com o seguinte ID", id);
    };

    const handleChangeTab = (event, newActiveTab) => {
        setActiveTab(newActiveTab);

        // console.log("allRestaurants para entender", allRestaurants);
        // console.log("active tab", activeTab)
        // console.log("newActiveTab", newActiveTab);

        const filteredRestaurants = allRestaurants.filter((restaurant) => {
            // console.log(restaurant.category);
            if (newActiveTab === 0) {
                // console.log("entrei no zero")
                return true;
            } else {
                // console.log("entrei no um")

                return restaurant.category === categories[newActiveTab - 1];
            }
        });
        // console.log("filteredRestaurants", filteredRestaurants);
        buildRestaurantComponent(
            filteredRestaurants,
            setRestaurantComponent,
            handleClickRestaurant
        );
    };

    const handleChangeSearch = (event) => {
        setSearchField(event.target.value);
        const filteredRestaurants = allRestaurants.filter((restaurant) => {
            return restaurant.name
                .toLowerCase()
                .includes(event.target.value.toLowerCase());
        });

        buildRestaurantComponent(
            filteredRestaurants,
            setRestaurantComponent,
            handleClickRestaurant
        );
        // console.log("filteredRestaurants", filteredRestaurants);
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
                <Typography align="center">FutureEats</Typography>
            </AppBar>
            <SearchContainer>
                <TextField
                    value={searchField}
                    onChange={handleChangeSearch}
                    placeholder="Restaurante"
                    id="outlined-start-adornment"
                    sx={{ margin: "0.5rem 1rem" }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </SearchContainer>
            <Box
                sx={{
                    margin: "0.5rem 0.5rem",
                }}
            >
                <Tabs
                    // textColor="secondary"
                    indicatorColor="secondary"
                    activeTab={activeTab}
                    value={activeTab}
                    onChange={handleChangeTab}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab
                        sx={{
                            "text-transform": "none",
                            "&.Mui-selected": {
                                color: "#1890ff",
                            },
                        }}
                        key={"all"}
                        label="Todos"
                    />
                    {carouselComponent ? (
                        carouselComponent
                    ) : (
                        <Skeleton variant="text" />
                    )}
                </Tabs>
            </Box>
            {restaurantComponent ? (
                restaurantComponent
            ) : (
                <Skeleton variant="text" />
            )}
            <Box sx={{ height: "5rem" }}></Box>
            <LowerMenu activePage={"home"} />
        </div>
    );
};
