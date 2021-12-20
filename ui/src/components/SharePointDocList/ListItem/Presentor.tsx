import { MouseEventHandler } from 'react';
import PropTypes from 'prop-types';

import DocIcon from '../DocIcon';
import { SharePointfile, FileTypes } from '@/types';
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

  return <SC.Container>
    <SC.IconContainer onClick={handleClick}>
      <DocIcon data={data} />
    </SC.IconContainer>
    <SC.DetailsContainer onClick={handleClick}>
      <SC.DocName dangerouslySetInnerHTML={{ __html: data.name }}/>
      <SC.DocDate>{ modifiedOn }</SC.DocDate>
    </SC.DetailsContainer>
    <SC.ActionsContainer>
      { data.type !== FileTypes.FOLDER && data.isGalleryFolder ?
        <SC.DownLoadIcon onClick={handleDownload} /> : '' }
    </SC.ActionsContainer>
  </SC.Container>;
};

Presentor.propTypes = {
  data: PropTypes.object.isRequired,
  modifiedOn: PropTypes.string,
  handleClick: PropTypes.func,
  handleDownload: PropTypes.func
};

export default Presentor;
