import React from "react";

const FAQ = () => {
  return (
    <div className="p-8">
      <div className="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
        <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">
          FAQ
        </h4>
        <p className="text-center text-gray-600 text-sm mt-2">
          Here are some of the frequently asked questions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">
          <div className="flex space-x-8 mt-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-700">
                Diverse Manga Collection
              </h4>
              <p className="text-gray-600 my-2">
                Explore our extensive collection of manga encompassing a wide
                array of genres, from action-packed shonen and heartwarming
                shojo to thrilling seinen and thought-provoking josei titles.
                Whether you're a seasoned manga enthusiast or a newcomer to the
                world of Japanese comics, our carefully curated selection
                ensures there's something for everyone. Immerse yourself in the
                captivating stories, vibrant artwork, and unique cultural
                perspectives that make manga a beloved form of entertainment
                worldwide.
              </p>
            </div>
          </div>

          <div className="flex space-x-8 mt-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-700">
                Literary Bliss with Novels
              </h4>
              <p className="text-gray-600 my-2">
                Beyond manga, our eCommerce platform offers a rich assortment of
                novels that span various literary genres. From fantasy epics and
                science fiction adventures to poignant dramas and classic
                literature, our book collection caters to the diverse tastes of
                avid readers. Whether you're seeking a riveting page-turner or a
                thought-provoking masterpiece, our catalog is designed to
                satisfy your literary cravings and transport you to different
                worlds through the power of words.
              </p>
            </div>
          </div>

          <div className="flex space-x-8 mt-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                ></path>
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-700">
                Exclusive Limited Editions
              </h4>
              <p className="text-gray-600 my-2">
                Elevate your collection with our exclusive range of limited
                edition manga and books. We understand the joy that comes with
                owning a rare and special edition of your favorite titles. Our
                commitment to providing unique and premium content ensures that
                you can find and acquire coveted collector's items, including
                signed copies, variant covers, and exclusive merchandise. Stay
                tuned for regular updates on limited releases and be among the
                privileged few to own these exceptional editions.
              </p>
            </div>
          </div>

          <div className="flex space-x-8 mt-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                ></path>
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-700">
                Global Shipping and Fast Delivery
              </h4>
              <p className="text-gray-600 my-2">
                Experience the convenience of global shipping with our eCommerce
                service. No matter where you are in the world, we strive to
                bring the joy of manga and books right to your doorstep. Our
                efficient and reliable delivery network ensures that your
                purchases arrive promptly, allowing you to dive into your new
                literary treasures without delay. We prioritize customer
                satisfaction, and our commitment to timely and secure shipping
                reflects our dedication to providing a seamless shopping
                experience.
              </p>
            </div>
          </div>

          <div className="flex space-x-8 mt-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                ></path>
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-700">
                Customer-Centric Support
              </h4>
              <p className="text-gray-600 my-2">
                At our eCommerce platform, customer satisfaction is our top
                priority. Our dedicated support team is ready to assist you with
                any inquiries, concerns, or assistance you may require. From
                helping you navigate the website to addressing order-related
                issues, our customer-centric approach ensures that your shopping
                experience is not only enjoyable but stress-free. Feel free to
                reach out to us at any time, and we'll be delighted to assist
                you on your journey to discovering and acquiring the best manga
                and books.
              </p>
            </div>
          </div>

          <div className="flex space-x-8 mt-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                ></path>
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-700">
                Community Engagement and Events
              </h4>
              <p className="text-gray-600 my-2">
                Join our vibrant community of manga and book enthusiasts! Stay
                updated on the latest releases, share your thoughts on your
                favorite titles, and connect with like-minded individuals who
                share your passion. We regularly host events, contests, and
                discussions to foster a sense of camaraderie among our
                customers. Follow us on social media for exciting updates,
                exclusive content, and the opportunity to participate in
                community-driven initiatives that celebrate the love for manga
                and literature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
