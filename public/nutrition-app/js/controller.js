import * as model from "./model.js";
import nutritionView from "./view.js";

const init = function () {
  const controlSearchResults = async function () {
    try {
      nutritionView.loadingMsg();

      await model.searchResults();

      nutritionView.render(model.state.nutrition);
    } catch (err) {
      nutritionView.searchError();
    }
  };

  nutritionView.addHandlerRender(controlSearchResults);
};

init();
