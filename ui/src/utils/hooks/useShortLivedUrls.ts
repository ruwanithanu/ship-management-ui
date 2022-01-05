import { Downloadable } from '@/types';
import { getDownloadURL, getPreviewURL } from '@/api/';

const previewCache: any = {};
const downloadCache: any = {};

export const useShortLivedUrls = (file: Downloadable ) => {

  const isExpired = (cache: any) => {
    const now = (new Date()).getTime();
    const elapsed = now - cache.timestamp;
    return elapsed > 540000; // 9 min TTL
  };

  const getCacheTimeStamp = (url: string, cache: any) => {
    const thisTime = (new Date()).getTime(); 
    if (!cache) return thisTime;
    return cache.url !== url ? thisTime : cache.timestamp + 500;
  };

  const fetchPreviewUrl = async () => {
    const id = file.id as string;
    let cache = previewCache[id];

    if (cache === undefined || isExpired(cache)) {
      const url = await getPreviewURL(file);
      const timestamp = getCacheTimeStamp(url, cache);
      cache = { url, timestamp };
      previewCache[id] = cache;
    }
    return cache.url;
  };

  const fetchDownloadUrl = async () => {
    const id = file.id as string;
    let cache = downloadCache[id];

    if (cache === undefined || isExpired(cache)) {
      const url = await getDownloadURL(file);
      const timestamp = getCacheTimeStamp(url, cache);
      cache = { url, timestamp };
      downloadCache[id] = cache;
    } 
    return cache.url;
  };

  return {
    getPreviewUrl: fetchPreviewUrl,
    getDownloadUrl: fetchDownloadUrl
  }

};
