import { render, screen } from '@/test-utils/with-providers';

import View from '.';

describe('View', () => {

  test('Show View', () => {

    render(<View>Hello</View>);

    const content = screen.getByText('Hello');
    expect(content).toBeInTheDocument();
  });
});
