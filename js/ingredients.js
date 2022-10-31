let IngredientsResult ,IngredientsfinalResult ,nameIngredient ,DescIngredient ,IngredientName  ,textMealIngredient , imgMealIngredient;


let ingredientCartona =''
let IngredientCartona =''


getIngredientsApi();

async function getIngredientsApi() {
    IngredientsResult = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
  
    IngredientsfinalResult = await IngredientsResult.json();
    console.log(IngredientsfinalResult);
  
    showIngredientsApi() ;
    showCurrentIngredient();
  
  };

  function showIngredientsApi() {
    for (let i = 0; i < 20 ; i++) {
  
        nameIngredient = IngredientsfinalResult.meals[i].strIngredient;
        DescIngredient = IngredientsfinalResult.meals[i].strDescription;

        ingredientCartona += ` <div class="col-md-6 col-lg-3 my-3 ">
        <div  class=" rounded">
            <div class="post ">
                <i class="fa-solid fa-bowl-food fa-3x "></i>
                <h2 class="text-white nameIngredient">${nameIngredient}</h2>
                <p class="text-white limit-width">${DescIngredient}</p>
            </div>
        </div>
    </div>`
  
    }
    document.getElementById('rowIngredients').innerHTML = ingredientCartona;
  
  };


  function showCurrentIngredient() {

    document.addEventListener("click", function (e) {
      console.log(e.target)
      
      if ((e.target.classList.contains("nameIngredient")) ) {
        IngredientName = e.target.innerText;
        console.log(IngredientName);
        IngredientMealsApi(IngredientName);
      }
    })
   
};

async function IngredientMealsApi(IngredientName){
   
    IngredientMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${IngredientName}`);
    
    IngredientMealsResult = await IngredientMeals.json();
        console.log(IngredientMealsResult);

        for (let i = 0; i < IngredientMealsResult.meals.length ; i++) {
      
            imgMealIngredient = IngredientMealsResult.meals[i].strMealThumb;
            textMealIngredient = IngredientMealsResult.meals[i].strMeal

           
            IngredientCartona += ` <div class="col-md-6 col-lg-3 gy-4 " >
              
            <div class="meals position-relative overflow-hidden ">
              <img src="${imgMealIngredient}" class="w-100 " alt="">
              <div class="layerMeal d-flex align-items-center p-2 ">
                
                  <p class="p-2">${textMealIngredient}</p>
                
              </div>
            </div>
          </div>`
      
        }
        document.getElementById('rowIngredients').innerHTML = IngredientCartona;
       
    };




    $(document).ready(function(){
        $('#loading').fadeOut(2000 , function(){
 
         $('body').css('overflow', 'visible')
        });
 
     })
 