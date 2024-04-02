const getRecipes = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if(request.readyState === 4){
      if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        callback(null, data);
      } else {
        callback("Could not fetch data!", null);
      }
    }
  });

  request.open("GET", "assets/db/db.json");
  request.send();
};

// Displaying recipes on frontend
const displayRecipes = (recipes) => {
    let HTML = ``;
    recipes.forEach((item) => {
      HTML += `
        <div class="col-md-6 col-lg-4 col-xxl-3 d-flex justify-content-center mb-5">
          <div class="card shadow-lg" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top object-fit-fill" alt="${item.name}" style="height: 200px;">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.description}</p>
            </div>
          </div>
        </div>
      `;
    });
    document.querySelector("#display-cards").innerHTML = HTML;
};

// Iteration for filtering data
const filterRecipes = (searchValue, recipes) => {
  return recipes.filter((recipe => recipe.name.toLowerCase().includes(searchValue.toLowerCase())));
}

// Displaying filtered data
const performSearch = () => {
  const searchValue = document.querySelector("#search-input").value;
  getRecipes((err, data) => {
    if(err){
      console.log(err);
    } else {
      const filteredRecipe = filterRecipes(searchValue, data);
      if(searchValue !== "" && filteredRecipe.length === 0){
        let divNotFoundHTML = `
          <div class="col d-flex flex-column align-items-center">
            <h5 class="fw-light mb-5">Ooops... Recipe not found!</h5>
            <img src="https://cdn.dribbble.com/userupload/10454226/file/original-cfde1277cf7a96bc6ec7c72efa0b1b49.png?resize=400x300&vertical=center" class="rounded-circle" width="1000" alt="Food Not Found">
          </div>
        `;
        document.querySelector("#display-cards").innerHTML = divNotFoundHTML;
      } else {
        displayRecipes(filteredRecipe);
      }
    }
  })
}

// Click event for search button
document.querySelector("#btn-search").addEventListener("click", () => {
  performSearch();
})

// Keypress event when hitting enter key on keyboard
document.querySelector("#search-input").addEventListener("keypress", (e) => {
  if(e.key === 'Enter') {
    performSearch();
  }
});

// Input event, displays all recipe if search field is empty
document.querySelector("#search-input").addEventListener("input", (e) => {
  const searchValue = e.target.value;
  if(searchValue !== "") return;
  getRecipes((err, data) => {
    if(err){
      console.log(err);
    } else {
      displayRecipes(data);
    }
  });
});

// Focus event, empty text on search field when focused/clicked.
document.querySelector("#search-input").addEventListener("focus", () => {
  document.querySelector("#search-input").value = "";
  const searchValue = document.querySelector("#search-input").value;

  if(searchValue !== "") return;

  getRecipes((err, data) => {
    if(err){
      console.log(err);
    } else {
      displayRecipes(data);
    }
  });
});

// First initialization to display data
getRecipes((err, data) => {
  if(err){
    console.log(err);
  } else {
    displayRecipes(data);
  }
});

