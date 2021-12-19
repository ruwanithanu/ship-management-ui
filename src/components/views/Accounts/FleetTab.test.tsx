import { render, screen } from '@/test-utils/with-accounts';

import FleetTab from './FleetTab';
import { SharePointfiles } from '@/types';
import { windowResize } from '@angloeastern/react-components';
import { data } from '@/test-utils/mocks/accounts-fleet.json';

describe('FleetTab', () => {

  const parentFolders: SharePointfiles = data.filter(f => f.parentId === '');

  test('Show FleetTab', async () => {
    windowResize(320, 568);
    render(<FleetTab />);

    const list = await screen.findByRole('list');
    expect(list).toBeInTheDocument();

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(parentFolders.length);
  });
});
