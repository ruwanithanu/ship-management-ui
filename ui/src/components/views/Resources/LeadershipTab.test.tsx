import { render, screen } from '@/test-utils/with-resources';

import LeadershipTab from './LeadershipTab';
import files from '@/test-utils/mocks/leadership.json';

describe('LeadershipTab', () => {

  test('Show LeadershipTab', async () => {
    render(<LeadershipTab />);

    const mainImg = await screen.findByAltText(files.data.currentIssues[0].title);
    expect(mainImg).toBeInTheDocument();

    const tile1Img = await screen.findByAltText(files.data.currentIssues[1].title);
    expect(tile1Img).toBeInTheDocument();

    const tile2Img = await screen.findByAltText(files.data.currentIssues[2].title);
    expect(tile2Img).toBeInTheDocument();

    const issue1 = await screen.findByAltText(files.data.pastIssues[0].title);
    expect(issue1).toBeInTheDocument();

    const issue2 = await screen.findByAltText(files.data.pastIssues[1].title);
    expect(issue2).toBeInTheDocument();

    const issue3 = await screen.findByAltText(files.data.pastIssues[2].title);
    expect(issue3).toBeInTheDocument();
  });
});
