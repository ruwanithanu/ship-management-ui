import { useEffect } from 'react';

import { useLookout } from '@context/Resources';
import TechPapers from '@components/TechPapers';

const LookoutTab = () => {
  const {
    state: {
      files,
      page
    },
    fetchFiles,
    navigate
  } = useLookout();

  useEffect(() => {
    async function fetchData() {
      await fetchFiles();
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <TechPapers
    files={files}
    navigate={navigate}
    page={page}
  />;
};

export default LookoutTab;
