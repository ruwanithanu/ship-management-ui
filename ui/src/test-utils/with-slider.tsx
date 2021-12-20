import { render } from '@testing-library/react';

import { ThemeProvider } from '@angloeastern/react-components';
import { Provider } from '../context/Slider';

interface Props {
  children: any;
};

const Providers = ({ children }: Props) => {

  return <ThemeProvider>
    <Provider>{children}</Provider>
  </ThemeProvider>;
}

const renderWithContext = (ui: any, options?: any) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { renderWithContext as render };
