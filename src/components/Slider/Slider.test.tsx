import { render, screen } from '../../test-utils/with-slider';
import userEvent from '@testing-library/user-event';
import Slider from '.';
import gallery from '../../test-utils/mocks/reports-gallery.json';
import { FileTypes, SharePointfiles } from '@/types';

describe('Slider', () => {

  const images: SharePointfiles = gallery.data.filter(f => f.type === FileTypes.IMAGE);

  test('Display current slide', async () => {
    render(<Slider files={images} />);

    const activeSlide = await screen.findByAltText('slide-image');
    expect(activeSlide).toBeInTheDocument();

    const close = await screen.findByLabelText('close-slider');
    expect(close).toBeInTheDocument();
  });

  test('Navigation', async () => {
    render(<Slider files={images} />)

    const slideName = await screen.findByText(images[0].name);

    const previous = await screen.findByLabelText('previous-slide');
    expect(previous).toBeInTheDocument();

    const next = await screen.findByLabelText('next-slide');
    expect(next).toBeInTheDocument();

    userEvent.click(next);

    expect(slideName).toHaveTextContent(images[1].name);

    userEvent.click(previous);
    userEvent.click(previous);

    expect(slideName).toHaveTextContent(images[images.length - 1].name);
  });
});
