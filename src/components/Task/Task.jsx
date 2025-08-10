import { MdOutlineDelete } from 'react-icons/md';
import css from './Task.module.css';

export const Task = ({ task }) => {
  return (
    <div className={css.wrapper}>
      <label className={css['custom-checkbox']}>
        {/* <input type="checkbox" checked={task.completed} /> */}
        <input type="checkbox" />
        <span className={css.checkmark}></span>
      </label>

      <p className={css.text}>{task.text}</p>
      <button className={css.btn}>
        <MdOutlineDelete size={26} />
      </button>
    </div>
  );
};
