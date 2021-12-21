import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/pro-duotone-svg-icons';

import { TechPaperFile } from '@/types';
import { usePdfViewer, Spinner } from '@angloeastern/react-components';
import { useShortLivedUrls } from '@utils/hooks/useShortLivedUrls';
import { formatDate } from '@utils/dateUtils';
import SC from './style';

interface Props {
  file: TechPaperFile;
};

const Card = ({ file }: Props) => {
  const { t, ready } = useTranslation();
  const { getPreviewUrl, getDownloadUrl } = useShortLivedUrls(file);
  const { openViewer, setPreview, setDownload } = usePdfViewer();
  const [state, setState] = useState({
    previewUrl: undefined,
    downloadUrl: undefined
  });

  useEffect(() => {
    async function getUrls() {
      const stateCopy = {...state};
      stateCopy.downloadUrl = await getDownloadUrl();
      stateCopy.previewUrl = await getPreviewUrl();
      setState(stateCopy);
    }
    if (file && ready) {
      getUrls();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file, ready]);

  const handleClick = async () => {
    setPreview({
      url: state.previewUrl,
      name: file.name
    });
    setDownload({
      url: state.downloadUrl,
      name: file.name
    });
    openViewer();
  };

  if (!ready) return <Spinner />;

  return <SC.Card
    data-testid="tp-card"
    onClick={handleClick}
  >
    <SC.CardGutterLeft />
    <SC.CardMain>
      <SC.CardHead>{t('text.technicalPaper')}</SC.CardHead>
      <SC.CardTitle dangerouslySetInnerHTML={{ __html: file.name }}/>
      <SC.CardBottom>
        <SC.CardUpdatedOn>{t('text.updatedOn')}: {formatDate(t, file.updatedOn)}</SC.CardUpdatedOn>
        <SC.Icon>
          <FontAwesomeIcon icon={faFilePdf} />
        </SC.Icon>
      </SC.CardBottom>
    </SC.CardMain>
    <SC.CardGutterRight />
  </SC.Card>;
};

Card.propTypes = {
  file: PropTypes.object.isRequired
};

export default Card;
