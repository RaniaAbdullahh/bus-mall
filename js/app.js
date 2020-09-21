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
var previousImages = [];


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

    while (firstRandom === secondRandom || firstRandom === thirdRandom || secondRandom === thirdRandom || previousImages.includes(firstRandom)|| previousImages.includes(secondRandom)|| previousImages.includes(thirdRandom)) {
        firstRandom = randomNumber(0,Product.all.length -1);
        secondRandom = randomNumber(0,Product.all.length -1);
        thirdRandom = randomNumber(0,Product.all.length -1);
    }
    previousImages[0] = firstRandom;
    previousImages[1] = secondRandom;
    previousImages[2] = thirdRandom;
    //console.log('hi',previousImages);


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
        imagesSection.removeEventListener('click', clickHandler);
        // results();
        addechart();
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
    

function randomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1))+ min;
}

function addechart(){
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
                'rgba(255, 99, 132,0.2)',
                'rgba(54, 162, 235,0.2)',
                'rgba(0, 0, 0,0.2)',
                'rgba(75, 192, 192,0.2)',
                'rgba(153, 102, 255,0.2)',
                'rgba(255, 159, 64,0.2)',
                'rgba(51,255,51,0.2)',
                'rgba(255,0,127,0.2)',
                'rgba(204,0,204,0.2)',
                'rgba(255,0,0,0.2)',
                'rgba(255,255,102,0.2)',
                'rgba(0,204,204,0.2)',
                'rgba(76,0,153,0.2)',
                'rgba(102,255,255,0.2)',
                'rgba(153,0,76,0.2)',
                'rgba(102,204,0,0.2)',
                'rgba(153,51,255,0.2)',
                'rgba(255,128,0,0.2)',
                'rgba(51,102,0,0.2)',
                'rgba(255,255,255,0.2)',


              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            
            },{
                label: 'views',
                data: views,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(0, 0, 0)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                    'rgb(51,255,51)',
                    'rgb(255,0,127)',
                    'rgb(204,0,204)',
                    'rgb(255,0,0)',
                    'rgb(255,255,102)',
                    'rgb(0,204,204)',
                    'rgb(76,0,153)',
                    'rgb(102,255,255)',
                    'rgb(153,0,76)',
                    'rgb(102,204,0)',
                    'rgb(153,51,255)',
                    'rgb(255,128,0)',
                    'rgb(51,102,0)',
                    'rgb(255,255,255)',
                  ],
                

                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                  ],

                borderWidth: 2,
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
            
          
          
            
              
                
                  
                
              
            
          
        
      
    
      
        

