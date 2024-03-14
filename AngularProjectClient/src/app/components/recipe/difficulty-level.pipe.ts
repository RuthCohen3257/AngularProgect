// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'difficultyLevel',
//   standalone: true
// })
// export class DifficultyLevelPipe implements PipeTransform {

//   transform(difficultyLevel: number): string {

//     let result='';
//     for (let i = 0; i < 5; i++) {
//       if (i < difficultyLevel) {
//         result += '<mat-icon>star_rate</mat-icon>';
//       } else {
//         result += ''; 
//       }
//     }
//     return result; 
//   }

// }
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'difficultyLevel',
  standalone: true
})
export class DifficultyLevelPipe implements PipeTransform {

  transform(difficultyLevel: number): string[] {
    let result: string[] = [];

    for (let i = 0; i < 5; i++) {
      if (i < difficultyLevel) {
        result.push('star_rate');
      } else {
        result.push('star_border');
      }
    }

    return result;
  }

}


