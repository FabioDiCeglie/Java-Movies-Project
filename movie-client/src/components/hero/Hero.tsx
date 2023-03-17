import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useGetMovies } from "../../api/hooks";
import { useState, useEffect, DetailedHTMLProps, HTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { Movie } from "../../types/Movie";

const Hero = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();

  const getMovies = async () =>
    await useGetMovies().then((data) => setMovies(data));

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="moview-carousel-container">
      <Carousel>
        {movies.map((movie: Movie) => {
          return (
            <Paper key={movie.id}>
              <div className="movie-card-container">
                <div
                  className="movie-card"
                  style={
                    {
                      "--img": `url(${movie.backdrops[0]})`,
                    } as DetailedHTMLProps<
                      HTMLAttributes<HTMLDivElement>,
                      HTMLDivElement
                    >
                  }
                >
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie.poster} alt={movie.title} />
                    </div>
                    <div className="movie-title">
                      <h4>{movie.title}</h4>
                    </div>
                    <div className="movie-buttons-container">
                      <Link
                        to={`/trailer/${movie.trailerLink.substring(
                          movie.trailerLink.length - 11
                        )}`}
                      >
                        <div className="play-button-icon-container">
                          <FontAwesomeIcon
                            className="play-button-icon"
                            icon={faCirclePlay}
                          />
                        </div>
                      </Link>
                      <div className="movie-review-button-container">
                        <Button
                          onClick={() => navigate(`/reviews/${movie.imdbId}`)}
                        >
                          Reviews
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
