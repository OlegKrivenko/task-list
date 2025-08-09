import { Button } from 'components/Button/Button';
import css from './TaskForm.module.css';

export const TaskForm = () => {
  const handelSubmit = e => {
    e.preventDefault();
    const form = e.target;
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handelSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
