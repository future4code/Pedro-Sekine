import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useRestrictedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (!storedToken) {
      navigate("/login", { replace: true });
    }
  }, []);
};
