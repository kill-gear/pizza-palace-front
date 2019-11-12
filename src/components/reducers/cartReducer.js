import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  INIT_ITEMS
} from "../actions/action-types/cart-actions";

const initState = {
  items: [],
  total: 0
};

const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItemIndex = state.items.findIndex(item => item.id === action.id);
    let addedItem = state.items[addedItemIndex];
    return {
      ...state,
      items: [
        ...state.items.slice(0, addedItemIndex),
        { ...addedItem, quantity: addedItem.quantity + 1 },
        ...state.items.slice(addedItemIndex + 1, state.items.length)
      ],
      total: state.total + addedItem.price
    };
  }

  if (action.type === REMOVE_ITEM) {
    let removedItemIndex = state.items.findIndex(item => item.id === action.id);
    let removedItem = state.items[removedItemIndex];
    return {
      ...state,
      items: [
        ...state.items.slice(0, removedItemIndex),
        { ...removedItem, quantity: 0 },
        ...state.items.slice(removedItemIndex + 1, state.items.length)
      ],
      total: state.total - removedItem.price * removedItem.quantity
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity -= 1;
    let newTotal = state.total - addedItem.price;
    return {
      ...state,
      total: newTotal
    };
  }
  // console.log(state.total, "Total price");
  if (action.type === INIT_ITEMS) {
    return {
      ...state,
      items: action.items
    };
  }
  return state;
};

export default cartReducer;
