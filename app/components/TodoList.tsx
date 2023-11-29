import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const TodoList = () => {
    return (
        <div className="mt-8">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Task</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td></td>
                            <td><button className="btn btn-neutral">Edit <FaEdit /></button><button className="btn btn-error ms-5">Delete <FaTrash /> </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodoList;