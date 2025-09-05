import Cards from "../components/Cards";

function Cart({ cartItems, onRemove }) {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-8">
      <h2 className="font-semibold text-xl pb-2">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cartItems.map((item) => (
            <div key={item._id || item.id} className="relative">
              <Cards item={item} />
              <button
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs hover:bg-red-700"
                onClick={() => onRemove(item)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
