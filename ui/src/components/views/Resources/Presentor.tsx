import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import View from '@components/View';
import Leadership from './LeadershipTab';
import LookoutTab from './LookoutTab';
import PSCTab from './PSCTab';
import TechinicalPapersTab from './TechinicalPapersTab';
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
    if (menu && (!activeItem || activeItem.id !== 'resources')) {
      const menuItem = getMenuItem('resources');
      setActiveItem(menuItem);
    }
  }, [activeItem, menu]);

  if (!ready) return <Spinner />;

  if (!vessel) {
    return <BlankView view={t('view.resources')} />
  }

  return <View>
    <TabComponent>
      <TabContent id="leadership" label={t('tab.resources.leadership')}>
        <Leadership />
      </TabContent>
      <TabContent id="resources-lookout" label={t('tab.resources.lookout')}>
        <LookoutTab />
      </TabContent>
      <TabContent id="resources-psc" label={t('tab.resources.psc')}>
        <PSCTab />
      </TabContent>
      <TabContent id="resources-techpapers" label={t('tab.resources.techpapers')}>
        <TechinicalPapersTab />
      </TabContent>
    </TabComponent>
  </View>
};

export default Presentor;
