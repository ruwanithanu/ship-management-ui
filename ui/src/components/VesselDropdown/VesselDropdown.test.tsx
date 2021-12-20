import { render, screen } from '@/test-utils/with-providers';
import userEvent from '@testing-library/user-event';

import VesselDropdown from '.';
import mockVessels from '@/test-utils/mocks/vessels.json';

describe('VesselDropdown', () => {

  test('Show VesselDropdown', async () => {

    render(<VesselDropdown />);

    const prompt = await screen.findByText(mockVessels.data[0].name);
    expect(prompt).toBeInTheDocument();

    userEvent.click(prompt);

    const menu = await screen.findByRole('list');
    expect(menu).toBeInTheDocument();
  });
});
