import { memoize } from '@/utils';
import http, { extraHeaders } from './http';
// import axios from 'axios';
import { Vessel } from '@/types';

import { Downloadable } from '@/types';

const { REACT_APP_ORG_ID: ORG_ID } = process.env;

export const fetchVessels = memoize(async () => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Vessels?organizationId=${ORG_ID}`, {
    headers
  });
  return data;
  // const { data } = await axios.get('/vessels');
  // return data;
});

export const fetchDocuments = memoize(async (aeCode: string) => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Vessels/Vessel%20Documents/${aeCode}/Documents/files`, {
    headers
  });
  return data;
});

export const fetchFinancialVesselReports = memoize(async (vessel: Vessel) => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Vessels/Client%20Financial%20Reports/${vessel.aeCode}/${vessel.name}/files`, {
    headers
  });
  return data;
});

export const fetchFinancialFleetReports = memoize(async () => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Vessels/Client%20Financial%20Reports/ZZZ${ORG_ID}/ZZ_REPORTS%20MULTIPLE%20SHIPS/files`, {
    headers
  });
  return data;
});

export const fetchReportsClaims = memoize(async (aeCode: string) => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Vessels/Vessel%20Documents/${aeCode}/Claims/files`, {
    headers
  });
  return data;
});

export const fetchReportsCommercial = memoize(async (aeCode: string) => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Vessels/Vessel%20Documents/${aeCode}/Commercial/files`, {
    headers
  });
  return data;
});

export const fetchReportsGallery = memoize(async (aeCode: string) => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Vessels/Vessel%20Documents/${aeCode}/Gallery/files`, {
    headers
  });
  return data;
});

export const fetchReportsOther = memoize(async (aeCode: string) => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Vessels/Vessel%20Documents/${aeCode}/Other%20Reports/files`, {
    headers
  });
  return data;
});

export const fetchDrawings = memoize(async () => {
  const { data } = await import('../test-utils/mocks/drawings.json');
  return data;
  // const headers = extraHeaders({ domain: 'AETEC' });
  // const { data } = await http.get(`/Vessels/Delivery%20Documents/${aeCode}/Other%20Reports/files`, {
  //   headers
  // });
  // return data;
});

export const fetchLeadership = memoize(async () => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Resources/leadership`, {
    headers
  });
  return data;
});

export const fetchLookouts = memoize(async () => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Resources/Lookout/files`, {
    headers
  });
  return data;
});

export const fetchPSC = memoize(async () => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Resources/PSC/files`, {
    headers
  });
  return data;
});

export const fetchTechnicalPapers = memoize(async () => {
  const headers = extraHeaders({});
  const { data } = await http.get(`/Resources/Technical%20Papers/files`, {
    headers
  });
  return data;
});

export const getDownloadURL = async (file: Downloadable) => {
  const { data: { url } } = await http.get(`/Files/${file.driveName}/${file.id}`);
  return url;
};

export const getPreviewURL = async (file: Downloadable) => {
  const { data: { url } } = await http.get(`/Files/preview/${file.driveName}/${file.id}`);
  return url;
};