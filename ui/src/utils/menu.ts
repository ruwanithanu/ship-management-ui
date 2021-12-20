import {
  faUsers,
  faDollarSign,
  faGauge,
  faCompassDrafting,
  faBullhorn,
  faChartPie,
  faFileCertificate,
  faCompass,
  faFileLines
} from '@fortawesome/pro-light-svg-icons';
import { MenuItemArray } from '@angloeastern/react-components';
import { TFunction } from 'react-i18next';

const menu: MenuItemArray = [{
  id: 'location',
  name: 'menu.location',
  icon: faCompass,
  isPage: false
}, {
  id: 'crew',
  name: 'menu.crew',
  icon: faUsers,
  isPage: false,
  submenu: [{
    id: 'crew.overview',
    parentId: 'crew',
    name: 'menu.crew.overview',
    isPage: false
  }, {
    id: 'crew.onboard',
    parentId: 'crew',
    name: 'menu.crew.onboard',
    isPage: false
  }, {
    id: 'crew.list',
    parentId: 'crew',
    name: 'menu.crew.list',
    isPage: false
  }]
}, {
  id: 'accounts',
  name: 'menu.accounts',
  icon: faDollarSign,
  isPage: true,
}, {
  id: 'kpi',
  name: 'menu.kpis',
  icon: faGauge,
  isPage: false
}, {
  id: 'certificates',
  name: 'menu.certificates',
  icon: faFileCertificate,
  isPage: false
}, {
  id: 'reports',
  name: 'menu.reports',
  icon: faChartPie,
  isPage: true
}, {
  id: 'documents',
  name: 'menu.documents',
  icon: faFileLines,
  isPage: true
}, {
  id: 'drawings',
  name: 'menu.drawings',
  icon: faCompassDrafting,
  isPage: true
}, {
  id: 'resources',
  name: 'menu.resources',
  icon: faBullhorn,
  isPage: true
}];

export const getMenu = (t: TFunction): MenuItemArray => {
  const translateNames = (items: Array<any>): Array<any> => {
    const itemsCopy = [...items];
    return itemsCopy.map((item: any) => {
      item.name = item.name.substr(0, 5) === 'menu.' ? t(item.name) : item.name;
      if (item.submenu) {
        item.submenu = translateNames(item.submenu);
      }
      return item;
    });
  };

  return translateNames(menu);
}

export default menu;
