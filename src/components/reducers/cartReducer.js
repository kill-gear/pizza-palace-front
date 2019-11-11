import Item1 from "../../images/item1.jpg";
import Item2 from "../../images/item2.jpg";
import Item3 from "../../images/item3.jpg";
import Item4 from "../../images/item4.jpg";
import Item5 from "../../images/item5.jpg";
import Item6 from "../../images/item6.jpg";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY
} from "../actions/action-types/cart-actions";
import { stat } from "fs";

const initState = {
  items: [
    {
      id: 1,
      title: "Winter body",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1,
      quantity: 0
    },
    {
      id: 2,
      title: "Adidas",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2,
      quantity: 0
    },
    {
      id: 3,
      title: "Vans",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3,
      quantity: 0
    },
    {
      id: 4,
      title: "White",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Item4,
      quantity: 0
    },
    {
      id: 5,
      title: "Cropped-sho",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Item5,
      quantity: 0
    },
    {
      id: 6,
      title: "Blues",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item6,
      quantity: 0
    }
  ],
  addedItems: [],
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
  return state;
};

export default cartReducer;
