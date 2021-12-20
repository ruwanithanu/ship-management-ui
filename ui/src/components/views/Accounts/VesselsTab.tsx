import { useEffect } from 'react';

import { useVessel } from '@context/Accounts';
import { useVessels } from '@context/Vessels';
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
  const { state: { vessel } } = useVessels();

  useEffect(() => {
    async function doFetchData() {
      await fetchData(vessel);
    }
    doFetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vessel]);

  return <SharePointDocList
    data={data}
    parentId={parentId}
    setParentId={setParentId}
    navigate={navigate}
    page={page}
  />;
};

export default VesselsTab;
