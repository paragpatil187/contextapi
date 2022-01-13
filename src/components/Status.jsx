import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
export const Status = () => {
  const { token, auth } = useContext(AuthContext);
  if (auth === "true") {
    return (
      <>
        <div>
          <h1>login successfull</h1>
          <h1>token is : {token.token}</h1>
        </div>
      </>
    );
  } else {
    return null;
  }
}