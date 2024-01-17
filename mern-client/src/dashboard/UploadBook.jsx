import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
//form para subir un book
const UploadBook = () => {
  //categoryss de los books
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
  const handleBookSumbit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPdfUrl,
    };
    //enviar data a la db
    fetch("http://localhost:5000/upload-book",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(bookObj)
    }).then(res => res.json()).then(data =>{
      //alerta de que se subio bien y el reset del form
      alert("Book Uploaded seccessfully")
      form.reset()
    })
    console.log(bookObj);
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload Book</h2>

      <form
        onSubmit={handleBookSumbit}
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
          />
        </div>
        <Button type="submit" className="mt-5">
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
