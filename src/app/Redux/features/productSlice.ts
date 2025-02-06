import { createSlice } from '@reduxjs/toolkit'
import { Iproduct } from '@/app/types/page'
import Product from '@/app/types/mock'

// Define the initial state using that type
const initialState: Iproduct[] = Product

export const ProductSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    },
})

export const {  } = ProductSlice.actions
export default ProductSlice.reducer