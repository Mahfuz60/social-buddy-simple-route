import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Comment from "../Comment/Comment";

const Postdetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [id]);
  return (
    <div>
      <h3>PostId:{post.userId}</h3>
      <h3>UserId:{post.id}</h3>
      <p>User Title:{post.title}</p>
      <p>User Body:{post.body}</p>
      <h3>Number of Comment:{comments.length}</h3>
      {comments.map((comment) => (
        <Comment comment={comment}></Comment>
      ))}
    </div>
  );
};

export default Postdetails;
