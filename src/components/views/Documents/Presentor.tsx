import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useDocuments } from '@context/Documents';
import View from '@components/View';
import SharePointDocList from '@components/SharePointDocList';
import { useVessels } from '@context/Vessels';
import { useSidebar, Spinner } from '@angloeastern/react-components';
import BlankView from '../BlankView';
import SC from '@components/View/style';

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
  } = useDocuments();
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
    if (menu && (!activeItem || activeItem.id !== 'documents')) {
      const menuItem = getMenuItem('documents');
      setActiveItem(menuItem);
    }
  }, [activeItem, menu]);

  if (!ready) return <Spinner />;

  if (!vessel) {
    return <BlankView view={t('view.documents')} />
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
