import { render, screen } from '@/test-utils/with-theme';

import BlankView from '.';

describe('BlankView', () => {

  test('Show BlankView', async () => {
    render(<BlankView />);

    const message = screen.getByText('text.selectedVessel')
    expect(message).toBeInTheDocument();
  });
});
