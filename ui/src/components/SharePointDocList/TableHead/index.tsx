import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TableHead as THead } from '@angloeastern/react-components';

const TableHead = () => {
  const { t, ready } = useTranslation();
  const [headers, setHeaders] = useState<Array<any>>([]);

  useEffect(() => {
    if (ready) {
      setHeaders([{
        id: 'name',
        name: t('thead.name'),
        sortAble: true
      }, {
        id: 'modifiedOnUtc',
        name: t('thead.modifiedOnUtc'),
        sortAble: true
      }, {
        id: 'modifiedBy',
        name: t('thead.modifiedBy'),
        sortAble: true
      }, {
        id: 'type',
        name: t('thead.type'),
        sortAble: true
      }, {
        id: 'actions',
        name: t('thead.actions'),
        sortAble: false
      }]);
    }
  }, [ready]);

  return <THead headers={headers} />;
};

export default TableHead;
