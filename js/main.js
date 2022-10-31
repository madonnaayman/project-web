let result, finalResult, meals, srcMeal, nameMeal;
let flag=-1 ;

let cartona = '';

getMainApi();

async function getMainApi() {
  result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);

  finalResult = await result.json();
  console.log(finalResult);

  showMainApi();

  detailsPage();
};

function showMainApi() {
  for (let i = 0; i < finalResult.meals.length; i++) {

    srcMeal = finalResult.meals[i].strMealThumb;
    nameMeal = finalResult.meals[i].strMeal;



    cartona += `<div class="col-md-6 col-lg-3 gy-4 " >
              
       <div class="meals position-relative overflow-hidden ">
         <img src="${srcMeal}" class="w-100 " alt="">
         <div class="layerMeal d-flex align-items-center p-2 ">
           
             <p class="p-2">${nameMeal}</p>
           
         </div>
       </div>
     </div>`

  }

  document.getElementById('Meals').innerHTML = cartona;

};


function detailsPage() {

  document.addEventListener("click", function (e) {
    console.log(e.target)
    let arrMeals = [];
    if ((e.target.classList.contains("layerMeal")) || (e.target.classList.contains("meals")) || (e.target.classList.contains("col-md-6")) || (e.target.classList.contains("w-100")) || (e.target.classList.contains("p-2"))) {
      mealName = e.target.innerText
      console.log(finalResult);
      console.log(mealName);
      for (let i = 0; i < 20; i++) {
        if (mealName == finalResult.meals[i].strMeal) {

          flag = i
        }

      }
      if (flag != -1) {
        arrMeals.push(finalResult.meals[flag]);
        // let btnTag = document.getElementById("tag");

        console.log(arrMeals);
      }

      let details = window.open('details.html', "_self")

      details.document.write(`
      <head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/stylesheet.css">
  <link rel="stylesheet" href="css/all.min.css">
</head>
<body>
  <section class="details pt-5">

    <div class="menu position-fixed d-flex top-0 start-0 bottom-0 ">
      <div class="nav-options  pt-3">
        <div class="collapse navbar-collapse pe-5 me-5 ps-3 " id="navbarNavDropdown">
          <ul class="navbar-nav pe-5">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="search.html">Search</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Categories.html">Categories</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="area.html">Area</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="ingredients.html">Ingredients</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact Us</a>
            </li>
            
          </ul>
        </div>        
          <div class=" position-absolute bottom-0">
            <div class="pb-2 ps-3">
              <a><i class="fab fa-facebook-f pe-1"></i></a>
            <a><i class="fab fa-twitter pe-1"></i></a>
            <a><i class="fas fa-globe pe-1"></i></a>
            </div>
            <div class="pb-5 text-muted">
              <span>Copyright Â© 2019 All Rights <br> Reserved.</span>
            </div>
    
          </div>
        
    </div>
         <div class="parent-nav ">
        <nav class="navbar  bg-light h-100 ">
          <div class=" d-inline-block">
            <div class=" parent-img "><img src="images/logo.png" class="logo  ms-2 me-2 bg-light" alt=""></div>
            <div class=" parent-btn ms-1">
              <button class="navbar-toggler border-0 menu-btn" type="button" id="menuButton" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon d-block" id="lines"></span>
                <i class="fa-sharp fa-solid fa-xmark fa-2xl pb-3 d-none" id="close"></i>
              </button>
            </div>       
            <div class="icons bg-info ps-4">
              <div class="position-absolute bottom-0">
               <div class=" ">
                 <i class="fas fa-globe mb-2"></i>
               </div>
               <div class=" mb-3">
                 <i class="fas fa-share-alt "></i>
               </div>
              </div>
              
             </div>
          </div>
        </nav>
      </div>
      </div>
    <div class="container">
      <div class="row height d-flex pt-5 text-white p-5  ">

        <div class="col-md-4">
          <div class="p-4">
            <img src="${arrMeals[0].strMealThumb}" class="w-100" alt="">
            <br>
            <h1 class="text-center">${arrMeals[0].strMeal}</h1>
          </div>

        </div>
        <div class="col-md-8 ps-0 pt-3 ">
          <div class="steps pe-3">
            <h2>Instructions
            </h2>
            <p>
            ${arrMeals[0].strInstructions}
            </p>

            <p><span class="fw-bolder">Area :</span>${arrMeals[0].strArea} </p>
            <p><span class="fw-bolder">Category :</span>${arrMeals[0].strCategory}</p>
            <h3>Recipes : </h3>

            <ul class="d-flex flex-lg-wrap ulRecipes ps-0" id="">
              <li class="my-3 mx-1 p-1 alert-success rounded">1 cup  Lentils</li>
              <li class="my-3 mx-1 p-1 alert-success rounded">1 large Onion</li>
              <li class="my-3 mx-1 p-1 alert-success rounded">1 large Carrots</li>
              <li class="my-3 mx-1 p-1 alert-success rounded">1 tbs Tomato Puree</li>
              <li class="my-3 mx-1 p-1 alert-success rounded">2 tsp Cumin</li>
              <li class="my-3 mx-1 p-1 alert-success rounded">1 tsp  Paprika</li>
              <li class="my-3 mx-1 p-1 alert-success rounded">1/2 tsp Mint</li>
              <li class="my-3 mx-1 p-1 alert-success rounded">1/2 tsp Thyme</li>
              <li class="my-3 mx-1 p-1 alert-success rounded">1/4 tsp Black Pepper</li>
              <li class="my-3 mx-1 p-1 alert-success rounded">1/4 tsp Red Pepper Flakes</li>
              <li class="my-3 mx-1 p-1 alert-success rounded">4 cups  Vegetable Stock</li>
              <li class="my-3 mx-1 p-1 alert-success rounded">1 cup  Water</li>
              <li class="my-3 mx-1 p-1 alert-success rounded">Pinch Sea Salt</li>              
            </ul>
            <h3>Tags : </h3>
            <ul class=" ulTags d-flex ps-0" id="tag">
              <li class="my-3 mx-1 p-1 rounded">${arrMeals[0].strTags}</li>
            </ul>
            <a class="btn source text-white" target="_blank" href="${arrMeals[0].strSource}">Source</a>
            <a class="btn youtube text-white" target="_blank" href="${arrMeals[0].strYoutube}">Youtub</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <script src="js/bootstrap.bundle.min.js"></script>
  <script src="js/jquery-3.6.1.min.js"></script>
 
</body>
      `
      )
    }
  })
}


    $(document).ready(function(){
       $('#loading').fadeOut(2000 , function(){

        $('body').css('overflow', 'visible')
       });

    })

