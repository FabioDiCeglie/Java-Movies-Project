package dev.fabio.movies.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.fabio.movies.entity.Movie;
import dev.fabio.movies.services.MovieService;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/movies")
public class MovieController {
    @Autowired
    private MovieService movieService;

    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies(){
        return new ResponseEntity<List<Movie>>(movieService.allMovies(), HttpStatusCode.valueOf(200));
    }

    @GetMapping("/{imbId}")
     public ResponseEntity<Optional<Movie>> getMovie(@PathVariable String imbId){
        return new ResponseEntity<Optional<Movie>>(movieService.Movie(imbId), HttpStatusCode.valueOf(200));
    }

}
