export default function Home() {
  const foods = [
    { name: 'Cheeseburger', price: 5.99 },
    { name: 'Margherita Pizza', price: 9.99 },
    { name: 'Chicken Caesar Salad', price: 7.49 },
    { name: 'Spaghetti Bolognese', price: 11.99 },
    { name: 'Grilled Salmon', price: 14.99 },
    { name: 'Vegetable Stir-fry', price: 8.99 },
    { name: 'Chicken Tacos', price: 6.99 },
    { name: 'Sushi Roll (8 pieces)', price: 12.99 },
    { name: 'French Fries', price: 3.49 },
    { name: 'Chocolate Brownie', price: 4.99 }
  ];

  return (
    <>
      <div>
        <h1 className="text-2xl my-2">Home Page</h1>
        <div className="grid grid-cols-6 gap-2 m-2">
          {foods.map((food, index) => (
            <div key={index} className="bg-gray-300 px-2 py-1 border border-gray-500">
              <h1>{food.name}</h1>
              <p>$ {food.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}