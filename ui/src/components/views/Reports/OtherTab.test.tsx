import { render, screen } from '@/test-utils/with-reports';

import OtherTab from './OtherTab';
import { SharePointfiles } from '../../../types';
import { windowResize } from '@angloeastern/react-components';
import { data } from '@/test-utils/mocks/reports-other-reports.json';

describe('OtherTab', () => {

  const parentFolders: SharePointfiles = data.filter(f => f.parentId === '');

  test('Show OtherTab', async () => {
    windowResize(320, 568);
    render(<OtherTab />);

    const list = await screen.findByRole('list');
    expect(list).toBeInTheDocument();

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(parentFolders.length);
  });
});
