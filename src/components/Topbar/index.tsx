import { useTranslation } from 'react-i18next';

import { useSidebar } from '@angloeastern/react-components';
import VesselDropdown from '@components/VesselDropdown';
import SC from './style';

const Topbar = () => {
  const { state: { activeItem }, openSidebar } = useSidebar();
  const { t, ready } = useTranslation();

  return <SC.Container>
    <SC.TopSide>
      <SC.Bars onClick={openSidebar} aria-label="hamburger">
        <SC.Hamburger />
      </SC.Bars>
      {activeItem && ready && <SC.Title>{t(`view.${activeItem.id}`)}</SC.Title>}
      <SC.AvatarBox>
        <SC.Avatar src="/images/baby-yoda.jpg" alt="avatar"/>
      </SC.AvatarBox>
    </SC.TopSide>
    <SC.BottomSide>
      <SC.ControlArea>
        <VesselDropdown />
        <SC.FilterBox aria-label="filter">
          <SC.Filter />
        </SC.FilterBox>
      </SC.ControlArea>
    </SC.BottomSide>
  </SC.Container>;
}

export default Topbar;
