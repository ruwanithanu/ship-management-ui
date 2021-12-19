import { render, screen } from '../../test-utils/with-providers';

import Topbar from '.';
import mockVessels from '../../test-utils/mocks/vessels.json';

describe('Topbar', () => {

  test('Show Topbar', async () => {

    render(<Topbar />);

    const vesselDropdown = await screen.findByText(mockVessels.data[0].name);
    expect(vesselDropdown).toBeInTheDocument();

    const avatar = screen.getByAltText('avatar');
    expect(avatar).toBeInTheDocument();

    const hamburger = screen.getByLabelText('hamburger');
    expect(hamburger).toBeInTheDocument();

    const filter = screen.getByLabelText('filter');
    expect(filter).toBeInTheDocument();
  });
});
