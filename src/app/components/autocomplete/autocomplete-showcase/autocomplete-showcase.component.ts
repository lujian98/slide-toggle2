import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';
import { SunAutocompleteComponent } from 'sunbird-seven-ui';
import { STATES } from './states';

@Component({
  selector: 'app-autocomplete-showcase',
  templateUrl: './autocomplete-showcase.component.html',
  styleUrls: ['./autocomplete-showcase.component.scss']
})
export class AutocompleteShowcaseComponent implements OnInit, OnDestroy {
  private alive = true;
  states = STATES;

  control = new FormControl();
  control2 = new FormControl();
  control3 = new FormControl();
  isOverlayOpen: boolean;

  get filterValue(): string {
    return this.autocomplete && this.autocomplete.selection ? null : this.control.value;
  }

  @ViewChild('autocomplete', { static: true }) autocomplete: SunAutocompleteComponent;

  ngOnInit() {
    this.control.valueChanges.pipe(takeWhile(() => this.alive)).subscribe(value => {
      if (this.autocomplete.selection && value !== this.displayFn(this.autocomplete.selection.value)) {
        this.autocomplete.selection = null;
      }
    });
  }

  displayFn(option: any): string {
    return option && option.state ? option.state : '';
  }

  clearSelected(event: MouseEvent) {
    this.control.setValue(null);
    this.autocomplete.selection = null;
    event.stopPropagation();
  }

  optionSelected(option) {
    console.log(' selected option =', option);
  }

  isOverlayShow(event: boolean) {
    this.isOverlayOpen = event;
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
