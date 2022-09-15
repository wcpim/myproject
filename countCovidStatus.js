const { template } = require('@babel/core')

//64130500076 วริษฐา จันทร์วันเพ็ญ
function countCovidStatus(covidStatusArray) {
  let a = covidStatusArray;
  
  if (a==null || a==undefined){
    return undefined;
  }else if(a!=='negative and low risk' || a!=='negative and high risk' || a!=='positive'){
    return { };
  }else if(a!=='negative and low risk' && a!=='negative and high risk' && a!=='positive'){
    return { };
  }else { 
    const counts = {};
    a.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    return counts
  }
}
module.exports = countCovidStatus

