import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit, OnDestroy {
  companyName = 'Games Depot';
  foundYear = '2019';

  manager: { name: string; email: string } | null = {
    name: 'Ivan Vankov',
    email: 'vanko@gmail.com',
  };

  ngOnInit() {
    console.log('CREATED');
  }
  ngOnDestroy() {
    console.log('DELETED');
  }

}
