import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import View from '@components/View';
import ClaimsTab from './ClaimsTab';
import CommercialTab from './CommercialTab';
import GalleryTab from './GalleryTab';
import OtherTab from './OtherTab';
import {
  useMediaQuery,
  useBreakPoint,
  useSidebar,
  Tabs,
  TabContent,
  DropTabs,
  Spinner
} from '@angloeastern/react-components';
import { useVessels } from '@context/Vessels';
import BlankView from '../BlankView';

const Presentor = () => {
  const { t, ready } = useTranslation();
  const isAboveTablet = useMediaQuery('(min-width: 575px)');
  const { isAboveBreakPoint } = useBreakPoint(575);
  const TabComponent = isAboveTablet || isAboveBreakPoint ? Tabs : DropTabs;
  const { state: { activeItem, menu }, setActiveItem, getMenuItem } = useSidebar();
  const { state: { vessel } } = useVessels();

  useEffect(() => {
    if (menu && (!activeItem || activeItem.id !== 'reports')) {
      const menuItem = getMenuItem('reports');
      setActiveItem(menuItem);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeItem, menu]);

  if (!ready) return <Spinner />;

  if (!vessel) {
    return <BlankView view={t('view.reports')} />
  }

  return <View>
    <TabComponent>
      <TabContent id="claims" label={t('tab.claims')}>
        <ClaimsTab />
      </TabContent>
      <TabContent id="commercial" label={t('tab.commercial')}>
        <CommercialTab />
      </TabContent>
      <TabContent id="gallery" label={t('tab.gallery')}>
        <GalleryTab />
      </TabContent>
      <TabContent id="other" label={t('tab.otherReports')}>
        <OtherTab />
      </TabContent>
    </TabComponent>
  </View>
};

export default Presentor;
