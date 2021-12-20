import PropTypes from 'prop-types';
import SC from './style';

interface Props {
  files: Array<any>;
  onClickIssue: Function;
}

type Position = 'Main' | 'Tile1' | 'Tile2';

const CurrentIssues = ({ files, onClickIssue }: Props) => {

  const findFile = (position: Position) => {
    return files.find(f => f.position === position);
  }

  const mainFile = findFile('Main');
  const tile1File = findFile('Tile1');
  const tile2File = findFile('Tile2');

  return <SC.CurrentIssues>
    <SC.MainIssue>
      <SC.ImageBox onClick={() => {
        onClickIssue(mainFile.issueNumber);
      }}>
        <SC.Img src={mainFile.downloadUri} alt={mainFile.title} />
        <SC.DetailsBox>
          <SC.Category>{mainFile.caption}</SC.Category>
          <SC.Title>{mainFile.title}</SC.Title>
        </SC.DetailsBox>
      </SC.ImageBox>
    </SC.MainIssue>
    <SC.Tiles>
      <SC.Tile onClick={() => {
        onClickIssue(tile1File.issueNumber);
      }}>
        <SC.ImageBox>
          <SC.Img src={tile1File.downloadUri} alt={tile1File.title} />
          <SC.DetailsBox>
            <SC.Category>{tile1File.caption}</SC.Category>
            <SC.Title>{tile1File.title}</SC.Title>
          </SC.DetailsBox>
        </SC.ImageBox>
      </SC.Tile>
      <SC.Tile onClick={() => {
        onClickIssue(tile2File.issueNumber);
      }}>
        <SC.ImageBox>
          <SC.Img src={tile2File.downloadUri} alt={tile2File.title} />
          <SC.DetailsBox>
            <SC.Category>{tile2File.caption}</SC.Category>
            <SC.Title>{tile2File.title}</SC.Title>
          </SC.DetailsBox>
        </SC.ImageBox>
      </SC.Tile>
    </SC.Tiles>
  </SC.CurrentIssues>
};

CurrentIssues.propTypes = {
  files: PropTypes.array,
  onClickIssue: PropTypes.func
}

export default CurrentIssues;
