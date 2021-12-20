import { render, screen } from '@/test-utils/with-resources';
import { MemoryRouter } from 'react-router-dom';

import Resources from '.';
import { windowResize } from '@angloeastern/react-components';

describe('Resources', () => {

  test('Show Resources desktop view', async () => {
    windowResize(1920, 1080);
    render(
      <MemoryRouter>
        <Resources />
      </MemoryRouter>
    );

    const leadershipTab = await screen.findByText('tab.resources.leadership');
    expect(leadershipTab).toBeInTheDocument();

    const lookoutTab = await screen.findByText('tab.resources.lookout');
    expect(lookoutTab).toBeInTheDocument();

    const pscTab = await screen.findByText('tab.resources.psc');
    expect(pscTab).toBeInTheDocument();

    const techTab = await screen.findByText('tab.resources.techpapers');
    expect(techTab).toBeInTheDocument();
  });

  test('Show Resources mobile view', async () => {
    windowResize(320, 568);
    render(
      <MemoryRouter>
        <Resources />
      </MemoryRouter>
    );

    const leadershipTab = await screen.findByText('tab.resources.leadership');
    expect(leadershipTab).toBeInTheDocument();
  });
});
