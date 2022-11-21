import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  selector: 'budget-card',
  templateUrl: './budget-card.component.html',
  standalone: true,
  imports: [MaterialModule, IonicModule],
  styleUrls: ['./budget-card.component.scss'],
})
export class BudgetCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
