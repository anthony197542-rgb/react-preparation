import { useEffect } from "react";
import { data, useParams } from 'react-router-dom';
import axios from 'axios';

const Posts = () => {
    const { id } = useParams();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchId, setSearchId] = useState(id);

    function onSearch() {
        fetchPopsts
    }

useEffect(() => {
  async function fetchPosts(userId) {
    const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?userId=${id}'
    );
    setPosts(data);
    setLoading(false);
  }

  fetchPost


      return (
    <>
  <div className="post__search">
    <button>← Back</button>
    <div className="post__search--container">
      <label className="post__search--label">Search by Id</label>
      <input type="number" value={searchId} onChange={(event) => setSearchId(event.target.value)} />
      <button onClick={() => onSearch()}>Enter</button>
    </div>
    </div>
        loading ?(
            new Array(10).fill(0).map((-, index) => (
                             <div className="post" key={index}>
    <div className="post__title">
      <div className="post__title--skeleton"></div>
    </div>
    <div className="post__body">
      <p className="post__body--skeleton"></p>
    </div>
    </div>

            ))
     

        : posts.map(post => (
      <div className="post" key={post.id}>
        <div className="post__title">{post.title}</div>
        <p className="post__body">{post.body}</p>
            </div>

        ))
     )}
    
   
</>
  );
};
export default Posts;