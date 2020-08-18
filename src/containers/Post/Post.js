import React from 'react';
import './style.css';
import Card from '../../components/UI/Card/Card';
import BlogPost from '../../components/BlogPost/BlogPost';
import Sidebar from '../../components/Sidebar/Sidebar';
import Layout from '../../components/Layout/Layout';

/**
* @author
* @function Post
**/

const Post = (props) => {

    console.log(props);


  return(
        <Layout>
          <BlogPost {...props} />
        </Layout>
   )

 }

export default Post;