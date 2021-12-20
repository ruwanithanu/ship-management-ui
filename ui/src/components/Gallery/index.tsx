import PropTypes from 'prop-types';

import { SharePointfiles } from '@/types';
import Slider from '@components/Slider';
import { useSlider } from '@context/Slider';
import SC from './style';

interface Props {
  gallery: SharePointfiles;
  slides: SharePointfiles;
}

const Gallery = ({ gallery, slides }: Props) => {
  const { openSlider, setCurrent } = useSlider();

  const getThumbnails = () => {
    return gallery.map(image => <SC.Thumbnail
      key={image.id}
      onClick={() => {
        setCurrent(slides.findIndex(slide => slide.id === image.id));
        openSlider();
      }}
    >
      <SC.Image src={image.thumbnail?.url} data-testid="thumbnail" />
    </SC.Thumbnail>)
  };

  return <SC.Container>
    <SC.Thumbnails>
      {getThumbnails()}
    </SC.Thumbnails>
    <Slider files={slides} />
  </SC.Container>;
};

Gallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  slides: PropTypes.array.isRequired
};

export default Gallery;
