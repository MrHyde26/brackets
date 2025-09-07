module.exports = function check(str, bracketsConfig) {
  const bracketsPairs = bracketsConfig.map((arr) => arr.join(''));
  let currentStr = str;
  let changed = true;

  while (changed && currentStr.length > 0) {
    changed = false;

    const prevLength = currentStr.length;

    for (let i = 0; i < bracketsPairs.length; i += 1) {
      currentStr = currentStr.replace(bracketsPairs[i], '');
    }

    if (currentStr.length < prevLength) {
      changed = true;
    }
  }

  return currentStr.length === 0;
};
