var names = [
  'bag',
  'banana',
  'bathroom',
  'boots',
  'breakfast',
  'bubblegum',
  'chair',
  'cthulhu',
  'dog-duck',
  'dragon',
  'pen',
  'pet-sweep',
  'scissors',
  'shark',
  'sweep',
  'tauntaun',
  'unicorn',
  'usb',
  'water-can',
  'wine-glass',
];
var extension = ['jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'png', 'jpg', 'jpg', 'gif', 'jpg', 'jpg'];
var rounds = 0;
const firstImgEl = document.getElementById('first-image');
const secondImgEl = document.getElementById('second-image');
const thirdImgEl = document.getElementById('third-image');
const imagesSection = document.getElementById('images-section');
var previousImages = [];

//create a constructor
function Product(name, extension) {
  this.name = name;
  this.extension = extension;
  this.path = `img/${this.name}.${this.extension}`
  this.votes = 0;
  this.display = 0;
  Product.all.push(this);
}
Product.all = [];
for (let i = 0; i < names.length; i++) {
  new Product(names[i], extension[i])
}
console.log(Product.all);

//store data to  local storage 
function updateProduct() {
  var productString = JSON.stringify(Product.all);
  localStorage.setItem('products', productString);
}
function getProduct() {
  var productString = localStorage.getItem('products');
  var productsArray = JSON.parse(productString);
  console.log('arr', productsArray);
  if (productsArray) {
    for (i = 0; i < productsArray.length; i++) {
      new Product(
        productsArray[i].name,
        productsArray[i].extension
       
      );
      Product.all[i].votes+=productsArray[i].votes; 


    }
    
    render();
    getProduct();
    
  }

}

//function to pick 3 random numbers and to check if they are unique and unduplicated
function render() {
  var firstRandom = randomNumber(0, Product.all.length - 1);
  var secondRandom = randomNumber(0, Product.all.length - 1);
  var thirdRandom = randomNumber(0, Product.all.length - 1);

  while (firstRandom === secondRandom || firstRandom === thirdRandom || secondRandom === thirdRandom || previousImages.includes(firstRandom) || previousImages.includes(secondRandom) || previousImages.includes(thirdRandom)) {
    firstRandom = randomNumber(0, Product.all.length - 1);
    secondRandom = randomNumber(0, Product.all.length - 1);
    thirdRandom = randomNumber(0, Product.all.length - 1);
  }
  previousImages[0] = firstRandom;
  previousImages[1] = secondRandom;
  previousImages[2] = thirdRandom;
  //---


  firstImgEl.src = Product.all[firstRandom].path;
  firstImgEl.alt = Product.all[firstRandom].name;
  secondImgEl.src = Product.all[secondRandom].path;
  secondImgEl.alt = Product.all[secondRandom].name;
  thirdImgEl.src = Product.all[thirdRandom].path;
  thirdImgEl.alt = Product.all[thirdRandom].name;

  // ----
  Product.all[firstRandom].display++;
  Product.all[secondRandom].display++;
  Product.all[thirdRandom].display++;
  
  //----
  rounds++;
 

}
render();

//create event to make images clickable 
function clickHandler(event) {
  for (var i = 0; i < Product.all.length; i++) {
    if (event.target.alt === Product.all[i].name) {
      Product.all[i].votes++;
      console.log(Product.all[i].votes)
    }
  }
  render();
 
  if (rounds === 25) {
    results();
    addechart();
    imagesSection.removeEventListener('click', clickHandler);
    updateProduct();
  }
  
  


}
imagesSection.addEventListener('click', clickHandler);

//-----results

// function results() {
//     var names = [];
//     var votes = [];
//     var views = [];
//   for (var i = 0; i < Product.all.length; i++) {
//     names.push(Product.all[i].name);
//     votes.push(Product.all[i].votes);
//     views.push(Product.all[i].display);
//   }

//console.log(names);

//console.log(votes);

//console.log(views);


// }


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// creat a chart to display the results for votes and views.
function addechart() {
  var ctx = document.getElementById('myChart');
  var names = [];
  var votes = [];
  var views = [];
  for (var i = 0; i < Product.all.length; i++) {
    names.push(Product.all[i].name);
    votes.push(Product.all[i].votes);
    views.push(Product.all[i].display);
  }
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [
        {
          label: '# of Votes',
          data: votes,
          backgroundColor: [
            'rgb(236, 100, 74)',
            'rgb(236, 100, 74)',
            'rgb(236, 100, 74)',
            'rgb(236, 100, 74)',
            'rgb(236, 100, 74)',
            'rgb(236, 100, 74)',
            'rgb(236, 100, 74)',
            'rgb(236, 100, 74)',
            'rgb(236, 100, 74)',
            'rgb(236, 100, 74)',
            'rgb(236, 100, 74)',
            'rgb(236, 100, 74)',
            'rgb(236, 100, 74)',
            'rgb(236, 100, 74)',
            'rgb(236, 100, 74)',
            'rgb(236, 100, 74)',
            'rgb(236, 100, 74)',
            'rgb(236, 100, 74)',
            'rgb(236, 100, 74)',
            'rgb(236, 100, 74)',
            


          ],
         

        }, {
          label: 'views',
          data: views,
          backgroundColor: [
            'rgba(255, 255, 255,.4)',
            'rgba(255, 255, 255,.4)',
            'rgba(255, 255, 255,.4)',
            'rgba(255, 255, 255,.4)',
            'rgba(255, 255, 255,.4)',
            'rgba(255, 255, 255,.4)',
            'rgba(255, 255, 255,.4)',
            'rgba(255, 255, 255,.4)',
            'rgba(255, 255, 255,.4)',
            'rgba(255, 255, 255,.4)',
            'rgba(255, 255, 255,.4)',
            'rgba(255, 255, 255,.4)',
            'rgba(255, 255, 255,.4)',
            'rgba(255, 255, 255,.4)',
            'rgba(255, 255, 255,.4)',
            'rgba(255, 255, 255,.4)',
            'rgba(255, 255, 255,.4)',
            'rgba(255, 255, 255,.4)',
            'rgba(255, 255, 255,.4)',
            'rgba(255, 255, 255,.4)',
            
          ],


         
          barThickness: 'flex'
        }]


    },

    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

function results() {
  var names = [];
for (var i = 0; i < Product.all.length; i++) {
  names.push(Product.all[i].name);
}
//console.log(names);
var votes = [];
for (var j = 0; j < Product.all.length; j++) {
  votes.push(Product.all[j].votes);
}
//console.log(votes);
var views = [];
for (var f = 0; f < Product.all.length; f++) {
  views.push(Product.all[f].display);
}
//console.log(views);
var answer=document.getElementById('answer')
    for (t=0;t<Product.all.length;t++){
     var pelm=document.createElement('p');
     console.log(pelm);
     answer.appendChild(pelm);
      pelm.innerText =names[t]+'  had  '+votes[t]+'  votes and was shown  '+views[t]+'  times.';
  
  }
}
