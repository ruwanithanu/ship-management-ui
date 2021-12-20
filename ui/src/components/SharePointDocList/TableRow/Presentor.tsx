import { MouseEventHandler } from 'react';
import PropTypes from 'prop-types';

import DocIcon from '../DocIcon';
import { SharePointfile, FileTypes } from '@/types';
import { DownLoadIcon } from '../ListItem/style';
import SC from './style';

interface Props {
  data: SharePointfile;
  modifiedOn: string;
  handleClick: MouseEventHandler;
  handleDownload: MouseEventHandler;
}

const Presentor = ({
  data,
  modifiedOn,
  handleClick,
  handleDownload
 }: Props) => {

  return <SC.Row>
    <SC.Cell onClick={handleClick}>
      <SC.Icon><DocIcon data={data} /></SC.Icon>
      <SC.Name dangerouslySetInnerHTML={{ __html: data.name }}/>
    </SC.Cell>
    <SC.Cell>{ modifiedOn }</SC.Cell>
    <SC.Cell>{ data.modifiedBy }</SC.Cell>
    <SC.Cell>{ data.type }</SC.Cell>
    <SC.Cell>
      { data.type !== FileTypes.FOLDER && data.type !== FileTypes.GALLERY ?
        <DownLoadIcon onClick={handleDownload} /> :
        '' }
    </SC.Cell>
  </SC.Row>
};

Presentor.propTypes = {
  data: PropTypes.object.isRequired,
  modifiedOn: PropTypes.string,
  handleClick: PropTypes.func,
  handleDownload: PropTypes.func
};

export default Presentor;
