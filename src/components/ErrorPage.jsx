import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const errorType = useRouteError();
  console.log(errorType);

  return (
    <>
      <h1>Something wrong !</h1>
      <p>There was an error while loading this page</p>
    </>
  );
};

export default ErrorPage;
