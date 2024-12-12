var temp;
fetchData('data.txt');
let data = temp;

console.log(data);
function fetchData(url) {
  fetch(url)
    .then(res=>res.text()) 
    .then(text => { 
      temp = text.split("\n");
      console.log(temp);
  });
}
