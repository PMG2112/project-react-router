import React, { useEffect, useRef, useState } from "react";
import { usePosts } from "../hooks/usePost";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import { getPageCount } from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/myModal/MyModal";
import Counter from "../components/Counter";
import ClassCounter from "../components/ClassCounter";
import InputItem from "../components/InputItem";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";



function Posts() {
 const [posts, setPosts] = useState([] )
//  const [posts2, setPosts2] = useState(
//   [
//     {id: 1, title: 'TypeScript', body: 'Description'},
//     {id: 2, title: 'TypeScript 2', body: 'Description TypeScript'},
//     {id: 3, title: 'TypeScript 3', body: 'Description TypeScript'},
//     {id: 4, title: 'TypeScript 4', body: 'Description TypeScript'},
//     {id: 5, title: 'TypeScript 5', body: 'Description TypeScript'},
//   ]
//  )

const [filter, setFilter] = useState({sort: '', query: ''});
const [modal, setModal] = useState( false );
const [modal1, setModal1] = useState(false);
const [totalPages, setTotalPages] = useState(0);
const [limit, setLimit] = useState(10);
const [page, setPage] = useState(1);
const lastElement = useRef();

const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
  const response = await PostService.getAll(limit, page);
  setPosts([...posts, ...response.data])
  const totalCount = response.headers['x-total-count']
  setTotalPages(getPageCount(totalCount, limit));
  console.log(fetchPosts);
  
})

useObserver(lastElement, page < totalPages, isPostsLoading, () => {
  setPage(page + 1);
})

useEffect(() => {
    fetchPosts(limit, page)
}, [page]);

function createPost(newPost) {
  setPosts( [...posts, newPost])
  setModal(false)
};

const removePost = (post) => (
  setPosts(posts.filter(p => p.id !== post.id))
);

const changePage = (page) => {
  setPage(page)
};

  return (
    <div className="App">

<MyButton style={{marginTop: 30, marginRight: 20}} onClick={() => setModal1(true)}>
  Open
</MyButton>
<MyModal visible={modal1} setVisible={setModal1}>
<Counter />
<ClassCounter />
<InputItem />
</MyModal>

<MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
  Create Post
</MyButton>
<MyModal visible={modal} setVisible={setModal}>
  <PostForm create={createPost}/>
</MyModal>

<hr style={{margin: '15px 0'}}/>

<PostFilter 
  filter={filter}
  setFilter={setFilter}
/>
<MySelect 
  value={limit}
  onChange={value => setLimit(value)}
  defaultValue="Numbers"
    option={[
    {value: 5, name: '5'},
    {value: 10, name: '10'},
    {value: 25, name: '25'},
    {value: -1, name: 'All'},
  ]}
/>
{postError &&
    <h1>An Error has accurred!</h1>
}
<PostList remove={removePost} posts={sortedAndSearchedPosts} title="List of Posts on JavaScript"/>
<div ref={lastElement} style={{height: 20, background: 'red'}}/>
{isPostsLoading &&
  <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
}

{/* <PostList posts={posts2} title="List of Posts on TypeScript"/> */}

<Pagination 
  page={page} 
  changePage={changePage}
  totalPages={totalPages}
/>

</div>
  );
}

export default Posts;


// React Hooks
// useState() control state
// useEffect()
// useRef()
// useMemo(callback, deps)
// useCallback()
// useContext()