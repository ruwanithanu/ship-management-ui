import { useEffect } from 'react';

import { useCommercial } from '@context/Reports';
import SharePointDocList from '@components/SharePointDocList';

const CommercialTab = () => {
  const {
    state: {
      data,
      parentId,
      page,
    },
    fetchData,
    setParentId,
    navigate
  } = useCommercial();

  useEffect(() => {
    async function doFetchData() {
      await fetchData();
    }
    doFetchData();
  }, []);

  return <SharePointDocList
    data={data}
    parentId={parentId}
    setParentId={setParentId}
    navigate={navigate}
    page={page}
  />;
};

export default CommercialTab;
