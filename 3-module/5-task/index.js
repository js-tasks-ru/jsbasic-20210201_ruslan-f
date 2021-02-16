function getMinMax(str) {
  // ваш код...
  let obj = {};
  let arr = str.split(' ') 
  .join()
  .split(',')
  .filter( item => item !== '')
  .map( item => parseFloat(item) )
  .filter( item => !!item);
  
  obj.min = Math.min(...arr);
  obj.max = Math.max(...arr);
  return obj;
}
