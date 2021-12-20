export const memoize = (func: Function) => {
  const results = <any>{};
  return (...args: Array<any>) => {
    const argsKey = JSON.stringify(args);
    if (!results[argsKey]) {
      results[argsKey] = func(...args);
    }
    return results[argsKey];
  };
};

export const download = (url: string) => {
  const a = document.createElement('a');
  a.href = url;
  a.download = url.split('/').pop() || '';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const getPageSlice = (data: Array<any>, page: number, perPage: number) => {
  const dataLength = data.length;
  const sliceStart: number = (page - 1) * perPage;
  let sliceEnd: number = sliceStart + perPage;
  if (sliceEnd > dataLength - 1) {
    sliceEnd = dataLength;
  }
  return { sliceStart, sliceEnd };
};
