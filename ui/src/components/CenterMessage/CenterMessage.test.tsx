import { render, screen } from '@/test-utils/with-theme';

import CenterMessage from '.';

describe('CenterMessage', () => {

  test('Show CenterMessage', async () => {
    render(<CenterMessage>
      Hello World
    </CenterMessage>);

    const message = screen.getByText('Hello World')
    expect(message).toBeInTheDocument();
  });
});
