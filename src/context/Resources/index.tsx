import { ReactNode } from 'react';
import { Provider as LeadershipProvider, useLeadership } from './Leadership';
import { Provider as LookoutProvider, useLookout } from './Lookout';
import { Provider as PSCProvider, usePSC } from './PSC';
import { Provider as TechPapersProvider, useTechnicalPapers } from './TechnicalPapers';

interface Props {
  children: ReactNode;
};

const Provider = ({ children }: Props) => {
  return <LeadershipProvider>
    <LookoutProvider>
      <PSCProvider>
        <TechPapersProvider>
          {children}
        </TechPapersProvider>
      </PSCProvider>
    </LookoutProvider>
  </LeadershipProvider>;
};

export {
  Provider,
  useLeadership,
  useLookout,
  usePSC,
  useTechnicalPapers
};
