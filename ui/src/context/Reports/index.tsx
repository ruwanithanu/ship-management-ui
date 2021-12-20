import { ReactNode } from 'react';
import { Provider as ClaimsProvider, useClaims } from './Claims';
import { Provider as CommercialProvider, useCommercial } from './Commercial';
import { Provider as GalleryProvider, useGallery } from './Gallery';
import { Provider as OtherProvider, useOther } from './Other';

interface Props {
  children: ReactNode;
};

const Provider = ({ children }: Props) => {
  return (
    <ClaimsProvider>
      <CommercialProvider>
        <GalleryProvider>
          <OtherProvider>
            {children}
          </OtherProvider>
        </GalleryProvider>
      </CommercialProvider>
    </ClaimsProvider>
  );
};

export {
  Provider,
  useClaims,
  useCommercial,
  useGallery,
  useOther
};
