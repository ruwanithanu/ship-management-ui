import { render, screen } from '@/test-utils/with-reports';

import ClaimsTab from './ClaimsTab';
import { SharePointfiles } from '@/types';
import { windowResize } from '@angloeastern/react-components';
import { data } from '@/test-utils/mocks/reports-claims.json';

describe('ClaimsTab', () => {

  const parentFolders: SharePointfiles = data.filter(f => f.parentId === '');

  test('Show ClaimsTab', async () => {
    windowResize(320, 568);
    render(<ClaimsTab />);

    const list = await screen.findByRole('list');
    expect(list).toBeInTheDocument();

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(parentFolders.length);
  });
});
