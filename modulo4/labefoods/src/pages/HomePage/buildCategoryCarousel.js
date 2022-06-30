import React from "react";
import Tab from "@mui/material/Tab";

export const buildCategoryCarousel = (
    restaurants,
    setCategories,
    setCarouselComponent,
    activeTab
) => {
    const allCategories = restaurants.map((restaurant) => {
        return restaurant.category;
    });
    const singleCategories = allCategories.filter((category, index) => {
        return allCategories.indexOf(category) === index;
    });
    // console.log("singleCategories", singleCategories);
    setCategories(singleCategories);

    const componentBuilder = singleCategories.map((category, index) => {
        // let colorText
        // if (index === activeTab) {
        //   colorText = "primary"
        // } else {

        // } colorText =

        return (
            <Tab
                sx={{
                    textTransform: "none",
                    "&.Mui-selected": {
                        color: "#1890ff",
                    },
                }}
                key={index}
                label={category}
            />
        );
    });

    setCarouselComponent(componentBuilder);
};
