import { useState, ChangeEventHandler } from 'react'
import { useMutation } from 'react-query';
import { createPost } from '../../api/axios';

interface IUser {
  id: number,
  userId: number,
  title: string, 
  body: string
}

const AddNewPost = () => {
  const [post, setPost] = useState({});
  const mutation = useMutation({
    mutationFn: createPost
  })

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const {name, value} = event.target
    const userId = 3
    setPost({...post, [name] : value , userId})
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    
    console.log('post', {...post} )
    mutation.mutate(post, {
      onSuccess: () => {

      }
    })
  }

  return (
    <form action="" className='mt'>
      <label htmlFor="">title</label>
      <input type="text" name='title' onChange={handleChange}/>
      <label htmlFor="">body</label>
      <input type="text" name='body' onChange={handleChange}/>
      <button type="submit" onClick={handleSubmit}>Add post</button>
    </form>
  )
}

export default AddNewPost