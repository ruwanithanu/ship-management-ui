// import { memoize } from '@/utils';
import http, { extraHeaders } from './http';

import { SharePointfile, TechPaperFile, Downloadable, FileTypes } from '@/types';

const { REACT_APP_ORG_ID: ORG_ID } = process.env;

export const fetchVessels = async () => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Vessels?organizationId=${ORG_ID}`, {
    headers
  });
  return data;
};

export const fetchDocuments = async () => {
  const { data } = await import('../test-utils/mocks/documents.json');
  return data;
};

export const fetchFinancialVesselReports = async () => {
  const { data } = await import('../test-utils/mocks/accounts-vessels.json');
  return data;
};

export const fetchFinancialFleetReports = async () => {
  const { data } = await import('../test-utils/mocks/accounts-fleet.json');
  return data;
};

export const fetchReportsClaims = async () => {
  const { data } = await import('../test-utils/mocks/reports-claims.json');
  return data;
};

export const fetchReportsCommercial = async () => {
  const { data } = await import('../test-utils/mocks/reports-commercial.json');
  return data;
};

export const fetchReportsGallery = async () => {
  const { data } = await import('../test-utils/mocks/reports-gallery.json');
  return data;
};

export const fetchReportsOther = async () => {
  const { data } = await import('../test-utils/mocks/reports-other-reports.json');
  return data;
};

export const fetchDrawings = async () => {
  const { data } = await import('../test-utils/mocks/drawings.json');
  return data;
};

export const fetchLeadership = async () => {
  // const { data } = await import('../test-utils/mocks/leadership.json');
  // return data;
  // const headers = extraHeaders({ domain: 'AETEC' });
  const headers = extraHeaders({});
  const { data } = await http.get(`/Resources/leadership`, {
    headers
  });
  return data;
};

export const fetchLookouts = async () => {
  // const { data } = await import('../test-utils/mocks/tech-papers.json');
  // return data;
  // const headers = extraHeaders({ domain: 'AETEC' });
  const headers = extraHeaders({});
  const { data } = await http.get(`/Resources/Lookout/files`, {
    headers
  });
  return data;
};

export const fetchPSC = async () => {
  // const { data } = await import('../test-utils/mocks/tech-papers.json');
  // return data;
  // const headers = extraHeaders({ domain: 'AETEC' });
  const headers = extraHeaders({});
  const { data } = await http.get(`/Resources/PSC/files`, {
    headers
  });
  return data;
};

export const fetchTechnicalPapers = async () => {
  // const { data } = await import('../test-utils/mocks/tech-papers.json');
  // return data;
  // const headers = extraHeaders({ domain: 'AETEC' });
  const headers = extraHeaders({});
  const { data } = await http.get(`/Resources/Technical%20Papers/files`, {
    headers
  });
  return data;
};

export const getDownloadURL = async (file: Downloadable) => {

  if (file.hasOwnProperty('type')) {
    await setTimeout(() => {}, 30);

    let sp: SharePointfile = file as SharePointfile;
    switch (sp.type) {
      case FileTypes.IMAGE: return '/images/ship-01.jpg';
      default: return '/assets/sample.pdf';
    }
  } else if (file.hasOwnProperty('driveName')) {
    let tp: TechPaperFile = file as TechPaperFile;
    const headers = extraHeaders({});
    const { data: { url } } = await http.get(`/Files/${tp.driveName}/${tp.id}`, {
      headers
    });
    return url;
  } else {
    return '/assets/sample.pdf';
  }
};

export const getPreviewURL = async (file: Downloadable) => {

  if (file.hasOwnProperty('type')) {
    await setTimeout(() => {}, 30);

    let sp: SharePointfile = file as SharePointfile;
    switch (sp.type) {
      case FileTypes.IMAGE: return '/images/ship-01.jpg';
      default: return '/assets/sample.pdf';
    }
  } else if (file.hasOwnProperty('driveName')) {
    let tp: TechPaperFile = file as TechPaperFile;
    const headers = extraHeaders({});
    const { data: { url } } = await http.get(`/Files/preview/${tp.driveName}/${tp.id}`, {
      headers
    });
    return url;
  } else {
    return '/assets/sample.pdf';
  }
};
