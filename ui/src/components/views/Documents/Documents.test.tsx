import { render, screen } from '@/test-utils/with-documents';
import { MemoryRouter } from 'react-router-dom';

import Documents from '.';
import { SharePointfiles } from '@/types';
import { windowResize } from '@angloeastern/react-components';
import { data } from '@/test-utils/mocks/documents.json';

describe('Documents', () => {

  const parentFolders: SharePointfiles = data.filter(f => f.parentId === '');

  test('Show Documents', async () => {
    windowResize(320, 568);
    render(
      <MemoryRouter>
        <Documents />
      </MemoryRouter>
    );

    const list = await screen.findByRole('list');
    expect(list).toBeInTheDocument();

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(parentFolders.length);
  });
});
