//! NOT USED IN APP

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'new-budget-modal',
  templateUrl: './new-budget-modal.component.html',
  styleUrls: ['./new-budget-modal.component.scss'],
})
export class NewBudgetModalComponent implements OnInit {
  @Output() onCloseModal = new EventEmitter();

  closeModalWasClicked(): void {
    this.onCloseModal.emit();
  }
  constructor() {}

  ngOnInit() {}
}
