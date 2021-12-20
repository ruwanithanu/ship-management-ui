import { render, screen } from '@/test-utils/with-theme';
import TableRow from '.';
import documents from '@/test-utils/mocks/documents.json';
import { FileTypes } from '@/types';

describe('TableRow', () => {
  const folder: any = documents.data.find(f => f.type === FileTypes.FOLDER);

  test('Shows data as a table row', () => {

    render(
      <table>
        <tbody>
          <TableRow data={folder} onFolderClick={jest.fn()} />
        </tbody>
      </table>
    );

    const icon = screen.getByRole('img', { hidden: true });
    expect(icon).toBeInTheDocument();

    const fileName = screen.getByText(folder.name);
    expect(fileName).toBeInTheDocument();
  });
});
