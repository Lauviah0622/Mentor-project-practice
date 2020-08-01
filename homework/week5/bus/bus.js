const request = require('request');
const busNum = process.argv[2];
const baseURL = 'https://pda.5284.gov.taipei/MQS/businfo2.jsp'

function getRouteURL(name) {
  return `${baseURL}?routename=${encodeURI(name)}`
}

function getBusInfo(url, callback) {
  request(url, (err, response, body) => {
    if (err) {
      callback(err)
    }
    callback(body)
  })
}

getBusInfo(getRouteURL(busNum), (body) => {
  const tdData = filtIntoTd(body);
  let result = tdData.map(e => removeContentInParentheses(e, " "))
    .map(e => e.trim())

    .map(e => {
      function getTargetInfo(splitedSentenceArr, targetArr, excludes) {
        const isIncludesTargets = (word, excludes, ...targets) => {
          let isInclude = false;
          targets.forEach(target => {
            if (word.match(target)) isInclude = true
          })
          return excludes ? !isInclude : isInclude
        };

        return splitedSentenceArr.filter(word => {
          return isIncludesTargets(word, excludes, ...targetArr);
        })[0]
      }
      const isIncludesTargets = (word, excludes, ...targets) => {
        let isInclude = false;
        targets.forEach(target => {
          if (word.match(target)) isInclude = true
        })
        return excludes ? !isInclude : isInclude
      };
      let arr = e.split(/ +/g);
      let state = getTargetInfo(arr, [ /\d+分/g, '將到站', '未發車'], false);
      let busID = getTargetInfo(arr, ['-'], false);

      let station = getTargetInfo(arr, [ /\d+分/g, '將到站', '未發車', '-'], true);
      return {
        station,
        state,
        busID: busID || "no Bus"
      }
    })
  result.pop()
  console.log(result)
})

function filtIntoTd(data) {
  let result = [];
  let start = 0;
  while (start >= 0) {
    start = data.indexOf('<tr class="ttego');
    let end = data.indexOf('</tr>', start);
    const tdContent = data.slice(start, end);
    data = data.replace(tdContent, "")
    result.push(tdContent);
  }
  return result
}

function removeContentInParentheses(data, subs) {
  let start = 0;
  let result = data
  while (start >= 0) {
    start = result.indexOf('<');
    let end = result.indexOf('>', start);
    const target = result.slice(start, end + 1);
    result = result.replace(target, subs);
  }
  return result
}