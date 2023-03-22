package dev.fabio.movies.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.fabio.movies.entity.Movie;
import dev.fabio.movies.repository.MovieRepository;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> allMovies(){
        return movieRepository.findAll();
    }

    public Optional<Movie> Movie(String imbId){
        return movieRepository.findMovieByImdbId(imbId);
    }

}
