import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'genreArray'
})
export class GenreArrayPipe implements PipeTransform {

  transform(genres: any[]): string {
    return _.join(genres, ', ');
  }

}
