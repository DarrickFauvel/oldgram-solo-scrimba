const Card = ({ name, username, location, avatar, post, likes, comment }) => {
  return (
    <article className='card'>
      <section className='card-head'>
        <img className='avatar' src={avatar} alt='' />
        <p className='card-info'>
          <span className='artist'>{name}</span>
          {location}
        </p>
      </section>
      <section className='card-image'>
        <img src={post} alt='' />
      </section>
      <section className='card-footer'>
        <div className='icon-buttons'>
          <img className='btn-icon' src='images/icon-heart.png' alt='' />
          <img className='btn-icon' src='images/icon-comment.png' alt='' />
          <img className='btn-icon' src='images/icon-dm.png' alt='' />
        </div>
        <p>
          <strong>{likes} likes</strong>
        </p>
        <p>
          <strong>{username}</strong> {comment}
        </p>
      </section>
    </article>
  )
}

export default Card
