import React, { useEffect,useContext, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import FlagContext from "../FlagContext";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const navigate = useNavigate();
  const postsCollectionRef = collection(db, "Posts");

  const [setPostFlag] = useContext(FlagContext);

  // Create Post in FireBase
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      TimeStamp: serverTimestamp(),
    });
    setPostFlag(true);
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  });

  return (
    <>
      <div className="createPostPage">
        <div className="cpContainer">
          <h1>Create A Post</h1>
          <div className="inputGp">
            <label>Title:</label>
            <input
              type="text"
              placeholder="Title..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="inputGp">
            <label>Post:</label>
            <textarea
              placeholder="Post..."
              onChange={(e) => setPostText(e.target.value)}
            />
          </div>
          <button onClick={createPost}>Submit Post</button>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
