
import { FaPlus } from "react-icons/fa6";
import TodoList from "./components/TodoList";


export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-10">
      <h1 className="text-2xl text-center font-bold">TODO List</h1>
      <div className="flex justify-center">
        <div className="flex mt-5">
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          <button className="btn btn-neutral ms-3">Add Task <FaPlus /></button>
        </div>
      </div>
      <TodoList />
    </main>
  )
}
