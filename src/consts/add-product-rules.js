export const addProductRules = {
  nameRules: [
    v => !!v || "Name is required",
    v => (v && v.length <= 20) || "Name must be less than 20 characters"
  ],
  colorRules: [
    v => !!v || "Color is required",
    v => (v && v.length <= 10) || "Color must be less than 10 characters"
  ],
  priceRules: [
    v => !!v || "Price is required",
    v => (v && v.length <= 10) || "Price must be less than 10 characters"
  ],
  imageRules: [v => !!v || "Image is required"]
};
