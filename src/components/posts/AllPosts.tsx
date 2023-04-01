import { useState } from 'react'
import { useQuery } from 'react-query'
import { getPostPage } from '../../api/axios'
import Post from './Post';

interface IPosts {
  id: number,
  userId: number,
  title: string, 
  body: string
}

const AllPosts = () => {
  const [page, setPage] = useState<number>(1);
  const {
    isLoading,
    isError,
    error,
    data: posts,
    isFetching,
    isPreviousData
  } = useQuery(['/posts', page], (page) => getPostPage(page), 
  {
    enabled: Boolean(page),
    keepPreviousData: true,
    //select: (posts) => posts.sort().reverse(),
  })

  if (isLoading) return <p>Loading posts...</p>
  if (isError) return <p>Something went wrong. Error: error.message</p>

  let content = '';

  //const lastPageIndex = posts.totalPages - 1;
//console.log(lastPageIndex, posts.totalPages)
  const firstPage = () => { setPage(1) }
  const nextPage = () => { setPage( prev => prev + 1) }
  const previousPage = () => { setPage( prev => prev - 1) }
  const lastPage = () => { setPage(posts.length+1) }

  return (
    <main className='mt'>
      <button onClick={firstPage} disabled={page === 0} >first page</button>
      <button onClick={previousPage} disabled={page === 0} >Previous page</button>
      <button onClick={nextPage} >Next page</button>
      <button onClick={lastPage} disabled={page === posts.length} >last page</button>
      {posts && posts?.map( (post:IPosts)=> <Post key={post.id} post={post} />)}
    </main>
  )
}

export default AllPosts