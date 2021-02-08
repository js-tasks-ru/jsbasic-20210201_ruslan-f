/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let result = str.toUpperCase()
  if (result.includes('1xBet'.toUpperCase()) || result.includes('XXX')) {
    return true;
  }

  return false;
}
