import { useEffect } from 'react';

import { usePSC } from '@context/Resources';
import TechPapers from '@components/TechPapers';

const PSCTab = () => {
  const {
    state: {
      files,
      page
    },
    fetchFiles,
    navigate
  } = usePSC();

  useEffect(() => {
    async function fetchData() {
      await fetchFiles();
    }
    fetchData();
  }, []);

  return <TechPapers
    files={files}
    navigate={navigate}
    page={page}
  />;
};

export default PSCTab;
