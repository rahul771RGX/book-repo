
function About() {
  return (
  <section className="min-h-[70vh] w-full flex items-center justify-center py-16 px-2">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-10 flex flex-col items-center">
        <div className="mb-6 flex flex-col items-center">
          <div className="bg-purple-100 dark:bg-slate-700 p-4 rounded-full mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-2">About Us</h1>
          <p className="text-gray-500 dark:text-gray-300 text-center text-base max-w-lg">
            BookStore is your go-to platform for discovering, reading, and sharing your favorite books. We are passionate about connecting readers and making knowledge accessible to everyone.
          </p>
        </div>
        <div className="mt-6 text-center text-gray-700 dark:text-gray-200 text-base">
          <p>
            <span className="font-semibold text-blue-600 dark:text-blue-400">Our Mission:</span> To empower book lovers and foster a vibrant reading community by providing a seamless, enjoyable, and informative experience.
          </p>
          <p className="mt-3">
            <span className="font-semibold text-purple-600 dark:text-purple-400">Why Choose Us?</span> We offer a curated selection, user-friendly features, and a supportive environment for readers of all backgrounds.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
