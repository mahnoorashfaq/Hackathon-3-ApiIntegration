import { createSlice } from '@reduxjs/toolkit'
import { Cart } from '../../../../types/page'

// Define the initial state using that type
const initialState: Cart[] = [];

export const CartSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

// add to cart functionalty
addtocart(state,action){
  const uuid = Math.floor(1000+Math.random()*9000)
  const newobj = {...action.payload,uuid}
  state.push(newobj)
 },
 
// delete from cart
delItem(state,{payload}){
  return  state.filter((val)=> val.uuid !== payload)
},


//  addition of item
addition(state,action){
  const obj = state.find(
    (val:any)=>
      val.id == action.payload.id && 
      val.color == action.payload.color && 
      val.size == action.payload.size 
  );

  if(obj){
    ++obj.qty;
    const newState = state.filter((val)=> val.id !== obj.id);
    state = [...newState,obj];
    return
  }
},


 //   subraction of item
 subraction(state,action){
  const obj = state.find(
    (val:any)=>
      val.id == action.payload.id && 
      val.color == action.payload.color && 
      val.size == action.payload.size 
  );
  if(obj !== undefined){
    --obj.qty;
    const newState = state.filter((val)=> val.uuid !== obj.uuid);
    state = [...newState,obj];
    return;
  }
  // end
 }


  },
})

export const { addtocart,delItem,addition,subraction } = CartSlice.actions
export default CartSlice.reducer