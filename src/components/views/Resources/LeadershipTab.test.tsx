import { act, render, screen } from '@/test-utils/with-resources';

import LeadershipTab from './LeadershipTab';
import files from '@/test-utils/mocks/leadership.json';

describe('LeadershipTab', () => {

  test('Show LeadershipTab', async () => {
    await act(async () => {
      render(<LeadershipTab />);
    });

    const mainImg = screen.getByAltText(files.data.currentIssues[0].title);
    expect(mainImg).toBeInTheDocument();

    const tile1Img = screen.getByAltText(files.data.currentIssues[1].title);
    expect(tile1Img).toBeInTheDocument();

    const tile2Img = screen.getByAltText(files.data.currentIssues[2].title);
    expect(tile2Img).toBeInTheDocument();

    const issue1 = screen.getByAltText(files.data.pastIssues[0].title);
    expect(issue1).toBeInTheDocument();

    const issue2 = screen.getByAltText(files.data.pastIssues[1].title);
    expect(issue2).toBeInTheDocument();

    const issue3 = screen.getByAltText(files.data.pastIssues[2].title);
    expect(issue3).toBeInTheDocument();
  });
});
