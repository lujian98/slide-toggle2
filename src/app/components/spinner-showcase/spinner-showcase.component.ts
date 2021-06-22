import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner-showcase',
  templateUrl: './spinner-showcase.component.html',
  styleUrls: ['./spinner-showcase.component.scss']
})
export class SpinnerShowcaseComponent {
  loadingButton = false;

  toggleLoadingButton() {
    this.loadingButton = true;

    setTimeout(() => (this.loadingButton = false), 3_000);
  }
}
