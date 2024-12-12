let data = fetchData('data.txt');
console.log(data);
function fetchData(url) {
  let temp;
  fetch(url)
    .then(res=>res.text()) 
    .then(text => { 
      temp = text.split("\n");
    });
  return temp;
}
