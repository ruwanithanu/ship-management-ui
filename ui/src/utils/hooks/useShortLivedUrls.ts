import { Downloadable } from '@/types';
import { getDownloadURL, getPreviewURL } from '@/api/';

const previewCache: any = {};
const downloadCache: any = {};

export const useShortLivedUrls = (file: Downloadable ) => {

  const isExpired = (cache: any) => {
    const now = (new Date()).getTime();
    return (now - cache.timestamp) > 3600000; // 1 hour TTL
  };

  const getPreviewUrl = async () => {
    const id = file.id as string;
    let cache = previewCache[id];

    if (cache === undefined || isExpired(cache)) {
      const url = await getPreviewURL(file);
      const timestamp = (new Date()).getTime();
      cache = {url, timestamp };
      previewCache[id] = cache;
    }
    return cache.url;
  };

  const getDownloadUrl = async () => {
    const id = file.id as string;
    let cache = downloadCache[id];

    if (cache === undefined || isExpired(cache)) {
      const url = await getDownloadURL(file);
      const timestamp = (new Date()).getTime();
      cache = {url, timestamp };
      downloadCache[id] = cache;
    }
    return cache.url;
  };

  return {
    getPreviewUrl,
    getDownloadUrl
  }

};
