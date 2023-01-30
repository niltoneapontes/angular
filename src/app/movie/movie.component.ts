import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  _id = ""
  name = ""
  cover_img = ""
  movie = {}

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.params["id"];
    this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=707f62b76b88036d3f566211d923f87a`).subscribe((result: any) => {
      this.name = result.original_title;
      this.cover_img = result.poster_path;
      this._id = result.id;
      this.movie = {
        _id: this._id,
        title: this.name,
        cover_img: this.cover_img
      }
    })
  }
}
