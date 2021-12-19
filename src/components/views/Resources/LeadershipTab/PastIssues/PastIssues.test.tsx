import { render, screen } from '@/test-utils/with-providers';

import PastIssues from '.';
import files from '@/test-utils/mocks/leadership.json';

describe('PastIssues', () => {

  it('Displays Past Issues', () => {
    render(<PastIssues
      files={files.data.pastIssues}
      page={1}
      onClickIssue={jest.fn()}
      navigate={jest.fn()}
    />);

    const issue1 = screen.getByAltText(files.data.pastIssues[0].title);
    expect(issue1).toBeInTheDocument();

    const issue2 = screen.getByAltText(files.data.pastIssues[1].title);
    expect(issue2).toBeInTheDocument();

    const issue3 = screen.getByAltText(files.data.pastIssues[2].title);
    expect(issue3).toBeInTheDocument();
  });
});