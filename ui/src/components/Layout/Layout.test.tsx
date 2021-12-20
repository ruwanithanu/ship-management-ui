import { act, render, screen } from '../../test-utils/with-providers';
import { MemoryRouter } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Layout from '.';

describe('Layout', () => {

  test('render with sidebar icons and main content', async () => {
    await act( async () => {
      const history = createMemoryHistory();
      render(
        <MemoryRouter>
          <Layout>
            <h1>Hello</h1>
          </Layout>
        </MemoryRouter>
      );
    });

    const icons = screen.getAllByRole('img');
    expect(icons.length).toBeGreaterThan(0);

    const content = screen.getByRole('heading', {name: 'Hello'});
    expect(content).toBeInTheDocument();
  });
});
