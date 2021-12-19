import { render, screen } from '@/test-utils/with-providers';

import CurrentIssues from '.';
import files from '@/test-utils/mocks/leadership.json';

describe('CurrentIssues', () => {

  it('Displays Current Issues', () => {
    render(<CurrentIssues files={files.data.currentIssues} onClickIssue={jest.fn()}/>);

    const mainImg = screen.getByAltText(files.data.currentIssues[0].title);
    expect(mainImg).toBeInTheDocument();

    const tile1Img = screen.getByAltText(files.data.currentIssues[1].title);
    expect(tile1Img).toBeInTheDocument();

    const tile2Img = screen.getByAltText(files.data.currentIssues[2].title);
    expect(tile2Img).toBeInTheDocument();
  });
});