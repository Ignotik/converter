import React from "react";
import Header from "./Layout/Header";
import { routes } from "../utils/router/routes";
import { useRoutes } from "react-router-dom";

const AppRoutes: React.FC = () => {
  const route = useRoutes(routes);
  return (
    <>
      <Header />
      {route}
    </>
  );
};

export default AppRoutes;
