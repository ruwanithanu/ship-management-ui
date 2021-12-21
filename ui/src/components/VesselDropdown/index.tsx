import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Dropdown, Spinner } from '@angloeastern/react-components';
import DisplayDecorator from './DisplayDecorator';
import { useVessels } from '@context/Vessels';
import VesselItem from './VesselItem';
import { Vessel } from '@/types';
import SC from './style';

const VesselDropdown = () => {
  const { t, ready } = useTranslation();
  const { state: { vessels, vessel }, fetchVessels, setVessel } = useVessels();

  const getOptions = () => {
    let options: any = {
      '0': <SC.NameContainer>{t('placeHolder.selectVessel')}</SC.NameContainer>
    };

    if (vessels) {
      for (let vessel of vessels) {
        const { imo } = vessel;
        options[imo] = <VesselItem
          key={imo}
          vessel={vessel}
        />;
      }
    }

    return options;
  };

  const handleClick = (vesselId: string) => {
    let vessel = null;
    if (vesselId !== '0') {
      vessel = vessels.find((v: Vessel) => v.imo === vesselId);
    }
    setVessel(vessel);
  };

  useEffect(() => {
    async function fetchData() {
      await fetchVessels();
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <SC.Container>
    {vessels && ready ? <Dropdown
      displayComponent={DisplayDecorator}
      itemComponent={SC.ListItem}
      selected={vessel ? vessel.imo: undefined}
      options={getOptions()}
      onClick={handleClick}
    /> :
    <Spinner width={32} height={32} color="#fff" />}
  </SC.Container>;
};

export default VesselDropdown;
