import { Component } from '@angular/core';
import {PathConstant} from "../../../../core/utils/path.constant";

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent {

    protected readonly PathConstant = PathConstant;
}
