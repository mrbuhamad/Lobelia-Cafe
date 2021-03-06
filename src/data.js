const menu = [
  {
    id: 1,
    item: "House Fries",
    catagory: "Appetizers",
    subcatagory: "Fries - souce - cheese",
    price: "2.65",
    discribtion:
      "A Classic Bang Fries with Bacon, Special Sauce and Melted Cheese",
    image: "https://source.unsplash.com/1600x900/?Fries",
  },
  {
    id: 2,
    item: "Bang Bang Shrimp",
    catagory: "Appetizers",
    subcatagory: "Shimp - Souce",
    price: "3.55",
    discribtion: "The Classic Dynamite Shirmp Dish",
    image: "https://source.unsplash.com/1600x900/?Shrimp",
  },
  {
    id: 3,
    item: "Fried Halloumi",
    catagory: "Appetizers",
    subcatagory: "Halloumi souce",
    price: "2.35",
    discribtion:
      "Fried Cheese with a Little Love served with a zesty tomato sauce on the side",
    image: "https://source.unsplash.com/1600x900/?cheese  ",
  },
  {
    id: 4,
    item: "Buffalo Chicken",
    catagory: "Appetizers",
    subcatagory: "Chicken",
    price: "3.55",
    discribtion:
      "This melt-in-your-mouth goodness is something you won't stop eating, the Classic Buffalo Chicken",
    image: "https://source.unsplash.com/1600x900/?grilled",
  },
  {
    id: 5,
    item: "Shrimp Tempura",
    catagory: "Appetizers",
    subcatagory: "Shrimp",
    price: "3.65",
    discribtion: "Fried Shrimp Tempura the Japanese way with Tartar sauce",
    image: "https://source.unsplash.com/1600x900/?Tempura",
  },
  {
    id: 6,
    item: "Stuffed Mushroom",
    catagory: "Appetizers",
    subcatagory: "Mushroom",
    price: "3.65",
    discribtion:
      "Melted Cheese and White Sauce inside the Stuffed White Mushroom",
    image: "https://source.unsplash.com/1600x900/?Mushroom",
  },
  {
    id: 7,
    item: "Potato Balls",
    catagory: "Appetizers",
    subcatagory: "Potato",
    price: "3.15",
    discribtion: "Fried Potato with Cheese and Sauce",
    image: "https://source.unsplash.com/1600x900/?Potato",
  },
  {
    id: 8,
    item: "Sheesh Tawook",
    catagory: "Main Course",
    subcatagory: "Chicken  Grilled",
    price: "4.00",
    discribtion:
      "This Saffron Chicken Sheesh Tawook is our favorite with a side of White Rice",
    image: "https://source.unsplash.com/1600x900/?menu",
  },
  {
    id: 9,
    item: "Fajita Chicken",
    catagory: "Main Course",
    subcatagory: "Chicken",
    price: "4.25",
    discribtion: "Mexican Flavored Fajita with Tortilla Bread on the Side",
    image: "https://source.unsplash.com/1600x900/?Fajita",
  },
  {
    id: 10,
    item: "Grilled Chicken & Broccoli",
    catagory: "Main Course",
    subcatagory: "Chicken",
    price: "4.20",
    discribtion: "The Healthy Dish with Vegetables",
    image: "https://source.unsplash.com/1600x900/?Broccoli",
  },
  {
    id: 11,
    item: "Caeser",
    catagory: "Salads",
    subcatagory: "Caeser",
    price: "1.95",
    discribtion:
      "A Classic Salad with Parmesan Sauce and House-Made Caeser Dressing",
    image: "https://source.unsplash.com/1600x900/?Salads",
  },
  {
    id: 12,
    item: "Fatoush",
    catagory: "Salads",
    subcatagory: "salad",
    price: "2.15",
    discribtion: "Mixed vegetables with Toasted Khubz to your favorite classic",
    image: "https://source.unsplash.com/1600x900/?Salads",
  },
  {
    id: 13,
    item: "Quinoa Salad",
    catagory: "Salads",
    subcatagory: "Quinoa",
    price: "2.95",
    discribtion: "Our Twist of Quinoa Tabouleh",
    image: "https://source.unsplash.com/1600x900/?Quinoa",
  },
  {
    id: 14,
    item: "Pink",
    catagory: "Pasta",
    subcatagory: "pasta - Mushroom",
    price: "3.35",
    discribtion: "A combination of White & Red Sauce with Mushroom",
    image: "https://source.unsplash.com/1600x900/?Pasta",
  },
  {
    id: 15,
    item: "Spicy",
    catagory: "Pasta",
    subcatagory: "pasta - Cojin souce",
    price: "3.25",
    discribtion: "Spicy Pasta Sauce with vegetables and fresh ingredients",
    image: "https://source.unsplash.com/1600x900/?Spicy",
  },
  {
    id: 16,
    item: "Pesto",
    catagory: "Pasta",
    subcatagory: "pasta - Pesto souce",
    price: "3.65",
    discribtion:
      "The Earthy & Urban Flavor of this Pesto elevates your taste buds",
    image: "https://source.unsplash.com/1600x900/?Pesto",
  },
  {
    id: 17,
    item: "White",
    catagory: "Pasta",
    subcatagory: "Pasta - White souce",
    price: "3.15",
    discribtion: "The Creamy Mushroom Classic that Everyone Loves",
    image: "https://source.unsplash.com/1600x900/?souce",
  },
  {
    id: 18,
    item: "Beef Sliders",
    catagory: "Slider Buns",
    subcatagory: "Beef",
    price: "2.65",
    discribtion: "Cheese, Lettuce, Special Sauce",
    image: "https://source.unsplash.com/1600x900/?Beef",
  },
  {
    id: 19,
    item: "Chicken Sliders",
    catagory: "Slider Buns",
    subcatagory: "Chicken",
    price: "2.55",
    discribtion: "Cheese, Lettuce, Special Sauce",
    image: "https://source.unsplash.com/1600x900/?Sliders",
  },
  {
    id: 20,
    item: "Ice Cream Crepes",
    catagory: "Special Desserts",
    subcatagory: "Crepes",
    price: "3.65",
    discribtion: "The Signature Lobelia Dessert",
    image: "https://source.unsplash.com/1600x900/?Crepes",
  },
  {
    id: 21,
    item: "Cake pops",
    catagory: "Special Desserts",
    subcatagory: "Cake",
    price: "3.65",
    discribtion: "Cake pops with stuffed Chocolate Desire ",
    image: "https://source.unsplash.com/1600x900/?food",
  },
  {
    id: 22,
    item: "Sushi Crepe",
    catagory: "Special Desserts",
    subcatagory: "Crepe",
    price: "4.00",
    discribtion: "Crepe with Chocolate Sauce and Brownies",
    image: "https://source.unsplash.com/1600x900/?food",
  },
  {
    id: 23,
    item: "Chocolate Strawberries",
    catagory: "Special Desserts",
    subcatagory: "Berries",
    price: "3.85",
    discribtion: "A CLassic Fruit & Berries",
    image: "https://source.unsplash.com/1600x900/?food",
  },
];

export default menu;
