class NutritionView {
  #parentElement = document.querySelector(".search-results");
  #data;
  render(data) {
    this.#data = data;
    this.#clear();
    this.#parentElement.insertAdjacentHTML(
      "afterbegin",
      this.#generateMarkup()
    );
  }

  loadingMsg = function () {
    this.#parentElement.innerHTML = "";
    const html = `<div class='loading-message'>Loading...
      </div>`;
    this.#parentElement.insertAdjacentHTML("afterbegin", html);
  };

  searchError = function () {
    const searchResultsEl = document.querySelector(".search-results");
    const searchInputEl = document.querySelector(".search-input");
    searchResultsEl.innerHTML = "";
    searchInputEl.style.borderColor = "red";
    const html = `<div class='fetch-error-message'>Could not retrieve data. Please try again.</div>`;
    searchResultsEl.insertAdjacentHTML("afterbegin", html);
  };

  #clear() {
    this.#parentElement.innerHTML = "";
  }

  addHandlerRender(handler) {
    const searchForm = document.querySelector(".search-form");
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  #generateMarkup() {
    return `<div class="food-info">
      <p class="food food-name">${this.#data.foodName}</p>
      <img class="food food-photo" src='${this.#data.photo}'></img>
  </div>
    <div class="food-serving">
      <p class="food food-serving__quantity">Food Serving Quantity: ${
        this.#data.servingQuantity
      }</p>
      <p class="food food-serving__unit">Food Serving Unit: ${
        this.#data.servingUnit
      }</p>
      <p class="food food-serving__weight">Food Serving Weight (g): ${
        this.#data.servingWeightInGrams
      }</p>
    </div>
    <div class="nutrition-breakdown">
      <p class="food food-calories">Calories (kcal): ${this.#data.calories}</p>
      <p class="food food-fat">Fat (g): ${this.#data.fat}</p>
      <p class="food food-carb">Carbohydrates (g): ${this.#data.carbs}</p>
      <p class="food food-protein">Protein(g): ${this.#data.protein}</p>
    </div>
`;
  }
}
/* <button class="add-food">Add To Daily Tracker</button>; */

export default new NutritionView();
