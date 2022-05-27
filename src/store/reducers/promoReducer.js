// promo-codes reducer

const promosState = {
  promos: [],
};

const promoReducer = (state = promosState, action) => {
  switch (action.type) {
    case "value":
      return state;

    default:
      return state;
  }
};

export default promoReducer;
