import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Select, RTE } from '../index';
import databaseService from '../../appwrite/configuration';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PostForm({ post }) { // component to handle adding posts.

  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || '',
      slug: post?.slug || '',
      content: post?.content || '',
      status: post?.status || 'active',
    },
  }); // using values from react-hook-form

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth?.userData);
  const [imageUrl, setImageUrl] = useState('');


  const slugTransform = useCallback((value) => { // function for slug-creation.

    if (value && typeof value === 'string') {
      return value
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')            // replace spaces with -
        .replace(/[^a-z0-9-]/g, '');    // remove invalid characters
    }
    return '';
  }, []);

  //  Watch for title change and update slug
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue('slug', slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);

  //  Set image preview if post is provided
  useEffect(() => {
  if (post?.featuredImage && typeof post.featuredImage === 'string' && post.featuredImage.trim() !== '') {
    const preview = databaseService.fileView(post.featuredImage);
    setImageUrl(preview.toString());
  }
}, [post]);


  //  Submit handler
  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? await databaseService.fileUpload(data.image[0]) : null;

      if (file) {
        await databaseService.fileDelete(post.featuredImage);
      }

      const postUp = await databaseService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
 
      
      if (postUp) {
        navigate(`/post/all-posts`);
      }else{
        console.log("Yaar navigate nahi ho raha");
        
      }
    } else {
      const file = await databaseService.fileUpload(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;

      console.log("UserData before post creation:", userData);
      console.log("File upload result:", file);
      

        

        const dbPost = await databaseService.createPost({
          ...data,
          userId: userData.$id,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-6">
      <div className="space-y-4">
        <Input
          label="Title :"
          placeholder="Title"
          {...register('title', { required: true })}
        />

        <Input
          label="Slug:"
          placeholder="Slug"
          {...register('slug', { required: true })}
          onInput={(e) =>
            setValue('slug', slugTransform(e.currentTarget.value), { shouldValidate: true })
          }
        />

        <RTE // for real time text editor.
          label="Content:"
          name="content"
          control={control}
          defaultValue={getValues('content')}
        />
      </div>

      <div className="space-y-4">
        <Input
          label="Featured Image:"
          type="file"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register('image', { required: !post })}
        />

        {/*  Show preview image for existing post */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={post?.title || 'Preview'}
            className="w-full max-h-64 object-cover rounded-xl shadow"
          />
        )}

        <Select
          options={['active', 'inactive']}
          label="Status"
          {...register('status', { required: true })}
        />

        <Button
          className="mt-6"
          type="submit"
          bgColor={post ? 'bg-green-500' : 'bg-blue-600'}
        >
          {post ? 'Update' : 'Submit'}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
