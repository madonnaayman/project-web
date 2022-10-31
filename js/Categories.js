let CategoyApi, CategoyResult ,srcCategoy ,nameCategoy ,DescriptionCategoy ,categoryName ;

let cartonaCategoy='';
let cartonacategoriesPage ='' ;


getCategoyApi();

async function getCategoyApi() {
    CategoyApi = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    CategoyResult = await CategoyApi.json();
    console.log(CategoyResult);

    showCategoyApi();
     currentCategory();
   
};

function showCategoyApi() {
    for (let i = 0; i < 14 ; i++) {

        DescriptionCategoy = CategoyResult.categories[i].strCategoryDescription;
        nameCategoy = CategoyResult.categories[i].strCategory;
        srcCategoy = CategoyResult.categories[i].strCategoryThumb;


        cartonaCategoy += `<div class="col-md-6 col-lg-3 my-3 ">
        <div class=" position-relative overflow-hidden ">
            <div class="Category">
                <img src="${srcCategoy}" class="w-100 rounded p-4">
                <div class="layerCategory d-flex align-items-center">
                    <div class=" p-2 text-center font-text">
                        <h2 class="mealHere">${nameCategoy}</h2>
                        <p>${DescriptionCategoy}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    document.getElementById('rowCategoy').innerHTML = cartonaCategoy;

};

async function categoriesPageApi(categoryName) {
    categoriesPageApi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    categoriesPageResult = await categoriesPageApi.json();
    console.log(categoriesPageResult);
    categoriesPage()
};


function categoriesPage(){
            for(let i=0 ; i< categoriesPageResult.meals.length ; i++ ) {
            
             cartonacategoriesPage += `
             
             <div class="col-md-6 col-lg-3 gy-4 " >
              
       <div class="meals position-relative overflow-hidden ">
         <img src="${categoriesPageResult.meals[i].strMealThumb}" class="w-100 " alt="">
         <div class="layerMeal d-flex align-items-center p-2 ">
           
             <p>${ categoriesPageResult.meals[i].strMeal}</p>
           
         </div>
       </div>
     </div>           
             `   
            } 
            document.getElementById('rowCategoy').innerHTML = cartonacategoriesPage;
};


function currentCategory(){
    document.addEventListener("click", function (e) {
        console.log(e.target);
              if ((e.target.classList.contains("Category")) || (e.target.classList.contains("image")) || (e.target.classList.contains("col-md-6")) || (e.target.classList.contains("mealHere"))) {
                  categoryName = e.target.innerText
                console.log(CategoyResult);
                console.log( categoryName);
                categoriesPageApi(categoryName)
              }
})
};

$(document).ready(function(){
    $('#loading').fadeOut(2000 , function(){

     $('body').css('overflow', 'visible')
    });

 })
