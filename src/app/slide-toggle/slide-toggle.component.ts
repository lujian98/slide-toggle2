import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

@Component({
  selector: 'app-slide-toggle',
  host: {
    'class': 'sun-slide-toggle',
    '[class.app-checked]': 'checked',
  },
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent implements OnInit {
  private _checked: boolean = false;

  @Input()
  get checked(): boolean { return this._checked; }
  set checked(value) {
    console.log( 'input checked=', value)
    this._checked = coerceBooleanProperty(value);
    // this._changeDetectorRef.markForCheck();
  }

  @ViewChild('input', {static: false}) _inputElement: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit() {
  }

  _onChangeEvent(event: Event) {
    // We always have to stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    // emit its event object to the component's `change` output.
    event.stopPropagation();

    // if (!this._dragging) {
    //  this.toggleChange.emit();
   // }
    // Releasing the pointer over the `<label>` element while dragging triggers another
    // click event on the `<label>` element. This means that the checked state of the underlying
    // input changed unintentionally and needs to be changed back. Or when the slide toggle's config
    // disabled toggle change event by setting `disableToggleValue: true`, the slide toggle's value
    // does not change, and the checked state of the underlying input needs to be changed back.
   // if (this._dragging || this.defaults.disableToggleValue) {
    //  this._inputElement.nativeElement.checked = this.checked;
    //  return;
    // }

    // Sync the value from the underlying input element with the component instance.
    this.checked = this._inputElement.nativeElement.checked;

    // Emit our custom change event only if the underlying input emitted one. This ensures that
    // there is no change event, when the checked state changes programmatically.
    // this._emitChangeEvent();
  }

  /** Method being called whenever the slide-toggle has been clicked. */
  _onInputClick(event: Event) {
    // We have to stop propagation for click events on the visual hidden input element.
    // By default, when a user clicks on a label element, a generated click event will be
    // dispatched on the associated input element. Since we are using a label element as our
    // root container, the click event on the `slide-toggle` will be executed twice.
    // The real click event will bubble up, and the generated click event also tries to bubble up.
    // This will lead to multiple click events.
    // Preventing bubbling for the second event will solve that issue.
    event.stopPropagation();
  }


}
