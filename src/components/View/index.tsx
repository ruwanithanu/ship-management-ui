import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { useSidebar } from '@angloeastern/react-components';
import { useSearch } from '@context/Search';
import SC from './style';

interface Props {
  children: any;
}

const View = ({ children }: Props) => {
  const { t, ready } = useTranslation();
  const { state: { activeItem }, getMenuItem } = useSidebar();
  const { state: { term }, setTerm } = useSearch();
  const searchRef = useRef(null);

  const getCrumbs = () => {
    if (activeItem) {
      let crumbs = [];
      crumbs.push(t(`view.${activeItem.id}`));
      if (activeItem.parentId) {
        const parent = getMenuItem(activeItem.parentId);
        if (parent) {
          crumbs.unshift(t(`view.${activeItem.parentId}`));
        }
      }

      return crumbs.join(' / ');
    }
    return '';
  };

  useEffect(() => {
    if (activeItem && term === '') {
      (searchRef.current as any).value = '';
    }
  }, [activeItem, term]);

  return <>
    {activeItem && ready && <SC.TopArea>
      <SC.TitleArea>
        <SC.BreadCrumbs>{getCrumbs()}</SC.BreadCrumbs>
        <SC.Title>{t(`view.${activeItem.id}`)}</SC.Title>

      </SC.TitleArea>
      <SC.SearchArea>
        <SC.Search
          ref={searchRef}
          placeholder={t('placeHolder.search')}
          defaultValue={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
      </SC.SearchArea>
    </SC.TopArea>}
    {children}
  </>
};

View.propTypes = {
  children: PropTypes.any
};

export default View;
