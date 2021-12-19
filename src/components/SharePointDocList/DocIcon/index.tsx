import PropTypes from 'prop-types';

import { faFolder, faImages } from '@fortawesome/pro-solid-svg-icons';
import {
  faFilePdf,
  faFileWord,
  faFileExcel,
  faFilePowerpoint,
  faFileVideo,
  faFileAudio,
  faFile
} from '@fortawesome/pro-light-svg-icons';
import { FileTypes, SharePointfile } from '@/types/';
import SC from './style';

interface Props {
  data: SharePointfile;
}

const DocIcon = ({ data }: Props) => {

  const getIcon = () => {
    switch (data.type) {
      case FileTypes.FOLDER:
        return data.isGallery ? faImages : faFolder;
      case FileTypes.PDF: return faFilePdf;
      case FileTypes.WORD: return faFileWord;
      case FileTypes.EXCEL: return faFileExcel;
      case FileTypes.POWERPOINT: return faFilePowerpoint;
      case FileTypes.VIDEO: return faFileVideo;
      case FileTypes.AUDIO: return faFileAudio;
      default: return faFile;
    }
  }

  return <SC.DocIcon data={data} icon={getIcon()} />;
};

DocIcon.propTypes = {
  data: PropTypes.object.isRequired
};

export default DocIcon;
