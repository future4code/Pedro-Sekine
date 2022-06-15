import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useRestrictedPage } from "../hooks/useRestrictedPage";
import { useTrips } from "../hooks/useTrips";
import { UpperMenu } from "../components/UpperMenu";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Skeleton from "@mui/material/Skeleton";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/material";
import { AlignHorizontalCenter } from "@mui/icons-material";
import { deleteTrip } from "../services/deleteTrip";
import { getTrips } from "../services/getTrips";

export const AdminHomePage = () => {

  //teste começa aqui ✅✅✅✅✅✅✅✅
  const [dataTest, setDataTest] = useState([]);
  const [isLoadingTest, setisLoadingTest] = useState(false);
  const [tripComponentTest, setTripComponentTest] = useState()

  useEffect(() => {
    updateTrips()
  }, []);
  // Usar agora dataTest e isLoadingTest

  const updateTrips = async () => {
    setisLoadingTest(true)
    const tripsResponse = await getTrips()
    // console.log("tripsResponse from getTrips", tripsResponse)
    setDataTest(tripsResponse)
    buildTripsComponent(tripsResponse)
    setisLoadingTest(false)
  }

  // colocar tudo em estados nesse mesmo componente.
  // Criar uma função que atualiza todos os estados
  // Teste Termina aqui ✅✅✅✅✅✅✅✅✅

  useRestrictedPage();

  const navigate = useNavigate();

  // const { trips, loading } = useTrips();
  // Comentando para testar 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴

  const handleClick = (id) => {
    navigate(`../admin/trips/${id}`);
  };

  const handleDeleteTrip = async (id) => {
    await deleteTrip(id)
    // teste ABAIXO!!! ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
    updateTrips()
  }

  const handleClickCreateTrip = () => {
    navigate("../admin/trips/create");
  };

  // TEST AREA ✅✅✅✅✅✅✅✅✅✅
  const buildTripsComponent = (tripArray) => {
    const tripComponent = tripArray.map((trip) => {
      return (
        <Box gridColumn="span 3" key={trip.id}>
          <Card
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
                justifyItems: "center",
                alignContent: "center",
                marginBottom: "1rem",
              }}
            >
              <Button
                variant="contained"
                size="medium"
                onClick={() => handleClick(trip.id)}
                sx={{ width: "80%"}}
              >
                Administrar viagem
              </Button>
              <IconButton 
                aria-label="delete"
                onClick={() => handleDeleteTrip(trip.id)}
              >
                <DeleteIcon/>
              </IconButton>
            </CardActions>
          </Card>
        </Box>
    );
    });
    // console.log("entrou no buildTripsComponent", tripComponent)
    setTripComponentTest(tripComponent)
  }
  // TEST AREA✅✅✅✅✅✅✅✅✅✅✅✅

  // Comentando para testar 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
  // const tripComponent = trips.map((trip) => {
  //   return (
  //     <Box gridColumn="span 3" key={trip.id}>
  //       <Card
  //         sx={{ minHeight: 300, display: "flex", flexDirection: "column" }}
  //       >
  //         <CardContent
  //           sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
  //         >
  //           <Typography
  //             sx={{ fontSize: 14 }}
  //             color="text.secondary"
  //             gutterBottom
  //           >
  //             {trip.date} - {trip.durationInDays} days
  //           </Typography>
  //           <Typography variant="h5" component="div">
  //             {trip.name}
  //           </Typography>
  //           <Typography sx={{ mb: 1.5 }} color="text.secondary">
  //             {trip.planet}
  //           </Typography>
  //           <Typography variant="body2" sx={{ flexGrow: 1 }}>
  //             {trip.description}
  //           </Typography>
  //         </CardContent>
  //         <CardActions
  //           sx={{
  //             display: "flex",
  //             justifyContent: "center",
  //             alignItems: "center",
  //             justifyItems: "center",
  //             alignContent: "center",
  //             marginBottom: "1rem",
  //           }}
  //         >
  //           <Button
  //             variant="contained"
  //             size="medium"
  //             onClick={() => handleClick(trip.id)}
  //             sx={{ width: "80%"}}
  //           >
  //             Administrar viagem
  //           </Button>
  //           <IconButton 
  //             aria-label="delete"
  //             onClick={() => handleDeleteTrip(trip.id)}
  //           >
  //             <DeleteIcon/>
  //           </IconButton>
  //         </CardActions>
  //       </Card>
  //     </Box>
  //   );
  // });
  // Comentando para testar 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴



  return (
    <div>
      <UpperMenu title="Administrar Viagens" />


{/* Comentando para testar 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 */}
      {/* {loading ? (
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
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "absolute", bottom: "1rem", right: "1rem" }}
        onClick={handleClickCreateTrip}
      >
        <AddIcon />
      </Fab> */}
{/* Comentando para testar 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 */}


{/* TESTE AREA ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅ */}

{isLoadingTest ? (
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
          {tripComponentTest}
        </Box>
      )}
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "absolute", bottom: "1rem", right: "1rem" }}
        onClick={handleClickCreateTrip}
      >
        <AddIcon />
      </Fab>
{/* TESTE AREA ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅ */}
    </div>
  );
};
