import { useQuery } from "@apollo/client";
import React from "react";
import { USERS_DOC } from "../apollo/queries";

const UseQueryPage = () => {
  const { loading, error, data } = useQuery(USERS_DOC, {
    fetchPolicy: "standby",
  });

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error :(</p>
      ) : !data ? null : (
        data.users.data.map(({ id, name }) => (
          <div key={id}>
            <p>{name}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default UseQueryPage;
