import { useEffect } from 'react';

import { useTechnicalPapers } from '@context/Resources';
import TechPapers from '@components/TechPapers';

const TechinicalPapersTab = () => {
  const {
    state: {
      files,
      page
    },
    fetchFiles,
    navigate
  } = useTechnicalPapers();

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

export default TechinicalPapersTab;
