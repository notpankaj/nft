import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addToCartWithQty: (state, action) => {
    //   const {product, qty} = action.payload;
    //   if (state.items.find(p => p.id === product.id)) {
    //     state.items = state.items.map(p => {
    //       if (p.id === product.id) {
    //         return {...p, qty: qty};
    //       }
    //       return p;
    //     });
    //   } else {
    //     state.items = [...state.items, {qty: qty, ...product}];
    //   }
    // },
    addToCart: (state, action) => {
      if (state.items.find(product => product.id === action.payload.id)) {
        state.items = state.items.map(product => {
          if (product.id === action.payload.id) {
            return {...product, qty: product.qty + 1};
          }
          return product;
        });
      } else {
        state.items = [...state.items, {qty: 1, ...action.payload}];
      }
    },
    removeToCart: (state, action) => {
      const pro = state.items.find(product => product.id === action.payload.id);
      if (pro?.qty > 1) {
        // decrement
        state.items = state.items.map(pro => {
          if (pro.id === action.payload.id) {
            return {...pro, qty: pro.qty - 1};
          }
          return pro;
        });
      } else {
        //remove
        state.items = state.items.filter(pro => pro.id !== action.payload.id);
      }
    },
  },
});

export const {addToCart,  removeToCart} =
  cartSlice.actions;

// Selector
export const selectCartItems = state => state.cart.items;
export const selectCartItemsWithId = (state, id) => {
  return state.cart.items.find(item => item.id === id);
};

// export const selectCartTotal = state =>
//   state.cart.items.reduce((total, item) => {
//     let currentValue =
//       item.price.replaceAll(' ', '').slice(1) ||
//       item?.content?.cost?.replaceAll(' ', '')?.slice(1);
//     total = total + Number(currentValue) * item.qty;
//     return total;
//   }, 0);

export default cartSlice.reducer;