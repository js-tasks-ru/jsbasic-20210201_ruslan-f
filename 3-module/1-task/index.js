/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  // ваш код...
  let arr = [];
  for (let i = 0; i < users.length; i++) {
    arr.push(users[i].name);
  }
  return arr;
}
