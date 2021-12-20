import { render, screen } from '@/test-utils/with-accounts';
import { MemoryRouter } from 'react-router-dom';

import Reports from '.';
import { windowResize } from '@angloeastern/react-components';

describe('Reports', () => {

  test('Show Reports desktop view', async () => {
    windowResize(1920, 1080);
    render(
      <MemoryRouter>
        <Reports />
      </MemoryRouter>
    );

    const claimsTab = await screen.findByText('tab.claims');
    expect(claimsTab).toBeInTheDocument();

    const commercialTab = await screen.findByText('tab.commercial');
    expect(commercialTab).toBeInTheDocument();

    const galleryTab = await screen.findByText('tab.gallery');
    expect(galleryTab).toBeInTheDocument();

    const otherTab = await screen.findByText('tab.otherReports');
    expect(otherTab).toBeInTheDocument();
  });

  test('Show Reports mobile view', async () => {
    windowResize(320, 568);
    render(
      <MemoryRouter>
        <Reports />
      </MemoryRouter>
    );

    const claimsTab = await screen.findByText('tab.claims');
    expect(claimsTab).toBeInTheDocument();
  });
});
