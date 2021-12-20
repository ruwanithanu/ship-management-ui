import { ReactNode } from 'react';
import { Provider as VesselProvider, useVessel } from './Vessel';
import { Provider as FleetProvider, useFleet } from './Fleet';

interface Props {
  children: ReactNode;
};

const Provider = ({ children }: Props) => {
  return (
    <VesselProvider>
      <FleetProvider>
        {children}
      </FleetProvider>
    </VesselProvider>
  );
};

export {
  Provider,
  useVessel,
  useFleet
};
