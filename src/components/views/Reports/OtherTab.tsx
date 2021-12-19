import { useEffect } from 'react';

import { useOther } from '@context/Reports';
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

export default OtherTab;
