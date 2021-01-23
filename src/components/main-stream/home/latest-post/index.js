import React from 'react'
import Card from './card'
import './styles.scss'

const LatestPosts = props => {
  const PostList = [
    {
      id: 1,
      title: 'Post 1',
      description: 'This a dummy post',
      imgUrl: '/static/images/action-android.jpg',
      url: '#',
    },
    {
      id: 2,
      title: 'Post 1',
      description: 'This a dummy post',
      imgUrl: '/static/images/person-holding.jpg',
      url: '#',
    },
    {
      id: 3,
      title: 'Post 1',
      description: 'This a dummy post',
      imgUrl: '/static/images/ball-shaped.jpg',
      url: '#',
    },
  ]
  return (
    <div className="posts-container">
      <h1>Latest Posts</h1>
      <div className="posts">
        {PostList.map(post => (
          <Card
            key={post.id}
            title={post.title}
            description={post.description}
            img={post.imgUrl}
            targetUrl={post.url}
          />
        ))}
      </div>
      <button type="button" className="btn btn-unique">
        View More
      </button>
    </div>
  )
}

export default LatestPosts
