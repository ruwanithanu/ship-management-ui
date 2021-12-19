import { render, screen } from '@/test-utils/with-accounts';
import { MemoryRouter } from 'react-router-dom';

import Accounts from '.';
import { windowResize } from '@angloeastern/react-components';


describe('Accounts', () => {

  test('Show Accounts desktop view', async () => {
    windowResize(1920, 1080);
    render(
      <MemoryRouter>
        <Accounts />
      </MemoryRouter>
    );

    const vesselsTab = await screen.findByText('tab.otherReports.vessels');
    expect(vesselsTab).toBeInTheDocument();

    const fleetTab = await screen.findByText('tab.otherReports.fleet');
    expect(fleetTab).toBeInTheDocument();
  });

  test('Show Accounts mobile view', async () => {
    windowResize(320, 568);
    render(
      <MemoryRouter>
        <Accounts />
      </MemoryRouter>
    );

    const vesselsTab = await screen.findByText('tab.otherReports.vessels');
    expect(vesselsTab).toBeInTheDocument();
  });
});
