import { Component, OnInit } from '@angular/core';
import { AccordionItemInterface } from '../accordion/accordion-item-interface';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss'],
})
export class ComponentDocumentationComponent implements OnInit {
  public accordionItems: AccordionItemInterface[] = [
    {
      title: 'Dolor sit amet consectetur',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ullam. A cupiditate sint dolor odit est, voluptate iste voluptatibus aperiam ut minus. Dolorum officia inventore harum laudantium, amet labore! Tempore.',
      isExpanded: false,
    },
    {
      title: 'Voluptatibus, ullam. A cupiditate sint dolor',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ullam. A cupiditate sint dolor odit est, voluptate iste voluptatibus aperiam ut minus. Dolorum officia inventore harum laudantium, amet labore! Tempore.',
      isExpanded: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
