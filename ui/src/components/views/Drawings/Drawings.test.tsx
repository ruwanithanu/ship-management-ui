import { render, screen } from '@/test-utils/with-drawings';
import { MemoryRouter } from 'react-router-dom';

import Drawings from '.';
import { SharePointfiles } from '@/types';
import { windowResize } from '@angloeastern/react-components';
import { data } from '@/test-utils/mocks/drawings.json';

describe('Drawings', () => {

  const parentFolders: SharePointfiles = data.filter(f => f.parentId === '');

  test('Show Drawings', async () => {
    windowResize(320, 568);
    render(
      <MemoryRouter>
        <Drawings />
      </MemoryRouter>
    );

    const list = await screen.findByRole('list');
    expect(list).toBeInTheDocument();

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(parentFolders.length);
  });
});
