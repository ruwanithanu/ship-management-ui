import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { SharePointfile, FileTypes } from '@/types';
import { useSearch } from '@context/Search';
import { usePdfViewer, download, Spinner } from '@angloeastern/react-components';
import { useShortLivedUrls } from '@utils/hooks/useShortLivedUrls';
import { formatDateTime } from '@utils/dateUtils';

interface Props {
  data: SharePointfile;
  onFolderClick: Function;
}

interface State {
  previewUrl: string | undefined;
  downloadUrl: string | undefined;
}

const withFile = (Component: any) => {

  const HOC = ({ data, onFolderClick }: Props) => {
    const { t, ready } = useTranslation();
    const { setTerm } = useSearch();
    const { openViewer, setPreview, setDownload } = usePdfViewer();
    const { getPreviewUrl, getDownloadUrl } = useShortLivedUrls(data);
    const [state, setState] = useState<State>({
      previewUrl: undefined,
      downloadUrl: undefined
    });

    const handleClick = async () => {
      if (data.type === FileTypes.FOLDER) {
        onFolderClick(data.id);
        setTerm('');
      } else if (data.type === FileTypes.PDF && state.previewUrl && state.downloadUrl) {
        setPreview(state.previewUrl);
        setDownload(state.downloadUrl);
        openViewer();
      }
    };

    const handleDownload = () => {
      if (data.type !== FileTypes.FOLDER && state.downloadUrl) {
        download(state.downloadUrl);
      }
    };

    useEffect(() => {
      async function getUrls() {
        if (data.type !== FileTypes.FOLDER) {
          const stateCopy = {...state};
          stateCopy.downloadUrl = await getDownloadUrl();

          if (data.type === FileTypes.PDF) {
            stateCopy.previewUrl = await getPreviewUrl();
          }

          setState(stateCopy);
        }
      }
      getUrls();
    }, [data]);

    if (!ready) return <Spinner />;

    return <Component
      handleClick={handleClick}
      handleDownload={handleDownload}
      data={data}
      modifiedOn={formatDateTime(t, data.modifiedOnUtc)}
    />;
  };

  HOC.propTypes = {
    data: PropTypes.object.isRequired,
    onFolderClick: PropTypes.func
  };

  return HOC;
}

export default withFile;
