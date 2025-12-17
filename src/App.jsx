import ProductList from "./components/ProductLists";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6"> 🛒 Shopping Cart</h1>
      <ProductList />
    </div>
  );
};

export default App;
