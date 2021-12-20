import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/pro-solid-svg-icons';

import { useSlider } from '@context/Slider';
import { SharePointfiles } from '@/types';
import Slide from './Slide';
import SC from './style';

interface Props {
  files: SharePointfiles;
};

const Slider = ({ files }: Props) => {
  const { state: { show, current }, setCurrent } = useSlider();
  const maxIndex = files.length - 1;

  const onPrevious = () => {
    setCurrent(current === 0 ? maxIndex : current - 1);
  }

  const onNext = () => {
    setCurrent(current === maxIndex ? 0 : current + 1);
  }

  return <SC.Background show={show}>
    <SC.Container>
      <SC.Chevron>
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={onPrevious}
          aria-label="previous-slide"
        />
      </SC.Chevron>
      <SC.Center>
        <Slide file={files[current]} />
        {/* <SC.SlideBottom> o o o o </SC.SlideBottom> */}
      </SC.Center>
      <SC.Chevron>
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={onNext}
          aria-label="next-slide"
        />
      </SC.Chevron>
    </SC.Container>
  </SC.Background>
};

Slider.propTypes = {
  files: PropTypes.array.isRequired
};

export default Slider;
