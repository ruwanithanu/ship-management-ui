import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faDownload
} from '@fortawesome/pro-light-svg-icons';

import { SharePointfile, FileTypes } from '@/types';
import { Spinner, download } from '@angloeastern/react-components';
import { useShortLivedUrls } from '@utils/hooks/useShortLivedUrls';
import { useSlider } from '@context/Slider';
import SC from './style';

interface Props {
  file: SharePointfile;
}

interface State {
  previewUrl: string | undefined;
  downloadUrl: string | undefined;
}

const Slide = ({ file }: Props ) => {
  const { getPreviewUrl, getDownloadUrl } = useShortLivedUrls(file);
  const { closeSlider } = useSlider();
  const [state, setState] = useState<State>({
    previewUrl: undefined,
    downloadUrl: undefined
  });

  useEffect(() => {
    async function getUrls() {
      if (file.type === FileTypes.IMAGE) {
        const stateCopy = {...state};
        stateCopy.downloadUrl = await getDownloadUrl();
        stateCopy.previewUrl = await getPreviewUrl();

        setState(stateCopy);
      }
    }
    getUrls();
  }, []);

  return <>
    {(state.previewUrl !== undefined && state.downloadUrl !== undefined) && <>
      <SC.SlideTop>
        <SC.Filename>{file.name}</SC.Filename>
        <SC.TopControls>
          <SC.TopControl onClick={() => download(state.downloadUrl as string)}>
            <FontAwesomeIcon icon={faDownload} aria-label="download-image" />
          </SC.TopControl>
          <SC.TopControl onClick={() => closeSlider()}>
            <FontAwesomeIcon icon={faXmark} aria-label="close-slider" />
          </SC.TopControl>
        </SC.TopControls>
      </SC.SlideTop>
      <SC.Viewport>
        <SC.Slide>
          <img src={state.previewUrl as string} alt="slide-image" />
        </SC.Slide>
      </SC.Viewport>
    </>}
    {!state.previewUrl && <Spinner />}
  </>;
};

Slide.propTypes = {
  file: PropTypes.object.isRequired
};

export default Slide;
