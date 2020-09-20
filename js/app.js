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
var extension = ['jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','png','jpg','jpg','gif','jpg','jpg'];
var rounds= 0;
const firstImgEl = document.getElementById('first-image');
const secondImgEl = document.getElementById('second-image');
const thirdImgEl = document.getElementById('third-image');
const imagesSection = document.getElementById('images-section');


function Product(name,extension){
    this.name = name;
    this.extension = extension;
    this.path = `img/${this.name}.${this.extension}`
    this.votes =0;
    this.display =0;
    Product.all.push(this);
}
Product.all = [];
for (let i=0;i<names.length;i++){
    new Product(names[i],extension[i])
}
console.log(Product.all);

function render(){
    var firstRandom =randomNumber(0,Product.all.length -1);
    var secondRandom =randomNumber(0,Product.all.length-1);
    var thirdRandom =randomNumber(0,Product.all.length -1);
    //console.log('index',secondRandom,'producct',Product.all[secondRandom],'path',Product.all[secondRandom].path);

    if (firstRandom === secondRandom || firstRandom === thirdRandom || secondRandom === thirdRandom) {
        firstRandom = Math.floor(Math.random() * Product.all.length);
        secondRandom = Math.floor(Math.random() * Product.all.length);
        thirdRandom = Math.floor(Math.random() * Product.all.length);
    }
   
    // console.log(displayedImages);


    firstImgEl.src = Product.all[firstRandom].path;
    firstImgEl.alt = Product.all[firstRandom].name;
    secondImgEl.src = Product.all[secondRandom].path;
    secondImgEl.alt = Product.all[secondRandom].name;
    thirdImgEl.src = Product.all[thirdRandom].path;
    thirdImgEl.alt = Product.all[thirdRandom].path;

    // ----
    Product.all[firstRandom].display++;
    Product.all[secondRandom].display++;
    Product.all[thirdRandom].display++;
    // console.log(Product.all[firstRandom].display);
    //----
    rounds++;
    if (rounds === 25) {
        firstImgEl.removeEventListener('click', clickHandler);
        secondImgEl.removeEventListener('click', clickHandler);
        thirdImgEl.removeEventListener('click', clickHandler);
        results();
    }

}
render();


function clickHandler(event){
    for (var i = 0; i < Product.all.length; i++) {
        if (event.target.alt === Product.all[i].name){
            Product.all[i].votes++;
            console.log(Product.all[i].votes)
        }
    }
    render();


}

firstImgEl.addEventListener('click', clickHandler);
secondImgEl.addEventListener('click', clickHandler);
thirdImgEl.addEventListener('click', clickHandler);

//-----results

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
  for (t=0;t<Product.all.length;t++){
       document.getElementById("p").innerText +=names[t]+'  had  '+votes[t]+'  votes and was shown  '+views[t]+'  times.';}
    

}

function randomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1))+ min;
}
