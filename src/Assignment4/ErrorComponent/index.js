import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const errorData = useRouteError();
  return (
    <>
      <h1>Error Component</h1>
      <h2> Error : {errorData.statusText || errorData.message}</h2>
    </>
  );
};

export default ErrorComponent;
