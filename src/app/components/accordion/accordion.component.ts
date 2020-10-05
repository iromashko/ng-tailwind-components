import { Component, Input, OnInit } from '@angular/core';
import { AccordionItemInterface } from './accordion-item-interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() public items: AccordionItemInterface[] = [];

  public toggle(item: AccordionItemInterface): void {
    item.isExpanded = !item.isExpanded;
  }

  constructor() {}

  ngOnInit(): void {}
}
