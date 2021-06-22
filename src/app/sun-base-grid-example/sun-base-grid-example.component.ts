import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from '@angular/material';
import { SunBaseGridComponent, SunField, SunSelectFieldType, SunMenuItem } from 'sunbird-seven-ui';
import { SunBaseGridDataSource, SunGroupHeader, SunCellRendererService, SunCellEditService } from 'sunbird-seven-ui';
import { SunLocaleService, SunDialogService } from 'sunbird-seven-ui';
import { SunBaseGridExampleDataService } from './sun-base-grid-example-data.service';
import { SunBaseGridExampleColumnFilterService } from './sun-base-grid-example-column-filter.service';
import { CustomRightMenuComponent, AppColumn } from './dialogs/custom-right-menu.component';
import { Car } from './sun-base-grid-example.datasource';

@Component({
  selector: 'app-sun-base-grid-example',
  templateUrl: './sun-base-grid-example.component.html',
  styleUrls: ['./sun-base-grid-example.component.scss']
})
export class SunBaseGridExampleComponent extends SunBaseGridComponent<Car> implements OnInit {
  dataSource: SunBaseGridDataSource<Car>;
  toolBarItems: SunMenuItem[];

  constructor(
    protected dataSourceService: SunBaseGridExampleDataService,
    columnFilterService: SunBaseGridExampleColumnFilterService,
    cellRendererService: SunCellRendererService,
    cellEditService: SunCellEditService,
    private translate: TranslateService,
    private localeService: SunLocaleService,
    private dateAdapter: DateAdapter<Date>,
    private dialogService: SunDialogService
  ) {
    super();
    this.columnFilterService = columnFilterService;
    this.cellRendererService = cellRendererService;
    this.cellEditService = cellEditService;
  }

  ngOnInit() {
    this.dataKeyId = 'index';
    this.multiSort = true;
    this.isGridFilterable = true;
    this.isGridEditable = true;
    this.multiRowSelection = true;
    const brandFieldType: SunSelectFieldType = {
      type: 'select',
      multiSelect: true,
      filterMultiSelect: true,
      options: [
        { label: '', value: '' },
        { label: 'Audi', value: 'Audi' },
        { label: 'BMW', value: 'BMW' },
        {
          label: 'Europe',
          value: 'Europe',
          children: [
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'Volvo', value: 'Volvo' }
          ]
        },
        { label: 'Fiat', value: 'Fiat' },
        {
          label: 'North American',
          value: 'North American',
          children: [
            { label: 'Chrysler', value: 'Chrysler' },
            { label: 'Ford', value: 'Ford' },
            { label: 'GM', value: 'GM' }
          ]
        },
        { label: 'Honda', value: 'Honda' },
        { label: 'Jaguar', value: 'Jaguar' },
        { label: 'VW', value: 'VW' }
      ]
    };

    const vehicleGroupHeader: SunGroupHeader = {
      name: 'vehiclegroup',
      title: 'Vehicle Information'
    };

    const valueGroupHeader: SunGroupHeader = {
      name: 'valuegroup',
      title: 'Value Information',
      align: 'center'
    };

