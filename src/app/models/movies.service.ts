import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from "./movie";
import movies from "./movies.json";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
    movies:  Movie[] = movies;
    filter:  string = "";
  constructor() { }

    private approvalStageMessage = new BehaviorSubject(this.filter);
    currentApprovalStageMessage = this.approvalStageMessage.asObservable();

    private approvalMovies = new BehaviorSubject(this.movies);
    currentApprovalMovies = this.approvalMovies.asObservable();

    getMovies(): Movie[] {
      this.currentApprovalStageMessage.subscribe(event => this.filter = event);
      if (this.filter.length === 0)
        return this.movies;
      return this.movies.filter(movie => {return movie.primaryTitle.includes(this.filter)})
    }

  updateApprovalMessage(message: string) {
    this.approvalStageMessage.next(message)
    this.currentApprovalStageMessage.subscribe(event => this.filter = event);
    this.approvalMovies.next(this.movies.filter(movie => { return movie.primaryTitle.includes(this.filter) }))
  }
}
