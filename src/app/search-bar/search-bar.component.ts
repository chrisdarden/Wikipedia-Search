import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  term = '';
  message = 'Search string cannot be empty. Please enter a search string.';

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(event: any) {
    if (this.term === ''|| this.term === null || this.term === undefined) {
      alert(this.message);
      return;
    }
    event.preventDefault();
    this.submitted.emit(this.term);
  }

}
