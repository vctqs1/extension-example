
function _pick (obj, props) {
  const results = {};

  for (let i = 0; i < props.length; i++) {
    if (typeof obj[props[i]] !== 'undefined') {
      results[props[i]] = obj[props[i]]
    }
  }

  return results
}

function _clear (obj) {
  for (var propName in obj) { 
    if (!obj[propName]) {
      delete obj[propName];
    }
  }
}
module.exports = {
    _clear,
    _pick,
}