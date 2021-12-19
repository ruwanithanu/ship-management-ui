import { render, screen } from '../../test-utils/with-providers';
import SharePointDocList from '.';
import { data } from '../../test-utils/mocks/documents.json';
import { SharePointfiles } from '@/types';
import { windowResize } from '@angloeastern/react-components';

describe('SharePointDocList', () => {

  const parentFolders: SharePointfiles = data.filter(f => f.parentId === '');

  test('Displays items in table rows', () => {
    windowResize(1920, 1080);
    render(<SharePointDocList
      data={parentFolders}
      setParentId={jest.fn()}
      page={1}
      navigate={jest.fn()}
    />);

    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();

    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(parentFolders.length + 1);
  });

  test('Displays items in list', () => {
    windowResize(320, 568);
    render(<SharePointDocList
      data={parentFolders}
      setParentId={jest.fn()}
      page={1}
      navigate={jest.fn()}
    />);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(parentFolders.length);
  });
});
