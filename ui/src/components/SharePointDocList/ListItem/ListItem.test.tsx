import { render, screen } from '@/test-utils/with-theme';
import ListItem from '.';
import documents from '@/test-utils/mocks/documents.json';
import { FileTypes } from '@/types';

describe('ListItem', () => {
  const folder: any = documents.data.find(f => f.type === FileTypes.FOLDER);

  test('Shows data as a list item', () => {

    render(<ListItem data={folder} onFolderClick={jest.fn()} />);

    const icon = screen.getByRole('img', { hidden: true });
    expect(icon).toBeInTheDocument();

    const fileName = screen.getByText(folder.name);
    expect(fileName).toBeInTheDocument();
  });
});
