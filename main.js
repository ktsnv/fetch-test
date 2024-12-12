var temp;
var data;

prepareData('data.txt');

function getData() {
  data = temp;
  console.log(data);
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
