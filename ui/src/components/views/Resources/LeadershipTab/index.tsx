import { useEffect } from 'react';

import { Spinner } from '@angloeastern/react-components';
import { useLeadership } from '@context/Resources';
import CurrentIssues from './CurrentIssues';
import PastIssues from './PastIssues';

const { REACT_APP_LEADERSHIP_URL } = process.env;

const Leadership = () => {
  const {
    state: {
      files,
      page
    },
    fetchFiles,
    navigate
  } = useLeadership();

  const onClickIssue = (issueNumber: number) => {
    window.open(`${REACT_APP_LEADERSHIP_URL}${issueNumber}`);
  };

  useEffect(() => {
    async function fetchData() {
      await fetchFiles();
    }
    fetchData();
  }, []);

  if (!files) return <Spinner />;

  return <>
    <CurrentIssues files={files.currentIssues} onClickIssue={onClickIssue} />
    <PastIssues files={files.pastIssues} page={page} navigate={navigate} onClickIssue={onClickIssue} />
  </>;
};

export default Leadership;
