import { render, screen } from '@/test-utils/with-reports';

import GalleryTab from './GalleryTab';
import { SharePointfiles } from '@/types';
import { windowResize } from '@angloeastern/react-components';
import { data } from '@/test-utils/mocks/reports-gallery.json';

describe('GalleryTab', () => {

  const parentFolders: SharePointfiles = data.filter(f => f.parentId === '');

  test('Show GalleryTab', async () => {
    windowResize(320, 568);
    render(<GalleryTab />);

    const list = await screen.findByRole('list');
    expect(list).toBeInTheDocument();

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(parentFolders.length);
  });
});
