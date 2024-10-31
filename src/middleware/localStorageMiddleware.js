export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type.startsWith("cart/")) {
    const cartState = store.getState().cart;
    localStorage.setItem("cartState", JSON.stringify(cartState));
  }
  return result;
};
