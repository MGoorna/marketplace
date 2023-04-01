
interface Post {
  post: {
    id: number,
    title: string, 
    body: string,
  }
}

const Post = (post: Post) => {
  const {id, body, title} = post.post
  return (
    <article>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>{id}</p>
    </article>
  )
}

export default Post