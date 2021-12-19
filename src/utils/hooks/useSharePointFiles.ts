import {
  SharePointfile,
  SharePointfiles,
  SharePointfileField,
  SortOrder
} from '@/types';

const { REACT_APP_PER_PAGE } = process.env;
const pageSize = parseInt(REACT_APP_PER_PAGE as string, 10);

export const useSharePointFiles = (data: SharePointfiles) => {

  const sortFiles = (sortBy: SharePointfileField, sortOrder: SortOrder) => {
    return (data as Array<any>).sort((a, b) => {
      if (sortBy && a[sortBy] && b[sortBy]) {
        if (a[sortBy] === b[sortBy]) {
          return 0;
        } else if (sortOrder === 'ASC') {
          return a[sortBy] < b[sortBy] ? -1 : 1;
        } else {
          return a[sortBy] > b[sortBy] ? -1 : 1;
        }
      }
      return 0;
    });
  };

  const getParentFolder = (parentId: string | undefined) => {
    if (parentId !== undefined && parentId !== '') {
      return data.find((file: SharePointfile)  => file.id === parentId);
    }
    return undefined;
  };

  const getPageSlice = (page: number) => {
    const dataLength = data.length;
    const sliceStart: number = (page - 1) * pageSize;
    let sliceEnd: number = sliceStart + pageSize;
    if (sliceEnd > dataLength - 1) {
      sliceEnd = dataLength;
    }
    return { sliceStart, sliceEnd };
  };

  return {
    sortFiles,
    getParentFolder,
    getPageSlice
  }

};
