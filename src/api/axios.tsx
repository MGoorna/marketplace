import axios from 'axios'

export const axiosBase = axios.create({
  baseURL: 'http://localhost:3004/'
})

export const getPostPage = async (pageParam: {queryKey: [number | string]}) => {
  console.log(pageParam)
  const response = await axiosBase.get(`posts?_limit=4&_page=${pageParam.queryKey[1]}`)
  return response.data
}

export const getPost = async (id:number) => {
  const response = await axiosBase.get(`/posts/${id}`)
  return response.data
}


export const createPost = async (post:{}) => {
  const response = await axiosBase.post('/posts?_order=desc', post)
  return response.data
}

export const updatePost = async ({id, ...updatedPost}:{id:number}) => {
  const response = await axiosBase.put(`/posts/${id}`, updatedPost)
  return response.data
}


/* export const deletePost = async (post: {}) => {
  const response = axiosBase.delete(post.id)
  return response.data
}

export const getUsersPage = (pageParam) => {
  const response = axios.get(`users?_page=${pageParam}`)
  return response.data()
} */