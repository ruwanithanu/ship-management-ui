import { render, screen } from '@/test-utils/with-providers';

import VesselItem from './VesselItem';
import vessels from '@/test-utils/mocks/vessels.json';

describe('VesselItem', () => {

  test('Show VesselItem', () => {
    const vessel = vessels.data[0];

    render(<VesselItem vessel={vessel} />);

    const name = screen.getByText(vessel.name);
    expect(name).toBeInTheDocument();

    const imo = screen.getByText(vessel.imo);
    expect(imo).toBeInTheDocument();
  });
});
