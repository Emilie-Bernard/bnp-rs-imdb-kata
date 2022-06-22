import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../models/movies.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  english: boolean = true;
  searchTitle: string = "";
  readonly isMobile: boolean = false;
  searchActiveMobile: boolean = false;

  constructor(private movieService: MoviesService) { 
      const mobileWidthThreshold = 720;
      if (window.innerWidth <= mobileWidthThreshold) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }}

  ngOnInit(): void {
    this.movieService.currentApprovalStageMessage.subscribe((msg: string) => this.searchTitle = msg);
  }

  onActivate() {
    this.searchActiveMobile = !this.searchActiveMobile;
  }

  modelChangeFn(value:string) {
    this.searchTitle = value;
    this.movieService.updateApprovalMessage(this.searchTitle)
  }
}
