import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useDrawings } from '@context/Drawings';
import View from '@components/View';
import SharePointDocList from '@components/SharePointDocList';
import { useSidebar, Spinner } from '@angloeastern/react-components';
import SC from '@components/View/style';
import { useVessels } from '@context/Vessels';
import BlankView from '../BlankView';

const Presentor = () => {
  const {
    state: {
      data,
      parentId,
      page
    },
    fetchData,
    setParentId,
    navigate
  } = useDrawings();
  const { t, ready } = useTranslation();
  const { state: { vessel } } = useVessels();
  const { state: { activeItem, menu }, setActiveItem, getMenuItem } = useSidebar();

  useEffect(() => {
    async function doFetchData() {
      await fetchData();
    }
    doFetchData();
  }, []);

  useEffect(() => {
    if (menu && (!activeItem || activeItem.id !== 'drawings')) {
      const menuItem = getMenuItem('drawings');
      setActiveItem(menuItem);
    }
  }, [activeItem, menu]);

  if (!ready) return <Spinner />;

  if (!vessel) {
    return <BlankView view={t('view.drawings')} />
  }

  return <View>
    <SC.ListContainer>
      <SharePointDocList
        data={data}
        parentId={parentId}
        setParentId={setParentId}
        navigate={navigate}
        page={page}
      />
    </SC.ListContainer>
  </View>;
};

export default Presentor;
