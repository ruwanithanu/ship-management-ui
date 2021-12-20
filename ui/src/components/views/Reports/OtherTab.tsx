import { useEffect } from 'react';

import { useOther } from '@context/Reports';
import { useVessels } from '@context/Vessels';
import SharePointDocList from '@components/SharePointDocList';

const OtherTab = () => {
  const {
    state: {
      data,
      parentId,
      page,
    },
    fetchData,
    setParentId,
    navigate
  } = useOther();
  const { state: { vessel } } = useVessels();

  useEffect(() => {
    async function doFetchData() {
      await fetchData(vessel.aeCode);
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

export default OtherTab;
