import { render, screen } from '@testing-library/react';
import Icon from '.';

describe('Icon', () => {

  test('render Icon', () => {
    render(<Icon icon="AngloEastern" />);

    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
  });
});