    const minValue = 1950;
    this.columnConfigs = [
      {
        field: 'index',
        header: '#row',
        fieldType: 'number',
        sortField: true,
        filterField: true,
        hidden: 'never',
        renderer: this.rendererRouter.bind(this),
        fixedWidth: 'auto'
      },
      {
        field: 'vin',
        header: 'Vin',
        fieldType: 'text',
        sortField: true,
        filterField: true,
        fixedWidth: 'auto',
        groupHeader: valueGroupHeader
      },
      {
        field: 'rvalue',
        header: 'Value',
        fieldType: 'number',
        sortField: true,
        filterField: true,
        editField: true,
        align: 'center',
        fixedWidth: 'auto',
        groupHeader: valueGroupHeader
      },
      {
        field: 'year',
        header: 'Year',
        fieldType: 'number',
        sortField: true,
        filterField: true,
        editField: true,
        groupField: true,
        hidden: false,
        fixedWidth: 'auto',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Required for recurring schedules.'
          },
          {
            name: 'min',
            validator: Validators.min(minValue),
            message: `The min value is ${minValue}.`
          }
        ]
      },
      {
        field: 'brand',
        header: 'Brand',
        fieldType: brandFieldType,
        sortField: true,
        filterField: true,
        groupField: 'year',
        editField: false,
        fixedWidth: 'auto',
        groupHeader: vehicleGroupHeader
      },
      {
        field: 'createdate',
        header: 'Create Date',
        fieldType: 'date',
        sortField: true,
        filterField: true,
        headerClass: 'sun-menu warning critical-after',
        align: 'center',
        fixedWidth: 'auto',
        groupHeader: vehicleGroupHeader
      },
      {
        field: 'color',
        header: 'Color',
        fieldType: 'text',
        sortField: true,
        filterField: true,
        editField: true,
        fixedWidth: 'auto'
      }
    ];

    this.toolBarItems = [
      { type: 'button', title: 'Add', action: 'Add' },
      { type: 'button', title: 'Activate', action: 'Activate', disabled: true },
      { type: 'button', title: 'Deactivate', action: 'Deactivate', disabled: true },
      { type: 'button', title: 'Edit', action: 'Edit', disabled: true },
      { type: 'button', title: 'Delete', action: 'Delete', disabled: true },
      {
        type: 'menu',
        title: 'Language',
        disabled: false,
        children: [
          {
            title: 'English',
            action: 'Language',
            value: 'en-US'
          },
          {
            title: 'Japanese',
            action: 'Language',
            value: 'ja'
          },
          {
            title: 'German',
            action: 'Language',
            value: 'de'
          },
          {
            title: 'Chinese',
            action: 'Language',
            value: 'zh-CN'
          },
          {
            title: 'French',
            action: 'Language',
            value: 'fr'
          }
        ]
      },
      { type: 'button', title: 'Export File', action: 'ExportData', class: 'sun-menu export' }
    ];
    super.ngOnInit();
  }

  setRightMenu() {
    const rightMenu = [
      { type: 'button', title: 'Clear', action: 'Clear', class: 'sun-menu clear' },
      { type: 'button', title: 'Refresh', action: 'Refresh', class: 'sun-menu refresh' },
      { type: 'button', title: 'Reset To Default', action: 'Reset', class: 'sun-menu reset' },
      { type: 'button', title: 'Save States', action: 'SaveStates', class: 'sun-menu save' },
      { type: 'button', title: 'Load States', action: 'LoadStates', class: 'sun-menu load' },
      { type: 'button', title: 'Export File', action: 'ExportData', class: 'sun-menu export' }
    ];
    this.gridRightMenu = {
      type: 'menu',
      class: 'sun-menu three-dots',
      tooltip: 'Grid Configure Options',
      children: rightMenu
    };
    super.setRightMenu();
  }

  sunGridRightMenuClick(item: SunMenuItem) {
    switch (item.action) {
      case 'Refresh':
        this.gridRefresh();
        break;
      case 'Clear':
        this.gridClearAllFilters();
        break;
      case 'Reset':
        this.gridResetToDefault();
        break;
      case 'SaveStates':
        this.gridSaveStates();
        break;
      case 'LoadStates':
        this.gridLoadStates();
        break;
      case 'ExportData':
        this.gridExportData();
        break;
    }
  }

  rendererRouter<T>(value: T, field: string, column: SunField, record: T, rowIndex: number, records: T[]): string {
    return `<a routerLink="/outlets/${value}">${value}</a>`;
  }

  rendererLink<T>(value: T, field: string, column: SunField, record: T, rowIndex: number, records: T[]): string {
    return '<a href="/test/' + field + '=' + record['vin'] + '">' + value + '</a>';
  }

  onToolBarItemClick(item: SunMenuItem) {
    if (item.action === 'Language') {
      this.registerLocale(item.value);
    } else if (item.action === 'ExportData') {
      this.gridExportData();
    }
  }

  private registerLocale(locale: string) {
    if (!locale) {
      return;
    }
    const localeId = locale.substring(0, 2);
    this.translate.use(localeId);
    this.dateAdapter.setLocale(locale);
    this.localeService.locale = locale;
  }

  sunCheckGridStates() {
    super.sunCheckGridStates();
    if (this.selection && this.selection.selected) {
      const length = this.selection.selected.length;
      this.toolBarItems[1].disabled = length > 0 ? false : true;
      this.toolBarItems[2].disabled = length > 0 ? false : true;
      this.toolBarItems[3].disabled = length === 1 ? false : true;
      this.toolBarItems[4].disabled = length === 1 ? false : true;
    }
  }

  onCustomRightMenuClick() {
    const cols: AppColumn[] = this.columns.map(col => {
      return {
        field: col.field,
        header: col.header,
        hidden: col.hidden
      };
    });
    const dialogconfig = {
      context: { columns: cols },
      closeOnBackdropClick: false,
      backdropClass: 'cdk-overlay-dark-backdrop'
    };
    this.dialogService.open(CustomRightMenuComponent, dialogconfig).onClose.subscribe((columns: AppColumn[]) => {
      if (columns) {
        this.columns = this.columns.map((col, index) => {
          col.hidden = columns[index].hidden;
          return col;
        });
        this.gridStates.setStates();
      }
    });
  }
}
