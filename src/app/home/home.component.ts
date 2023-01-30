import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popularMovies = [] as any[];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies() {
    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=707f62b76b88036d3f566211d923f87a').subscribe((response: any) => {
      this.popularMovies = response.results;
    })
  }

  goToMovie(id: string) {
    this.router.navigate(["movie", id])
  }
}
