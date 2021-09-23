import $ from 'jquery'; 
var moment = require('moment');

export function amountFormat(value, currency, toFixedPoint){
  var currencyPrefix = '';
  if(currency === "INR"){
    currencyPrefix = '₹';
  } else if(currency === "USD"){
    currencyPrefix = '$';
  }
  if(isNaN(value)){
    return currencyPrefix+"0";
  }
  if(toFixedPoint === undefined){
    value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
else{
  value = parseFloat(value);
  if(toFixedPoint === undefined){
    toFixedPoint = 2;
  }
  value = value.toFixed(toFixedPoint).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  }

  return currencyPrefix+value;

}
export function toHtml(str_html){
  return <div dangerouslySetInnerHTML = {{__html : str_html }}/>;
}

