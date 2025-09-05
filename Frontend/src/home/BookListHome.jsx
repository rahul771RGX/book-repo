import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";

function BookListHome() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBooks(res.data.slice(0, 4)); // Show only a few books on home
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-8">
      <h2 className="font-semibold text-xl pb-2">Featured Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {books.map((item) => (
          <Cards key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default BookListHome;
