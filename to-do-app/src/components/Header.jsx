import './Header.css';


function Header({ totalTasks, completedTasks }) {
  return (
    <header>
      <h1>TODO</h1>
      <p>
        {completedTasks}/{totalTasks} tasks completed
      </p>
    </header>
  );
}

export default Header;