import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  thumbnails: [
    "https://oneilcinemas.com/site/assets/files/2261/marvels-banner-epping.1920x742.jpg",
    "https://media.lottecinemavn.com/Media/Event/090fc089e4224eb6a050069a5d265e77.png",
    "https://media.lottecinemavn.com/Media/Event/1122783b6c7a4c0cb833b9e7472e8ca4.png",
    "https://media.lottecinemavn.com/Media/Event/2dc353cf91f442a4a3f3069f7461f008.png",
    "https://media.lottecinemavn.com/Media/Event/5c82ebfd99b8448a80b7ae47cc2c4e3c.png",
    "https://media.lottecinemavn.com/Media/Event/5d8c89bc65c1491299208987c545c4b8.jpg",
    "https://media.lottecinemavn.com/Media/Event/76aee4cdbc4f43e8931a35fcdad39de9.png",
    "https://media.lottecinemavn.com/Media/Event/abcb193a09194405a8603cb8e5058c59.png",
  ],
};

const promotionSlice = createSlice({
  name: "promotion",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.thumbnails = action.payload;
    },
  },
});

export default promotionSlice;
