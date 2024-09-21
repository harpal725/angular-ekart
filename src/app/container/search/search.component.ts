import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchText: string = ""

  @Output()
  searchEventChange: EventEmitter<string> = new EventEmitter<string>();

  // onSearchEventChange(){
  //   this.searchEventChange.emit(this.searchText)
  // }

  @ViewChild('inputSearch') searchInputEl : ElementRef;


  updateSearchText(){
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchEventChange.emit(this.searchText);
  }
}