import { act, render, screen } from '../../test-utils/with-slider';
import userEvent from '@testing-library/user-event';

import Gallery from '.';
import { FileTypes } from '@/types';
import files from '../../test-utils/mocks/reports-gallery.json';

const gallery = files.data.filter(f => f.type === FileTypes.IMAGE);

describe('Gallery', () => {

  test('Renders with expected number of images', async () => {
    await act( async () => {
      render(<Gallery gallery={gallery} slides={gallery} />)
    });

    const thumbs = screen.getAllByTestId('thumbnail');
    expect(thumbs).toHaveLength(gallery.length);
  });

  test('Should show or hide slider upon interaction', async () => {
    await act( async () => {
      render(<Gallery gallery={gallery} slides={gallery} />)
    });

    const thumbs = screen.getAllByTestId('thumbnail');

    const activeSlide = screen.getByAltText('slide-image');
    expect(activeSlide).not.toBeVisible();

    userEvent.click(thumbs[0]);
    expect(activeSlide).toBeVisible();

    const close = await screen.findByLabelText('close-slider');
    expect(close).toBeInTheDocument();

    userEvent.click(close);
    expect(activeSlide).not.toBeVisible();
  });
});
