import { render } from '@testing-library/react';

import { Providers as CommonProviders } from './with-providers';
import { Provider } from '../context/Drawings';

interface Props {
  children: any;
};

const Providers = ({ children }: Props) => {

  return <Provider>
    <CommonProviders>
      {children}
    </CommonProviders>
  </Provider>;
}

const renderWithContext = (ui: any, options?: any) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { renderWithContext as render };
