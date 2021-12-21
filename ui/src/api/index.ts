// import { memoize } from '@/utils';
import http, { extraHeaders } from './http';
import { Vessel } from '@/types';

import { Downloadable } from '@/types';

const { REACT_APP_ORG_ID: ORG_ID } = process.env;

export const fetchVessels = async () => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Vessels?organizationId=${ORG_ID}`, {
    headers
  });
  return data;
};

export const fetchDocuments = async (aeCode: string) => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Vessels/Vessel%20Documents/${aeCode}/Documents/files`, {
    headers
  });
  return data;
};

export const fetchFinancialVesselReports = async (vessel: Vessel) => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Vessels/Client%20Financial%20Reports/${vessel.aeCode}/${vessel.name}/files`, {
    headers
  });
  return data;
};

export const fetchFinancialFleetReports = async () => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Vessels/Client%20Financial%20Reports/ZZZ${ORG_ID}/ZZ_REPORTS%20MULTIPLE%20SHIPS/files`, {
    headers
  });
  return data;
};

export const fetchReportsClaims = async (aeCode: string) => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Vessels/Vessel%20Documents/${aeCode}/Claims/files`, {
    headers
  });
  return data;
};

export const fetchReportsCommercial = async (aeCode: string) => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Vessels/Vessel%20Documents/${aeCode}/Commercial/files`, {
    headers
  });
  return data;
};

export const fetchReportsGallery = async (aeCode: string) => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Vessels/Vessel%20Documents/${aeCode}/Gallery/files`, {
    headers
  });
  return data;
};

export const fetchReportsOther = async (aeCode: string) => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Vessels/Vessel%20Documents/${aeCode}/Other%20Reports/files`, {
    headers
  });
  return data;
};

export const fetchDrawings = async () => {
  const { data } = await import('../test-utils/mocks/drawings.json');
  return data;
  // const headers = extraHeaders({ domain: 'AETEC' });
  // const { data } = await http.get(`/Vessels/Delivery%20Documents/${aeCode}/Other%20Reports/files`, {
  //   headers
  // });
  // return data;
};

export const fetchLeadership = async () => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Resources/leadership`, {
    headers
  });
  return data;
};

export const fetchLookouts = async () => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Resources/Lookout/files`, {
    headers
  });
  return data;
};

export const fetchPSC = async () => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Resources/PSC/files`, {
    headers
  });
  return data;
};

export const fetchTechnicalPapers = async () => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Resources/Technical%20Papers/files`, {
    headers
  });
  return data;
};

export const getDownloadURL = async (file: Downloadable) => {
  if (file.hasOwnProperty('driveName')) {
    const { data: { url } } = await http.get(`/Files/${file.driveName}/${file.id}`);
    return url;
  } else {
    return '/assets/sample.pdf';
  }
};

export const getPreviewURL = async (file: Downloadable) => {
  if (file.hasOwnProperty('driveName')) {
    const { data: { url } } = await http.get(`/Files/preview/${file.driveName}/${file.id}`);
    return url;
  } else {
    return '/assets/sample.pdf';
  }
};
