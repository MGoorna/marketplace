import { queryClient } from '../../App'
import { getPostPage } from '../../api/axios'
import { useEffect } from 'react'

const PreFetchData = () => {

  useEffect(()=>{
    const prefetchData = async ()=>{
      await queryClient.prefetchQuery({
        queryKey:'/posts',
        queryFn: getPostPage
      })
    }

  },[])

  return (
    <div>PreFetchData</div>
  )
}

export default PreFetchData