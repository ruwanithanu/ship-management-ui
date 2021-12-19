import { render } from '@testing-library/react';

import { Provider as VesselProvider } from '../context/Vessels';
import { Provider as SearchProvider } from '../context/Search';

import { SidebarProvider, TableProvider, ThemeProvider, PdfProvider } from '@angloeastern/react-components'

interface Props {
  children: any;
};

export const Providers = ({ children }: Props) => {

  return <ThemeProvider>
    <SidebarProvider>
      <VesselProvider>
        <TableProvider>
          <PdfProvider>
            <SearchProvider>
              {children}
            </SearchProvider>
          </PdfProvider>
        </TableProvider>
      </VesselProvider>
    </SidebarProvider>
  </ThemeProvider>;
}

const renderWithContext = (ui: any, options?: any) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { renderWithContext as render };
