import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((response) => {
          console.log(response);
          // Checking if the response is 200.
          if (!response.ok) {
            throw new Error("Counld fetch the response");
          }
          return response.json();
        })
        .then((data) => {
          setError(null);
          setBlogs(data);
          setIsPending(false);
        })
        // Catching connection errors.
        .catch((error) => {
          setIsPending(false);
          console.log(error.message);
          setError(error.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading</div>}
      {blogs && (
        <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default Home;
