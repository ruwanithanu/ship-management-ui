import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faDownload } from '@fortawesome/pro-light-svg-icons';
import { faFilePdf } from '@fortawesome/pro-duotone-svg-icons';

import {
  Spinner,
  usePdfViewer
} from '@angloeastern/react-components';

import SC from './style';

export interface Props {
  topGutter?: number;
}

const ViewPdf = ({ topGutter = 0 }: Props) => {
  const { state: { show, preview, download }, closeViewer } = usePdfViewer();

  return <>{(show && preview && download) ?
    <SC.Background show={show} topGutter={topGutter}>
      <SC.Container>
        <SC.Top>
          <SC.Filename>
            <SC.Icon>
              <FontAwesomeIcon icon={faFilePdf} />
            </SC.Icon>
            {preview.name}
          </SC.Filename>
          <SC.Controls>
            <SC.ControlIcon>
              <a href={download.url} download>
                <FontAwesomeIcon icon={faDownload} />
              </a>
            </SC.ControlIcon>
            <SC.ControlIcon onClick={() => closeViewer()}>
              <FontAwesomeIcon icon={faXmark} />
            </SC.ControlIcon>
          </SC.Controls>
        </SC.Top>
        <SC.CanvasContainer>
          <iframe title={preview.name} src={preview.url}></iframe>
        </SC.CanvasContainer>
      </SC.Container>
    </SC.Background> :
    <Spinner />}
  </>;
}

export default ViewPdf;
