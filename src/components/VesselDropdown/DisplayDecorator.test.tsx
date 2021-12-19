import { render, screen } from '@/test-utils/with-theme';

import DisplayDecorator from './DisplayDecorator';

describe('DisplayDecorator', () => {

  test('Show DisplayDecorator', () => {

    render(
      <DisplayDecorator
        isOpen={true}
        onClick={jest.fn()}>
          <h1>Hello</h1>
      </DisplayDecorator>
    );

    const icon = screen.getByRole('img', { hidden: true });
    expect(icon).toBeInTheDocument();

    const content = screen.getByText('Hello');
    expect(content).toBeInTheDocument();
  });
});
