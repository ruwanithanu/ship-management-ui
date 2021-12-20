import { render, screen } from '@/test-utils/with-resources';

import PSCTab from './PSCTab';
import files from '@/test-utils/mocks/tech-papers.json';

describe('PSCTab', () => {

  test('Show LookoutTab', async () => {
    render(<PSCTab />);

    const cards = await screen.findAllByTestId('tp-card')

    expect(cards.length).toEqual(files.data.length);
  });
});
