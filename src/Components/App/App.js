import { Layout } from '../Layout/Layout';
import { AppBar } from '../AppBar/AppBar';
import { TaskForm } from '../TaskForm/TaskForm';
import { TaskList } from '../TaskList/TaskList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'Redux/operations';
import { getError, getIsLoading } from 'Redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </Layout>
  );

  // return (
  //   <div>
  //     {isLoading && <p>Loading...</p>}
  //     {error && <p>{error}</p>}
  //     <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
  //   </div>
  // );
};
