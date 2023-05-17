import { AiOutlineDashboard } from 'react-icons/ai'
import { BiListCheck } from 'react-icons/bi'
import ToDoList from '../pages/ToDoList'
import Dashboard from '../pages/Dashboard'

const projects = [
  {
    title: "Dashboard",
    icon: AiOutlineDashboard,
    slug: "/",
    element: Dashboard
  },
  {
    title: "To Do List",
    icon: BiListCheck,
    slug: "/todo-list",
    element: ToDoList
  },
]

export default projects