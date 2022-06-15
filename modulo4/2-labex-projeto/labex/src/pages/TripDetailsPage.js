import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UpperMenu } from "../components/UpperMenu";
import { useRestrictedPage } from "../hooks/useRestrictedPage";
import { getTripDetails } from "../services/getTripDetails";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import DoneIcon from "@mui/icons-material/Done";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import styled from "styled-components";
import { decideCandidate } from "../services/decideCandidate";

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0rem;
`;

export const TripDetailsPage = () => {
  const [tripDetails, setTripDetails] = useState({});
  const [groupSelection, setGroupSelection] = useState("candidates");
  const [candidatesCard, setCandidatesCard] = useState();
  const [approvedCard, setApprovedCard] = useState();

  const { tripId } = useParams();

  useRestrictedPage();

  useEffect(() => {
    updateTripDetails();
  }, []);

  const updateTripDetails = async () => {
    const tripObject = await getTripDetails(tripId);
    setTripDetails(tripObject);
    buildCandidateCard(tripObject);
    buildApprovedCard(tripObject);
  };

  const buildApprovedCard = (object) => {
    const approvedComponent = object.approved.map(
      (approvedCandidate, index) => {
        return (
          <div key={approvedCandidate.id}>
            {index != 0 ? <Divider /> : null}
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={
                  <React.Fragment>
                    {approvedCandidate.name}{" "}
                    <Typography
                      sx={{
                        display: "inline",
                        fontSize: 12,
                        lineHeight: 4
                      }}
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      - {approvedCandidate.age}, {approvedCandidate.country},{" "}
                      {approvedCandidate.profession}
                    </Typography>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {approvedCandidate.applicationText}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </div>
        );
      }
    );
    setApprovedCard(approvedComponent);
    // console.log(approvedComponent);
  };

  const buildCandidateCard = (object) => {
    if (groupSelection === "candidates") {
      const candidatesComponent = object.candidates.map((candidate, index) => {
        return (
          <div key={candidate.id}>
            {index != 0 ? <Divider /> : null}
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={
                  <React.Fragment>
                    {candidate.name}{" "}
                    <Typography
                      sx={{ display: "inline", fontSize: 12, lineHeight: 4 }}
                      component="span"
                      variant="body2"
                      color="text.secondary"

                    >
                      - {candidate.age}, {candidate.country},{" "}
                      {candidate.profession}
                    </Typography>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {candidate.applicationText}
                    </Typography>
                  </React.Fragment>
                }
              />
              <ButtonsContainer>
                <Button
                  onClick={() => handleClickDecision(candidate.id, true)}
                  variant="contained"
                  color="success"
                  startIcon={<DoneIcon />}
                  sx={{ margin: "0.5rem" }}
                >
                  aprovar
                </Button>
                <Button
                  onClick={() => handleClickDecision(candidate.id, false)}
                  variant="outlined"
                  color="error"
                  startIcon={<DoNotDisturbIcon />}
                  sx={{ margin: "0.5rem" }}
                >
                  reprovar
                </Button>
              </ButtonsContainer>
            </ListItem>
          </div>
        );
      });
      setCandidatesCard(candidatesComponent);
    }
  };

  const handleChangeSelection = (event, newGroupSelection) => {
    setGroupSelection(newGroupSelection);
    // console.log("newGroupSelection", newGroupSelection);
    // console.log("GroupSelection", groupSelection);
  };

  const handleClickDecision = (candidateId, decision) => {
    const bodyDecisionCandidate = { approve: decision };
    // console.log(bodyDecisionCandidate);
    decideCandidate(tripId, candidateId, bodyDecisionCandidate);
    updateTripDetails();
  };

  return (
    <div>
      <UpperMenu title="Detalhes da Viagem" />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr 2fr)",
          gap: 6,
          margin: 4,
        }}
      >
        <Box>
          <Card
            key={tripDetails.id}
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
                {tripDetails.date} - {tripDetails.durationInDays} days
              </Typography>
              <Typography variant="h5" component="div">
                {tripDetails.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {tripDetails.planet}
              </Typography>
              <Typography
                variant="body2"
                sx={{ flexGrow: 1, marginBottom: "2rem" }}
              >
                {tripDetails.description}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Candidatos:{" "}
                {tripDetails.candidates ? tripDetails.candidates.length : 0}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Aprovados:{" "}
                {tripDetails.approved ? tripDetails.approved.length : 0}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ToggleButtonGroup
                color="primary"
                value={groupSelection}
                exclusive
                onChange={handleChangeSelection}
                sx={{ marginBottom: "1rem" }}
              >
                <ToggleButton value="candidates">Candidatos</ToggleButton>
                <ToggleButton value="approved">Aprovados</ToggleButton>
              </ToggleButtonGroup>
            </CardActions>
          </Card>
        </Box>

        <div>
          <Paper>
            <List>
              {groupSelection === "candidates" ? candidatesCard : approvedCard}
            </List>
          </Paper>
        </div>
      </Box>
    </div>
  );
};
