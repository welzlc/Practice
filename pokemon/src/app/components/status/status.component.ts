import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-component',
  templateUrl: './status.component.html',
})
export class StatusComponent implements OnInit {
  @Input() isLoading = false;
  @Input() isError = false;

  constructor() {}

  ngOnInit(): void {}
}
