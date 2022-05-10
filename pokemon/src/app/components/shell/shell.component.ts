import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell-component',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
})
export class ShellComponent implements OnInit {
  @Input() isLoading = false;
  @Input() isError = false;

  constructor() {}

  ngOnInit(): void {}
}
