import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, TopBarComponent, RouterModule]

})


export class AppComponent implements OnInit, OnChanges, AfterViewInit {
  title = 'AngularProject';
  // הפוקנציה הראשונה שעולה מיד בהעלת הקומפוננטה לאויר
  ngOnInit(): void {
  }

  // אחרי שהשתנה אלמנטים (לךדוגמא ששלחנו אינפוט לקומפוננטת ילד והיא השתנתה שם)
  ngOnChanges(changes: SimpleChanges): void {

  }

  // אחרי שכל הדום עלה כבר
  ngAfterViewInit(): void {
  }
}
