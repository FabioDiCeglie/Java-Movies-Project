import api from "./axiosConfig";

export const useGetMovies = async () => {
  try {
    const response = await api.get("/api/v1/movies");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const useCreateReview = async (review: string, movieId: string) => {
  try {
    const response = await api.post("/api/v1/reviews", {
      reviewBody: review,
      imdbId: movieId,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const useGetMovie = async (movieId: string) => {
  try {
    const response = await api.get(`/api/v1/movies/${movieId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
