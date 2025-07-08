import React  from 'react'
import { Container,PostForm } from '../components'
import { useLoaderData} from 'react-router-dom';

function EditPost() {


   const post = useLoaderData();
   
   return post ? (
    <div className='py-8'>
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
   ) : null
}

export default EditPost