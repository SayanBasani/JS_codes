import styles from './TodoItems.module.css'
function TodoItems({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className={`row ${styles.kgRow}`}>
        <div className={`col-6 ${styles['items-left']}`}>{todoName}</div>
        <div className={`col-4 ${styles['items-left']}`}>{todoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;
