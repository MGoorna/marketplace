import { useQuery } from 'react-query'
import { getPost } from '../../api/axios'

const PostDetails = ({postId}) => {

  const {
    isLoading,
    isError,
    error,
    data: post,
    isFetching,
    isPreviousData
  } = useQuery(['/posts', postId], () => getPost(postId), {
    enabled: !!postId,
    keepPreviousData: true
  })

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  )
}

export default PostDetails