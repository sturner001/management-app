import NewTask from './NewTask.jsx'
export default function Tasks({ tasks, onAdd, onDelete }) {
    return (
        <section>
            <h2 className="text-2xl text-stone-700 mb-4">Tasks</h2>
            <NewTask onAdd={onAdd} />
            {tasks.length === 0 && (<p className="text-stone-800 my-4">
                This project does not have any tasks</p>)}
            {tasks.length > 0 && (
                <ul className="p4 mt-8 rounded-md bg-stone-100">
                    {tasks.map((task) => <li key={task.id} className="flex justify-between my4">
                        <span>{task.text}</span>
                        <button
                            className="text-stone-700 hover:text-red-500"
                            onClick={() => onDelete(task.id)}
                        >Clear</button>

                    </li>)}
                </ul>
            )}
        </section>

    );

}
