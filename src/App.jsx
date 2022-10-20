import Card from './components/Card'
import Header from './components/Header'
import posts from './data/posts'

function App() {
  return (
    <div className='App'>
      <Header />

      <main>
        <div className='container'>
          <section className='cards'>
            {posts.map(
              (
                { name, username, location, avatar, post, likes, comment },
                index
              ) => {
                return (
                  <Card
                    name={name}
                    username={username}
                    location={location}
                    avatar={avatar}
                    post={post}
                    likes={likes}
                    comment={comment}
                    key={index}
                  />
                )
              }
            )}
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
