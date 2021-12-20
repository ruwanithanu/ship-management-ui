import { render } from '@testing-library/react';

import { Providers as CommonProviders } from './with-providers';
import { Provider } from '../context/Documents';

interface Props {
  children: any;
};

const Providers = ({ children }: Props) => {

  return <CommonProviders>
    <Provider>{children}</Provider>
  </CommonProviders>;
}

const renderWithContext = (ui: any, options?: any) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { renderWithContext as render };
