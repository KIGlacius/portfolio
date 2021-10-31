export const state = {
  nutrition: {},
};

export const searchResults = async function () {
  const searchInput = document.querySelector(".search-input").value;
  const res = await fetch(
    `https://trackapi.nutritionix.com/v2/search/instant?query=${searchInput}&detailed=true`,
    {
      headers: {
        "x-app-id": "afe9b912",
        "x-app-key": "39fe2918a7b2da99e5ebb9c3b5ce6d1f",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`${res.status}`);
  }

  const data = await res.json();
  state.nutrition = {
    foodName:
      data.common[0].food_name.slice(0, 1).toUpperCase() +
      data.common[0].food_name.slice(1),
    photo: data.common[0].photo.thumb,
    servingQuantity: data.common[0].serving_qty,
    servingUnit: data.common[0].serving_unit,
    servingWeightInGrams: data.common[0].serving_weight_grams,
    calories: data.common[0].full_nutrients[4].value,
    fat: data.common[0].full_nutrients[1].value,
    carbs: data.common[0].full_nutrients[2].value,
    protein: data.common[0].full_nutrients[0].value,
  };
};
