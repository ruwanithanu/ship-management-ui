import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import View from '@components/View';
import VesselsTab from './VesselsTab';
import FleetTab from './FleetTab';
import {
  useSidebar,
  useMediaQuery,
  useBreakPoint,
  Tabs,
  TabContent,
  DropTabs,
  Spinner
} from '@angloeastern/react-components';
import { useVessels } from '@context/Vessels';
import BlankView from '../BlankView';

const Presentor = () => {
  const { t, ready } = useTranslation();
  const { state: { vessel } } = useVessels();
  const { state: { activeItem, menu }, setActiveItem, getMenuItem } = useSidebar();
  const isAboveTablet = useMediaQuery('(min-width: 575px)');
  const { isAboveBreakPoint } = useBreakPoint(575);
  const TabComponent = isAboveTablet || isAboveBreakPoint ? Tabs : DropTabs;

  useEffect(() => {
    if (menu && (!activeItem || activeItem.id !== 'accounts')) {
      const menuItem = getMenuItem('accounts');
      setActiveItem(menuItem);
    }
  }, [activeItem, menu]);

  if (!ready) return <Spinner />;

  if (!vessel) {
    return <BlankView view={t('view.accounts')} />
  }

  return <View>
    <TabComponent>
      <TabContent id="reports-vessels" label={t('tab.otherReports.vessels')}>
        <VesselsTab />
      </TabContent>
      <TabContent id="reports-fleet" label={t('tab.otherReports.fleet')}>
        <FleetTab />
      </TabContent>
    </TabComponent>
  </View>
};

export default Presentor;
