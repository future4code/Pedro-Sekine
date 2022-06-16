import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTrips } from "../hooks/useTrips";
import { UpperMenu } from "../components/UpperMenu";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Skeleton from "@mui/material/Skeleton";

export const ListTripsPage = () => {
  // useEffect(() => {
  //   getTripArray();
  // }, [trips]);

  const navigate = useNavigate();

  const { trips, loading } = useTrips();

  const handleClick = (id) => {
    navigate(`../trips/application/${id}`);
    // console.log(id);
  };

  const tripComponent = trips.map((trip) => {
    return (
      <Box gridColumn="span 3">
        <Card
          key={trip.id}
          sx={{ minHeight: 300, display: "flex", flexDirection: "column" }}
        >
          <CardContent
            sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
          >
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {trip.date} - {trip.durationInDays} days
            </Typography>
            <Typography variant="h5" component="div">
              {trip.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {trip.planet}
            </Typography>
            <Typography variant="body2" sx={{ flexGrow: 1 }}>
              {trip.description}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              size="medium"
              onClick={() => handleClick(trip.id)}
              sx={{ width: "80%", marginBottom: "1rem" }}
            >
              Quero ir para {trip.planet}
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  });

  return (
    <div sx={{ width: 1 }}>
      <UpperMenu title="Próximas Viagens" />

      {loading ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 4fr)",
            gap: 4,
            margin: 4,
          }}
        >
          <Box gridColumn="span 3">
            <Skeleton sx={{ marginBottom: "0.5rem" }} />
            <Skeleton sx={{ marginBottom: "0.5rem" }} />
            <Skeleton sx={{ marginBottom: "0.5rem" }} />
            <Skeleton animation="wave" sx={{ marginBottom: "0.5rem" }} />
            <Skeleton animation={false} sx={{ marginBottom: "0.5rem" }} />
          </Box>{" "}
          <Box gridColumn="span 3">
            <Skeleton sx={{ marginBottom: "0.5rem" }} />
            <Skeleton sx={{ marginBottom: "0.5rem" }} />
            <Skeleton sx={{ marginBottom: "0.5rem" }} />
            <Skeleton animation="wave" sx={{ marginBottom: "0.5rem" }} />
            <Skeleton animation={false} sx={{ marginBottom: "0.5rem" }} />
          </Box>{" "}
          <Box gridColumn="span 3">
            <Skeleton sx={{ marginBottom: "0.5rem" }} />
            <Skeleton sx={{ marginBottom: "0.5rem" }} />
            <Skeleton sx={{ marginBottom: "0.5rem" }} />
            <Skeleton animation="wave" sx={{ marginBottom: "0.5rem" }} />
            <Skeleton animation={false} sx={{ marginBottom: "0.5rem" }} />
          </Box>{" "}
          <Box gridColumn="span 3">
            <Skeleton sx={{ marginBottom: "0.5rem" }} />
            <Skeleton sx={{ marginBottom: "0.5rem" }} />
            <Skeleton sx={{ marginBottom: "0.5rem" }} />
            <Skeleton animation="wave" sx={{ marginBottom: "0.5rem" }} />
            <Skeleton animation={false} sx={{ marginBottom: "0.5rem" }} />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 4fr)",
            gap: 4,
            margin: 4,
          }}
        >
          {tripComponent}
        </Box>
      )}
    </div>
  );
};
