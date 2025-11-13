import axiosInstance from "../lib/axios";

export const sessionApi = {
  createSession: async (data) => {
    const response = await axiosInstance.post("/sessions/", data);
    return response.data;
  },
  getActiveSession: async () => {
    const response = await axiosInstance.get("/sessions/active", );
    return response.data;
  },
  getMyRecentSession: async () => {
    const response = await axiosInstance.get("/sessions/my-recent",);
    return response.data;
  },
  getSessionById: async () => {
    const response = await axiosInstance.get("/sessions/${id}", );
    return response.data;
  },
  joinSession: async (id) => {
    const response = await axiosInstance.post("/sessions/${id}/join", data);
    return response.data;
  },
  endSession: async (id) => {
    const response = await axiosInstance.post("/sessions/${id}/end", data);
    return response.data;
  },
  getStramToken: async () => {
    const response = await axiosInstance.post("/sessions/${id}/end", data);
    return response.data;
  },
};
