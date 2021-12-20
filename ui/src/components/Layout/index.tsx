import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import Topbar from '@components/Topbar';
import {
  Sidebar,
  useSidebar,
  PdfViewer,
  usePdfViewer
} from '@angloeastern/react-components';
import { getMenu } from '@utils/menu';
import SC from './style';

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  const { state: { isOpen: isSidebarOpen } } = useSidebar();
  const { state: { show: isPdfViewerOpen } } = usePdfViewer();
  const navigate = useNavigate();
  const { t, ready } = useTranslation();

  const handleChangePage = (page: string) => {
    navigate(page);
  }

  return <SC.Container>
    <SC.Sidebar show={isSidebarOpen && ready}>
      <Sidebar menu={getMenu(t)} handleChangePage={handleChangePage} />
    </SC.Sidebar>
    <SC.MainBox>
      <Topbar />
      <SC.Main>
        { isPdfViewerOpen && <PdfViewer /> }
        { children }
      </SC.Main>
    </SC.MainBox>
  </SC.Container>
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
