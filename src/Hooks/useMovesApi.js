import { useQuery } from "@tanstack/react-query";
import { Instance } from "../Instance";

const getApi = async () => {
  const { data } = await Instance.get(
    `movie/day?api_key=a073c404739d2a76c90fb6aac68b40f6`
  );
  return data;
};
const useMovesQuery = () => {
  return useQuery({ queryKey: ["moves"], queryFn: getApi });
};

export default useMovesQuery;
