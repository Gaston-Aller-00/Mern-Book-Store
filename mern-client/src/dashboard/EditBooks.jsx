//para editar books
import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useLoaderData, useParams } from "react-router-dom";

const EditBooks = () => {
  const { id } = useParams();
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPdfUrl,
  } = useLoaderData();

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Desing",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );
  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };
  //handle book summission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPdfUrl,
    };

    //update data
    fetch(`https://mern-book-store-eta.vercel.app/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateBookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book Update succesfulyl!");
      });
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update the Book data</h2>

      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* book title  y first row*/}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book Name"
              required
              //valor deafult para que no tenga que completar todo desde 0 para editar el book ,con useParams y useLoader, esta en las primeras lineas de arriba , y asi con todos los valores por dafult de las demas casillas
              defaultValue={bookTitle}
            />
          </div>
          {/* author name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
              required
              defaultValue={authorName}
            />
          </div>
        </div>
        {/* second row */}
        {/* IMAGE URL */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book Image"
              required
              defaultValue={imageURL}
            />
          </div>
          {/*Category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rouned"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
              defaultValue={category}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* bookDescription */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <div className="">
            <Textarea
              id="bookDescription"
              placeholder="Write your Book description..."
              required
              rows={6}
              className="w-full "
              defaultValue={bookDescription}
            />
          </div>
        </div>
        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" value="PDF Book URL" />
          </div>
          <TextInput
            id="bookPdfUrl"
            type="text"
            placeholder="book pdf url"
            required
            shadow
            defaultValue={bookPdfUrl}
          />
        </div>
        <Button type="submit" className="mt-5">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
