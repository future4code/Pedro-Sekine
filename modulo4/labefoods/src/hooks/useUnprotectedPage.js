import { useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../routes/coordinator";



export const useUnprotectedPage = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToHome(navigate);
    }
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToHome(navigate);
    }
  }, [navigate]);
};
