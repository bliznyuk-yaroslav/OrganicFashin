import { createSlice } from "@reduxjs/toolkit";
import heroImg from "../images/image 1@2x.jpg";

import shop1 from "../images/shop1.jpg";
import shop2 from "../images/shop2.jpg";
import shop3 from "../images/shop3.jpg";
import shop4 from "../images/shop4.jpg";
import collection1 from "../images/collection1.jpg";
import collection2 from "../images/collection2.jpg";
import collection3 from "../images/collection3.jpg";
import follow from "../images/follow 2@.jpg";

import about from "../images/AboutUs.jpg";

const initialState = {
  heroSection: {
    title: "ORGANIC FASHION",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: heroImg,
  },
  shopSection: {
    title: "SHOP BY CATEGORIES",
    categories: [
      {
        name: "photo 1",
        image: shop1,
      },
      {
        name: "photo 2",
        image: shop2,
      },
      {
        name: "photo 3",
        image: shop3,
      },
      {
        name: "photo 4",
        image: shop4,
      },
    ],
  },
  collectionSection: {
    title: "NEW COLLECTION",
    categories: [
      {
        name: "collection 1",
        image: collection1,
      },
      {
        name: "collection 2",
        image: collection2,
      },
      {
        name: "collection 3",
        image: collection3,
      },
    ],
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  aboutUsSection: {
    title: "ABOUT US",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    subtitle2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: about,
  },
  followUs: {
    title: "FOLLOW US",
    images: follow,
  },
};
const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
});
export default contentSlice.reducer;
