var temp;

prepareData('data.txt');

console.log(data);

function getData() {
  var data = temp
}

function prepareData(url) {
  fetch(url)
    .then(res=>res.text()) 
    .then(text => { 
      temp = text.split("\n");
      console.log(temp);
  });
  getData();
}
