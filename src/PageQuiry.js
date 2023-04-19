import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const PageQuiry = () => {
  const getApi = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  };

  const { data, isLoading, error, status } = useQuery({
    queryKey: ["query"],
    queryFn: getApi,
  });
  /*---------------------------------------------------------------- */

  return <div>PageQuiry</div>;
};

export default PageQuiry;
