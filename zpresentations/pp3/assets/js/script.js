const getRecipes = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4) {
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
  recipes.forEach((item, index) => {
    HTML += `
        <div class="col-md-6 col-lg-4 col-xxl-3 d-flex justify-content-center mb-5">
          <div class="card shadow-lg" style="width: 18rem;" data-bs-toggle="modal" data-bs-target="#${index}">
            <img src="${
              item.image
            }" class="card-img-top object-fit-fill" alt="${
      item.name
    }" style="height: 200px;">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.description}</p>
            </div>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="${index}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">${
                  item.name
                }</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body d-flex flex-column">
                <div class="text-center">
                  <img src="${
                    item.image
                  }" class="rounded py-3" alt="" width="200">
                </div>
                <div>
                  <h3>Directions</h3>
                  <ul>${item.directions
                    .map((direction) => `<li>${direction}</li>`)
                    .join("")}</ul>
                </div>
                <div>
                  <h3>Ingredients</h3>
                  <ul>
                    ${item.ingredients
                      .map((ingredient) => `<li>${ingredient}</li>`)
                      .join("")}
                  </ul>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      `;
  });
  document.querySelector("#display-cards").innerHTML = HTML;

  // Get cards and iterate to implement mouseenter/mouseleave event.
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.15)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  });
};

// Iteration for filtering data
const filterRecipes = (searchValue, recipes) => {
  return recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchValue.toLowerCase())
  );
};

// Displaying filtered data
const performSearch = () => {
  const searchValue = document.querySelector("#search-input").value;
  getRecipes((err, data) => {
    if (err) {
      console.log(err);
    } else {
      const filteredRecipe = filterRecipes(searchValue, data);
      if (searchValue !== "" && filteredRecipe.length === 0) {
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
  });
};

// Click event for search button
document.querySelector("#btn-search").addEventListener("click", () => {
  performSearch();
});

// Keypress event when hitting enter key on keyboard
document.querySelector("#search-input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    performSearch();
  }
});

// Input event, displays all recipe if search field is empty
document.querySelector("#search-input").addEventListener("input", (e) => {
  const searchValue = e.target.value;
  if (searchValue !== "") return;
  getRecipes((err, data) => {
    if (err) {
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

  if (searchValue !== "") return;

  getRecipes((err, data) => {
    if (err) {
      console.log(err);
    } else {
      displayRecipes(data);
    }
  });
});

// First initialization to display data
getRecipes((err, data) => {
  if (err) {
    console.log(err);
    let divNotFoundHTML = `
          <div class="col d-flex flex-column align-items-center">
            <h4>${err}</h4>
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/error-404-8808969-7122238.png?f=webp" width="500" alt="Server Error">
          </div>
        `;
      document.querySelector("#display-cards").innerHTML = divNotFoundHTML;
  } else {
    displayRecipes(data);
  }
});

// Selecting what to display on the main-content
document.querySelector("#nav-recipe").addEventListener("click", () => {
  const recipeContent = document.querySelector("#recipe");
  const aboutContent = document.querySelector("#about");
  recipeContent.className = "d-block";
  aboutContent.className = "d-none";
});

document.querySelector("#nav-about").addEventListener("click", () => {
  const recipeContent = document.querySelector("#recipe");
  const aboutContent = document.querySelector("#about");
  recipeContent.className = "d-none";
  aboutContent.className = "d-block";
});

// For the nav links to change design when active
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      navLinks.forEach((link) => {
        link.classList.remove("active-nav");
      });

      navLink.classList.add("active-nav");
    });
  });
});
