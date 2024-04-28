import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type TRedirect = {
  route: null | string;
};

const initialState: TRedirect = {
  route: "/",
};

const redirectRouteSlice = createSlice({
  name: "redirectRoute",
  initialState,
  reducers: {
    getRoute: (state, action) => {
      const { route } = action.payload;
      state.route = route;
    },
  },
});

export const { getRoute } = redirectRouteSlice.actions;
export default redirectRouteSlice.reducer;

export const useCurrentRoute = (state: RootState) => state.route;
