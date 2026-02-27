import waffle from './assets/waffle.png'
import penne from './assets/penne.png'
import soup from './assets/soup.png'
import soup1 from './assets/soup1.png'
import butterMasala from './assets/butterMasala.png'
import pizza from './assets/piza.png'
import burger from './assets/burger.png'
import bread from './assets/bread.png'
import toast from './assets/toast.png'
import salad from "./assets/salad.png"
import wing from "./assets/wing.png"
import lasanga from "./assets/lasanga.png"
import curry from "./assets/curry.png"


export const food_items = [
    // Breakfast Items
    { "id": 1, "food_name": "Fluffy Pancakes", "food_category": "breakfast", "food_type": "veg", "food_quantity": 1, "food_image": "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600", "price": 349 },
    { "id": 2, "food_name": "Classic Waffles", "food_category": "breakfast", "food_type": "veg", "food_quantity": 1, "food_image": waffle, "price": 399 },
    { "id": 3, "food_name": "English Breakfast", "food_category": "breakfast", "food_type": "non_veg", "food_quantity": 1, "food_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuY0U9rGGX2etVN391i1ycJ5Yct2m11TfaYQ&s", "price": 599 },

    // Soups
    { "id": 4, "food_name": "Chicken Noodle Soup", "food_category": "soups", "food_type": "non_veg", "food_quantity": 1, "food_image": soup, "price": 299 },
    { "id": 5, "food_name": "Tomato Basil Soup", "food_category": "soups", "food_type": "veg", "food_quantity": 1, "food_image": "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600", "price": 249 },
    { "id": 6, "food_name": "Mushroom Cream Soup", "food_category": "soups", "food_type": "veg", "food_quantity": 1, "food_image": soup1, "price": 279 },

    // Pasta
    { "id": 7, "food_name": "Spaghetti Bolognese", "food_category": "pasta", "food_type": "non_veg", "food_quantity": 1, "food_image": "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600", "price": 449 },
    { "id": 9, "food_name": "Penne Arrabbiata", "food_category": "pasta", "food_type": "veg", "food_quantity": 1, "food_image": penne, "price": 379 },

    // Main Course
    { "id": 10, "food_name": "Grilled Chicken", "food_category": "main_course", "food_type": "non_veg", "food_quantity": 1, "food_image": "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=600", "price": 549 },
    { "id": 11, "food_name": "Paneer Butter Masala", "food_category": "main_course", "food_type": "veg", "food_quantity": 1, "food_image": butterMasala, "price": 399 },
    { "id": 12, "food_name": "Fish Curry with Rice", "food_category": "main_course", "food_type": "non_veg", "food_quantity": 1, "food_image": curry, "price": 499 },
    { "id": 13, "food_name": "Vegetable Biryani", "food_category": "main_course", "food_type": "veg", "food_quantity": 1, "food_image": "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600", "price": 429 },

    // Pizza
    { "id": 14, "food_name": "Margherita Pizza", "food_category": "pizza", "food_type": "veg", "food_quantity": 1, "food_image": "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600", "price": 599 },
    { "id": 15, "food_name": "Pepperoni Pizza", "food_category": "pizza", "food_type": "non_veg", "food_quantity": 1, "food_image": "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600", "price": 699 },
    { "id": 16, "food_name": "Veggie Supreme Pizza", "food_category": "pizza", "food_type": "veg", "food_quantity": 1, "food_image": pizza, "price": 649 },

    // Burgers
    { "id": 17, "food_name": "Classic Cheeseburger", "food_category": "burger", "food_type": "non_veg", "food_quantity": 1, "food_image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600", "price": 349 },
    { "id": 18, "food_name": "Veggie Burger", "food_category": "burger", "food_type": "veg", "food_quantity": 1, "food_image": burger, "price": 299 },
    { "id": 19, "food_name": "Chicken Crispy Burger", "food_category": "burger", "food_type": "non_veg", "food_quantity": 1, "food_image": "https://images.pexels.com/photos/2983098/pexels-photo-2983098.jpeg?auto=compress&cs=tinysrgb&w=600", "price": 399 },
    { "id": 20, "food_name": "Double Patty Burger", "food_category": "burger", "food_type": "non_veg", "food_quantity": 1, "food_image": "https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg?auto=compress&cs=tinysrgb&w=600", "price": 499 },

    // Additional Items
    { "id": 21, "food_name": "Garlic Bread", "food_category": "pizza", "food_type": "veg", "food_quantity": 1, "food_image": bread, "price": 149 },
    { "id": 22, "food_name": "French Toast", "food_category": "breakfast", "food_type": "veg", "food_quantity": 1, "food_image": toast, "price": 279 },
    { "id": 23, "food_name": "Caesar Salad", "food_category": "soups", "food_type": "veg", "food_quantity": 1, "food_image": salad, "price": 249 },
    { "id": 24, "food_name": "Chicken Wings", "food_category": "main_course", "food_type": "non_veg", "food_quantity": 1, "food_image": wing, "price": 399 },
    { "id": 25, "food_name": "Lasagna", "food_category": "pasta", "food_type": "non_veg", "food_quantity": 1, "food_image": lasanga, "price": 549 }
];