import { render, screen } from '@/test-utils/with-accounts';

import VesselsTab from './VesselsTab';
import { SharePointfiles } from '@/types';
import { windowResize } from '@angloeastern/react-components';
import { data } from '@/test-utils/mocks/accounts-vessels.json';

jest.mock('@angloeastern/react-components', () => ({
  ...jest.requireActual('@angloeastern/react-components'),
  useMediaquery: (query: string) => query !== ''
}));

describe('VesselsTab', () => {

  const parentFolders: SharePointfiles = data.filter(f => f.parentId === '');

  test('Show VesselsTab', async () => {
    windowResize(320, 568);
    render(<VesselsTab />);

    const list = await screen.findByRole('list');
    expect(list).toBeInTheDocument();

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(parentFolders.length);
  });
});
