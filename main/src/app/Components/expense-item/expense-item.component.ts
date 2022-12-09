import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-expense-item',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.scss'],
})
export class ExpenseItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
