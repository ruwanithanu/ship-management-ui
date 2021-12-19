import { render, screen } from '../../test-utils/with-providers';

import Slide from './Slide';
import gallery from '../../test-utils/mocks/reports-gallery.json';
import { FileTypes, SharePointfile } from '@/types';

describe('Slide', () => {

  const image: SharePointfile = gallery.data.find(f => f.type === FileTypes.IMAGE) as SharePointfile;

  test('Shows image slide', async () => {

    render(<Slide file={image} />);

    const slide = await screen.findByAltText('slide-image');
    expect(slide).toBeInTheDocument();
  });
});
