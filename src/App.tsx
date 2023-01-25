import './App.css'
import content from './assets/content'
import Tabs from './components/tabs'

function App() {
  return (
    <main>
      <div className="content-half">
        <h1>Picture</h1>
      </div>
      <div className="content-half">
        <Tabs tabs={content} />
      </div>
    </main>
  )
}

export default App
