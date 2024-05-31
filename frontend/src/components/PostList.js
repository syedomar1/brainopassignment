import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import "../index.css"

const examplePosts = [
  { id: 1, title: "MelodyVerse Post 1", body: "This is the first example post in MelodyVerse." },
  { id: 2, title: "MelodyVerse Post 2", body: "This is the second example post in MelodyVerse." },
  { id: 3, title: "MelodyVerse Post 3", body: "This is the third example post in MelodyVerse." },
  { id: 4, title: "MelodyVerse Post 4", body: "This is the fourth example post in MelodyVerse." },
  { id: 5, title: "MelodyVerse Post 5", body: "This is the fifth example post in MelodyVerse." },
  { id: 6, title: "MelodyVerse Post 6", body: "This is the sixth example post in MelodyVerse." },
  { id: 7, title: "MelodyVerse Post 7", body: "This is the seventh example post in MelodyVerse." },
  { id: 8, title: "MelodyVerse Post 8", body: "This is the eighth example post in MelodyVerse." },
  { id: 9, title: "MelodyVerse Post 9", body: "This is the ninth example post in MelodyVerse." },
  { id: 10, title: "MelodyVerse Post 10", body: "This is the tenth example post in MelodyVerse." },
  { id: 11, title: "MelodyVerse Post 11", body: "This is the eleventh example post in MelodyVerse." },
  { id: 12, title: "MelodyVerse Post 12", body: "This is the twelfth example post in MelodyVerse." },
  { id: 13, title: "MelodyVerse Post 13", body: "This is the thirteenth example post in MelodyVerse." },
  { id: 14, title: "MelodyVerse Post 14", body: "This is the fourteenth example post in MelodyVerse." },
  { id: 15, title: "MelodyVerse Post 15", body: "This is the fifteenth example post in MelodyVerse." },
  { id: 16, title: "MelodyVerse Post 16", body: "This is the sixteenth example post in MelodyVerse." },
  { id: 17, title: "MelodyVerse Post 17", body: "This is the seventeenth example post in MelodyVerse." },
  { id: 18, title: "MelodyVerse Post 18", body: "This is the eighteenth example post in MelodyVerse." },
  { id: 19, title: "MelodyVerse Post 19", body: "This is the nineteenth example post in MelodyVerse." },
  { id: 20, title: "MelodyVerse Post 20", body: "This is the twentieth example post in MelodyVerse." }
];

const PostList = (props) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      fetchPosts();
    } else {
      navigate('/login');
    }
    // eslint-disable-next-line
  }, []);

  const fetchPosts = () => {
    const postsPerPage = 10;
    const newPosts = examplePosts.slice((page - 1) * postsPerPage, page * postsPerPage);
    setPosts(prevPosts => [...prevPosts, ...newPosts]);
    if (newPosts.length === 0) {
      setHasMore(false);
    } else {
      setPage(page + 1);
    }
  };

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchPosts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>End of posts</p>}
      >
        <div className="container mx-auto px-4 py-8 mt-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.body}</p>
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default PostList;
