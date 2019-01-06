export function isNumber(val) {
  const n = parseFloat(val);
  return isNaN(n) ? false : true;
}

export function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

export function isUndef(v) {
  return v === undefined || v === null;
}

export function isDef(v) {
  return v !== undefined && v !== null;
}

export function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

export function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

export function linkedItemRemove({ items, not, allow }) {
  let len = items.length;
  while (len--) {
    const item = items[len];
    if (item.hasOwnProperty(allow.key)) {
      if (item[allow.key] === allow.value) {
        if (not && item[not.key] === not.value) {
          continue;
        }
        items.splice(len, 1);
      }
    }
  }
}

export function checkDuplication(a, b) {
  let flag = true;
  for (let key in a) {
    if (a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
      if (a[key] !== b[key]) {
        flag = false;
        break;
      }
    }
  }
  return flag;
}
