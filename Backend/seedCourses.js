import dotenv from "dotenv";
import mongoose from "mongoose";
import Book from "./model/book.model.js";

dotenv.config();

const URI = process.env.MongoDBURI;

const courses = [{
        name: "React for Beginners",
        price: 49.99,
        category: "Frontend",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
        title: "Learn React from scratch and build modern web apps."
    },
    {
        name: "Node.js Essentials",
        price: 39.99,
        category: "Backend",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
        title: "Master Node.js and build scalable backend APIs."
    },
    {
        name: "Fullstack with MERN",
        price: 79.99,
        category: "Fullstack",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        title: "Become a fullstack developer using MongoDB, Express, React, and Node."
    },
    {
        name: "UI/UX Design Basics",
        price: 29.99,
        category: "Design",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        title: "Learn the fundamentals of UI/UX design for web and mobile."
    },
    // Free courses
    {
        name: "JavaScript Essentials",
        price: 0.00,
        category: "Free",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        title: "Start your coding journey with JavaScript."
    },
    {
        name: "HTML & CSS Crash Course",
        price: 0.00,
        category: "Free",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        title: "Build beautiful websites with HTML and CSS."
    },
    {
        name: "Python for Everybody",
        price: 0.00,
        category: "Free",
        image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
        title: "Learn Python from scratch for free."
    }
];

async function seed() {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await Book.deleteMany({});
        await Book.insertMany(courses);
        console.log("Sample courses inserted!");
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

seed();