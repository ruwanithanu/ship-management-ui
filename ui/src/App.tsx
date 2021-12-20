import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// import { withTranslation } from 'react-i18next';

import { Provider as VesselProvider } from '@context/Vessels';
import { Provider as SearchProvider } from '@context/Search';
import {
  GlobalStyle,
  ThemeProvider,
  SidebarProvider,
  TableProvider,
  PdfProvider
} from '@angloeastern/react-components';
import Home from '@components/views/Home';
import Documents from '@components/views/Documents';
import Accounts from '@components/views/Accounts';
import Reports from '@components/views/Reports';
import Drawings from '@components/views/Drawings';
import Resources from '@components/views/Resources';
// import './App.css';

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <VesselProvider>
          <TableProvider>
            <PdfProvider>
              <SearchProvider>
                <GlobalStyle />
                <Router>
                  <div className="App">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/documents" element={<Documents />} />
                      <Route path="/accounts" element={<Accounts />} />
                      <Route path="/reports" element={<Reports />} />
                      <Route path="/drawings" element={<Drawings />} />
                      <Route path="/resources" element={<Resources />} />
                    </Routes>
                  </div>
                </Router>
              </SearchProvider>
            </PdfProvider>
          </TableProvider>
        </VesselProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
