import { useLazyQuery } from "@apollo/client";
import React from "react";
import { USERS_DOC } from "../apollo/queries";

const UseLazyQueryPage = () => {
  const [queryRates, { loading, error, data }] = useLazyQuery(USERS_DOC);

  return (
    <div>
      <button onClick={() => queryRates()}>Get Exchange Rates</button>
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

export default UseLazyQueryPage;
