import { render, screen } from '@/test-utils/with-resources';

import LookoutTab from './LookoutTab';
import files from '@/test-utils/mocks/tech-papers.json';

describe('LookoutTab', () => {

  test('Show LookoutTab', async () => {
    render(<LookoutTab />);

    const cards = await screen.findAllByTestId('tp-card')

    expect(cards.length).toEqual(files.data.length);
  });
});
