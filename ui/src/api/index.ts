import { memoize } from '@/utils';
import http from './http';
import { Vessel } from '@/types';

import { Downloadable } from '@/types';

const { REACT_APP_ORG_ID: ORG_ID } = process.env;

export const fetchVessels = memoize(async () => {
  const { data } = await http.get(`/vessels/${ORG_ID}`);
  return data;
});

export const fetchDocuments = memoize(async (aeCode: string) => {
  const { data } = await http.get(`/documents/${aeCode}`);
  return data;
});

export const fetchFinancialVesselReports = memoize(async (vessel: Vessel) => {
  const { data } = await http.get(`/financial/vessel/${vessel.aeCode}/${vessel.name}`);
  return data;
});

export const fetchFinancialFleetReports = memoize(async () => {
  const { data } = await http.get(`/financial/fleet/${ORG_ID}`);
  return data;
});

export const fetchReportsClaims = memoize(async (aeCode: string) => {
  const { data } = await http.get(`/reports/${aeCode}/Claims`);
  return data;
});

export const fetchReportsCommercial = memoize(async (aeCode: string) => {
  const { data } = await http.get(`/reports/${aeCode}/Commercial`);
  return data;
});

export const fetchReportsGallery = memoize(async (aeCode: string) => {
  const { data } = await http.get(`/reports/${aeCode}/Gallery`);
  return data;
});

export const fetchReportsOther = memoize(async (aeCode: string) => {
  const { data } = await http.get(`/reports/${aeCode}/Other%20Reports`);
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
  const { data } = await http.get(`/leadership`);
  return data;
});

export const fetchLookouts = memoize(async () => {
  const { data } = await http.get(`/papers/Lookout`);
  return data;
});

export const fetchPSC = memoize(async () => {
  const { data } = await http.get(`/papers/PSC`);
  return data;
});

export const fetchTechnicalPapers = memoize(async () => {
  const { data } = await http.get(`/papers/Technical%20Papers`);
  return data;
});

export const getDownloadURL = memoize(async (file: Downloadable) => {
  const { data } = await http.get(`/download-url/${file.driveName}/${file.id}`);
  return data;
});

export const getPreviewURL = memoize(async (file: Downloadable) => {
  const { data } = await http.get(`/preview-url/${file.driveName}/${file.id}`);
  return data;
});
