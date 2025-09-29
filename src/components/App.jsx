import { useEffect } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Layout } from './Layout/Layout';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';
import { useDispatch } from 'react-redux';
import { feechTasks } from 'operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(feechTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
