let AreaName ,areaResult , areafinalResult  ,imgMealArea , textMealArea ,AreaMeals;
let areaCartona ='';
let MealsCartona ='' ;



getAreaApi();

async function getAreaApi() {
  areaResult = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);

  areafinalResult = await areaResult.json();
  console.log(areafinalResult);

  showAreaApi();
  showCurrentArea();

};
function showAreaApi() {
    for (let i = 0; i < 20 ; i++) {
  
        nameArea = areafinalResult.meals[i].strArea;
      
      areaCartona += ` <div class="col-md-6 col-lg-3 my-3 ">
      <div class="rounded position-relative  m-auto w-50">
          <div  class="pb-3 ">
              <i class="fa-solid fa-city fa-3x  ps-4 "></i>
              <h2 class="text-white  text-center w-75">${nameArea}</h2>
          </div>
      </div>
  </div>`
  
    }
    document.getElementById('rowArea').innerHTML = areaCartona;
  
  };

  function showCurrentArea() {

    document.addEventListener("click", function (e) {
      console.log(e.target)
      
      if ((e.target.classList.contains("text-center")) || (e.target.classList.contains("pb-3")) || (e.target.classList.contains("col-md-6"))) {
        AreaName = e.target.innerText;
        console.log(AreaName);
        AreaMealsApi(AreaName)
      }
    })
   
};

async function AreaMealsApi(AreaName){
   
    AreaMeals = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?a=${AreaName}`);
    
    AreaMealsResult = await AreaMeals.json();
        console.log(AreaMealsResult);

        for (let i = 0; i < AreaMealsResult.meals.length ; i++) {
      
            imgMealArea = AreaMealsResult.meals[i].strMealThumb;
            textMealArea = AreaMealsResult.meals[i].strMeal

           
          MealsCartona += ` <div class="col-md-6 col-lg-3 gy-4  "> 
           
          <div class="meals position-relative overflow-hidden ">
            <img src="${imgMealArea}" class="w-100 "  alt="">
            <div class="layerMeal d-flex align-items-center p-2 ">
              
                <p>${textMealArea}</p>
              
            </div>
          </div>
        </div>`
      
        }
        document.getElementById('rowArea').innerHTML = MealsCartona;
       
    };


    $(document).ready(function(){
      $('#loading').fadeOut(2000 , function(){

       $('body').css('overflow', 'visible')
      });

   })


