import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  viewDate: Date;
  view = 'day';
  locale: string;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.viewDate = new Date();
    this.locale = this.translate.getBrowserCultureLang().split('-')[0];
  }
}
