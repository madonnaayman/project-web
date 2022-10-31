let searchInput = document.getElementById('searchInput');
let letterInput = document.getElementById('letterInput');

let SearchValue ,searchResult, searchfinalResult;
 
let letterValue , letterResult , letterfinalResult;



async function getSearchApi(SearchValue) {
    SearchValue = searchInput.value;
    searchResult = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${SearchValue}`);
  
    searchfinalResult = await searchResult.json();
    console.log(searchfinalResult);
    let SearchCartona ='';
for(let i=0 ; i< searchfinalResult.meals.length ; i++ ){
  SearchCartona += `<div class="col-md-6 col-lg-3 gy-4 " >
              
  <div class="meals position-relative overflow-hidden ">
    <img src="${searchfinalResult.meals[i].strMealThumb}" class="w-100 " alt="">
    <div class="layerMeal d-flex align-items-center p-2 ">
      
        <p class="p-2">${searchfinalResult.meals[i].strMeal}</p>
      
    </div>
  </div>
</div>`
}

document.getElementById('rowSearch').innerHTML = SearchCartona ;
     
  };
  searchInput.addEventListener("keyup", getSearchApi);





async function getLetterhApi(letterValue) {
  letterValue = letterInput.value;
    letterResult = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letterValue}`);
  
    letterfinalResult = await letterResult.json();
    console.log(letterfinalResult);
    let letterCartona ='';
for(let i=0 ; i< letterfinalResult.meals.length ; i++ ){
  letterCartona += `<div class="col-md-6 col-lg-3 gy-4 " >
              
  <div class="meals position-relative overflow-hidden ">
    <img src="${letterfinalResult.meals[i].strMealThumb}" class="w-100 " alt="">
    <div class="layerMeal d-flex align-items-center p-2 ">
      
        <p class="p-2">${letterfinalResult.meals[i].strMeal}</p>
      
    </div>
  </div>
</div>`
}

document.getElementById('rowSearch').innerHTML = letterCartona ;
     
  };
  letterInput.addEventListener("keyup", getLetterhApi);









// searchInput.addEventListener('click' , getSearchApi(SearchValue));
// function getSearchApi(){




// }
// function search(){




// }



$(document).ready(function(){
  $('#loading').fadeOut(2000 , function(){

   $('body').css('overflow', 'visible')
  });

})


