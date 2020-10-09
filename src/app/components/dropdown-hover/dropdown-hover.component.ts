import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-hover',
  templateUrl: './dropdown-hover.component.html',
  styleUrls: ['./dropdown-hover.component.scss'],
})
export class DropdownHoverComponent implements OnInit {
  public isOpen = false;

  constructor() {}

  ngOnInit(): void {}
}
