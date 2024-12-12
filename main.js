var temp;

prepareData('data.txt');

function getData() {
  var data = temp
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
