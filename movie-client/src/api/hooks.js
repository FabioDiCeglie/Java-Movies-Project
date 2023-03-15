import api from "./axiosConfig";

export const useGetMovies = async () => {
  try {
    const response = await api.get("/api/v1/movies");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
