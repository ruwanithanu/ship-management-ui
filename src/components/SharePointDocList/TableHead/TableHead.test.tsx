import { render, screen } from '@/test-utils/with-providers';
import TableHead from '.';

describe('TableHead', () => {

  test('Shows table header with expected columns', () => {

    render(
      <table>
        <TableHead />
      </table>
    );

    const nameHead = screen.getByRole('columnheader', { name: 'thead.name', hidden: true });
    expect(nameHead).toBeInTheDocument();

    const modifiedDateHead = screen.getByRole('columnheader', { name: 'thead.modifiedOnUtc', hidden: true });
    expect(modifiedDateHead).toBeInTheDocument();

    const modifiedByHead = screen.getByRole('columnheader', { name: 'thead.modifiedBy', hidden: true });
    expect(modifiedByHead).toBeInTheDocument();

    const typeHead = screen.getByRole('columnheader', { name: 'thead.type', hidden: true });
    expect(typeHead).toBeInTheDocument();

    const actionsByHead = screen.getByRole('columnheader', { name: 'thead.actions', hidden: true });
    expect(actionsByHead).toBeInTheDocument();
  });
});
