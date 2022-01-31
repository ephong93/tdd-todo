import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ListContainer from './ListContainer'
import { tasks } from './fixtures/tasks';
import { setTasks } from './actions'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setTasks(tasks))
  }, [])
  return (
    <div>
      <h1>To Do</h1>
      <ListContainer />
    </div>
  );
}

export default App;
