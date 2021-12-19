import { render, screen } from '@/test-utils/with-reports';

import CommercialTab from './CommercialTab';
import { SharePointfiles } from '@/types';
import { windowResize } from '@angloeastern/react-components';
import { data } from '@/test-utils/mocks/reports-commercial.json';

describe('CommercialTab', () => {

  const parentFolders: SharePointfiles = data.filter(f => f.parentId === '');

  test('Show CommercialTab', async () => {
    windowResize(320, 568);
    render(<CommercialTab />);

    const list = await screen.findByRole('list');
    expect(list).toBeInTheDocument();

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(parentFolders.length);
  });
});
