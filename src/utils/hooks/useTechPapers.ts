import {
  TechPaperFiles,
  TechPaperFileField,
  SortOrder
} from '@/types';

const { REACT_APP_PER_PAGE } = process.env;
const pageSize = parseInt(REACT_APP_PER_PAGE as string, 10);

export const useTechPapers = (data: TechPaperFiles) => {

  const sortFiles = (sortBy: TechPaperFileField, sortOrder: SortOrder) => {
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
    getPageSlice
  }
};
