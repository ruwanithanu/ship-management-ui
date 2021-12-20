import { render, screen } from '@/test-utils/with-theme';
import DocIcon from '.';
import documents from '@/test-utils/mocks/documents.json';
import { FileTypes } from '@/types';

describe('DocIcon', () => {
  const folder: any = documents.data.find(f => f.type === FileTypes.FOLDER);

  test('Shows icon', () => {

    render(<DocIcon data={folder}/>);

    const icon = screen.getByRole('img', { hidden: true });
    expect(icon).toBeInTheDocument();
  });
});
