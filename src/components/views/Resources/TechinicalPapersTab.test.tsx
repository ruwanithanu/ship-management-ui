import { render, screen } from '@/test-utils/with-resources';

import TechinicalPapersTab from './TechinicalPapersTab';
import files from '@/test-utils/mocks/tech-papers.json';

describe('TechinicalPapersTab', () => {

  test('Show TechinicalPapersTab', async () => {
    render(<TechinicalPapersTab />);

    const cards = await screen.findAllByTestId('tp-card')

    expect(cards.length).toEqual(files.data.length);
  });
});
