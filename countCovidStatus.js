const { template } = require('@babel/core')

//64130500076 วริษฐา จันทร์วันเพ็ญ
function countCovidStatus(covidStatusArray){
  //code here    
  if(covidStatusArray===null || covidStatusArray===undefined)
   return undefined    
   if(covidStatusArray.length===0) return {}
  let negLow=0, negHigh=0, pos=0    
  for(const status of covidStatusArray){
      switch(status){
          case 'negative and low risk': 
              negLow++                
              break            
              case 'negative and high risk':
              negHigh++               
               break            
               case 'positive':
              pos++               
               break       
               }
  }
  const covidStatus={}
  if(pos>0)
       covidStatus.positive=pos    
       if(negHigh>0)
      covidStatus['negative and high risk']=negHigh    
      if(negLow>0)
      covidStatus['negative and low risk']=negLow    
      return covidStatus}
console.log(
  countCovidStatus([
    'negative and low risk',
    'positive',
    'negative and low risk',
    'negative and high risk',
    'positive',
    'negative and low risk'  ])
)
console.log(countCovidStatus(['positive', 'negative and low risk', 'positive']))
console.log(
  countCovidStatus([
    'negative and low risk',
    'positive',
    'negative and low risk',
    'abnormal',
    'negative and high risk',
    'positive',
    ' normal'  ])
)
console.log(countCovidStatus(['covid']))
console.log(countCovidStatus([]))
console.log(countCovidStatus(null))
console.log(countCovidStatus(undefined))

module.exports = countCovidStatus
//
