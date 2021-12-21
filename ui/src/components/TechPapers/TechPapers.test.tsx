/* eslint-disable testing-library/no-debugging-utils */
import { act, render, screen } from '@/test-utils/with-providers';

import papers from '@/test-utils/mocks/tech-papers.json'

import TechPapers from '.';

describe('TechPapers', () => {

  test('Show TechPapers', async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(<TechPapers page={1} files={papers.data} navigate={jest.fn()} />);
    });


    const headings = await screen.findAllByRole('heading', { name: 'text.technicalPaper'});
    expect(headings).toHaveLength(papers.data.length);
    expect(true).toBeTruthy();
  });
});