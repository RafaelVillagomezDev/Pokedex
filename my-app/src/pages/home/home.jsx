import Card from '../../components/card'
import Search from '../../components/search'

function Home() {
  return (
    <div className="Home">
      <div className="container_home_header">
        <Search />
      </div>
      <Card />
    </div>
  )
}

export default Home
