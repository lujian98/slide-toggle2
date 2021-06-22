import { Component } from '@angular/core';
import { SunDialogRef, SunMenuItem } from 'sunbird-seven-ui';

export interface AppColumn {
  field: string;
  header: string;
  hidden: boolean | string;
}

@Component({
  selector: 'app-custom-right-menu.component',
  templateUrl: './custom-right-menu.component.html'
})
export class CustomRightMenuComponent<T> {
  columns: AppColumn[];
  toolBarItems: SunMenuItem[] = [
    {
      type: 'button',
      title: 'Apply',
      action: 'Apply'
    },
    {
      type: 'button',
      title: 'Cancel',
      action: 'Cancel'
    }
  ];

  constructor(private dialogRef: SunDialogRef<T>) {}

  onColumnShowHide(event, column: AppColumn) {
    event.preventDefault();
    column.hidden = !column.hidden;
  }

  onToolBarItemClick(item: SunMenuItem) {
    if (item.action === 'Cancel') {
      this.dialogRef.close(null);
    } else if (item.action === 'Apply') {
      this.dialogRef.close(this.columns);
    }
  }
}
