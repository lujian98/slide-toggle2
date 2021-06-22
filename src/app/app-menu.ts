import { SunMenuItem } from 'sunbird-seven-ui';

export const MENU_ITEMS: SunMenuItem[] = [
  {
    title: 'Dashboard',
    link: '/',
    home: true,
    routerOptions: { exact: true }
  },
  {
    title: 'Components',
    link: '/components'
  },
  {
    title: 'Data Centers',
    link: '/browse'
  },
  {
    title: 'Events',
    link: '/events',
    trigger: 'hover',
    children: [
      {
        title: 'Sub Link 1',
        link: '/sun-example1'
      },
      {
        title: 'Sub Link 2',
        link: '/sun-example2'
      },
      {
        separator: true
      },
      {
        title: 'Sub Link 2 Again',
        link: '/sun-example2'
      }
    ]
  },
  {
    title: 'NvD3',
    link: '/nvd3'
  },
  {
    title: 'Sun Base Grid Example',
    link: '/sun-base-grid-example'
  },
  {
    title: 'Material Date Range',
    link: '/simple-date'
  },
  {
    title: 'Settings',
    link: '/settings',
    icon: 'cog'
  }
];
