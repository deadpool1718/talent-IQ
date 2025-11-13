import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
export const useActiveSessions = () => {
  const result = useQuery({
    queryKey: ["activeSessions"],
    queryFn: sessionApi.getActiveSessions,
  });

  return result;
};
