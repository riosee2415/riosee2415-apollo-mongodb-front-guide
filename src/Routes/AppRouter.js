import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

const GET_ALL_BOARD = gql`
  query getAllBoard {
    getAllBoard {
      _id
      test
      comments {
        _id
        desc
      }
    }
  }
`;

const AppRouter = () => {
  const [list, setList] = useState(null);

  const { data, loading, refetch } = useQuery(GET_ALL_BOARD);

  if (!loading) {
    console.log(data);

    if (list === null) {
      setList(data.getAllBoard);
    }
  }

  return (
    <div>
      {list
        ? list.length === 0
          ? `NONE DATA`
          : list.map((data) => {
              return <div key={data._id}>{data.test}</div>;
            })
        : `LOADING ...`}
    </div>
  );
};

export default AppRouter;
