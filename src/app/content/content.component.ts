import { Component, OnInit } from '@angular/core';
import { Movie } from "../models/movie";
import { MoviesService } from '../models/movies.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  movies: Movie[] = [];
  readonly isMobile: boolean = false;

  constructor(private movieService: MoviesService) { 
      const mobileWidthThreshold = 720;
      if (window.innerWidth <= mobileWidthThreshold) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
    }}

  ngOnInit(): void {
    this.movieService.currentApprovalMovies.subscribe((movies: Movie[]) => this.movies = movies);
  }

}
