module.exports = function toReadable (number) {
   let arr = number.toString().split('')
   let hun = ['','one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred'];
   let dec = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
   let un = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven', 'twelve','thirteen','fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
   let strFromNum = '';
    if(number===0) return 'zero';
    if(number>=0 && number<=19) {
       strFromNum = un[number]
    }
    if(number>19 && number <=999) {
       let newArray = [].concat(arr);
       if(arr.length==2) {
          newArray[arr.length-1] ? newArray[arr.length-1] = un[arr[arr.length-1]] : null;
          newArray[arr.length-2] ? newArray[arr.length-2] = dec[arr[arr.length-2]] : null;
       }
       if(arr[arr.length-3]) {
          let part = +arr.slice(arr.length-2).join('');
          if(part>=10 && part <=19) {
             newArray = [newArray[arr.length-3], part]
             newArray[newArray.length-1] ? newArray[newArray.length-1] = un[part] : null;
             newArray[newArray.length-2] ? newArray[newArray.length-2] = hun[newArray[newArray.length-2]] : null;
          }else {
               newArray[arr.length-1] ? newArray[arr.length-1] = un[arr[arr.length-1]] : null;
               newArray[arr.length-2] ? newArray[arr.length-2] = dec[arr[arr.length-2]] : null;
               newArray[arr.length-3] ? newArray[arr.length-3] = hun[arr[arr.length-3]] : null;
          }
       }

          newArray.forEach((item, i) => {
             if(item==='') newArray.splice(i,1)
          });
       strFromNum = newArray.join(" ").trim()
    }
   return strFromNum
}
