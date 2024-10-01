export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
}

export const getPagesArray = (totaPages) => {
  let result = [];
  for (let i = 0; i < totaPages; i++) {
   result.push(i+1)    
  }
  return result;
}