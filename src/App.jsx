import {Routes, Route} from 'react-router-dom'
import Sidebar from "./components/Sidebar"
import TopBar from "./components/TopBar"
import projects from "./data/projects"

function App() {
  return (
    <div className="flex flex-col w-screen h-full pl-16">
      <Sidebar />
      <TopBar className="w-full" />
      <main className='overflow-x-hidden h-full'>
      <Routes>
        {projects.map((project, idx) => (
          <Route key={idx} path={project.slug} icon={<project.icon/>} element={<project.element/>}/>
        ))}
      </Routes>
      </main>
    </div>
  )
}

export default App
