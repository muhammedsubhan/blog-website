import React, { useContext, useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import FlagContext from "../FlagContext";

const Home = ({ isAuth }) => {
  const [postList, setPostList] = useState([]);
  // const [postFlag, setPostFlag] = useState(false);
  const postsCollectionRef = collection(db, "Posts");

  const{postFlag} = useContext(FlagContext);

  // console.log(postFlag);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [postsCollectionRef]);

  // Delete Posts

  const deletePost = async (id) => {
    const postDoc = doc(db, "Posts", id);

    await deleteDoc(postDoc);
  };

  return (
    <>
      <div className="postFlag">
        {postFlag ? (
          <div className="homePage">
            {postList.map((post) => {
              return (
                <div className="post" key={post.id}>
                  <div className="postHeader">
                    <div className="title">
                      <h1>{post.title}</h1>
                    </div>
                    {isAuth && post.author.id === auth.currentUser.uid && (
                      <div className="deletePost">
                        <button onClick={() => deletePost(post.id)}>
                          &#128465;
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="postTextContainer">{post.postText}</div>

                  <h5>@{post.author.name}</h5>
                </div>
              );
            })}
          </div>
        ) : (
          "No Post Available Right Now"
        )}
      </div>
    </>
  );
};

export default Home;
