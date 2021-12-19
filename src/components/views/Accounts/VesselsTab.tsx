import { useEffect } from 'react';

import { useVessel } from '@context/Accounts';
import SharePointDocList from '@components/SharePointDocList';

const VesselsTab = () => {
  const {
    state: {
      data,
      parentId,
      page,
    },
    fetchData,
    setParentId,
    navigate
  } = useVessel();

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

export default VesselsTab;
