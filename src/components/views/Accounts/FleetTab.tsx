import { useEffect } from 'react';

import { useFleet } from '@context/Accounts';
import SharePointDocList from '@components/SharePointDocList';

const FleetTab = () => {
  const {
    state: {
      data,
      parentId,
      page,
    },
    fetchData,
    setParentId,
    navigate
  } = useFleet();

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

export default FleetTab;
