import { MdOutlineDelete } from 'react-icons/md';
import css from './Task.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../../redux/operations';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <label className={css['custom-checkbox']}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
        />

        <span className={css.checkmark}></span>
      </label>

      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdOutlineDelete size={26} />
      </button>
    </div>
  );
};
