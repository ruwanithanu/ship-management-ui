import { render, screen } from '@/test-utils/with-theme';

import papers from '@/test-utils/mocks/tech-papers.json'

import Card from './Card';

describe('Card', () => {

  test('Show Card', async () => {

    render(<Card file={papers.data[0]} />);

    const heading = await screen.findByRole('heading', { name: 'text.technicalPaper'});
    expect(heading).toBeInTheDocument();

    const dateLabel = await screen.findByText(/text\.updatedOn*/i);
    expect(dateLabel).toBeInTheDocument();
  });
});
