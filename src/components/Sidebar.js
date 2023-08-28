import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-secondary border-right position-fixed" style={{ top: '56px' }} id="sidebar-wrapper">
      <div className="list-group list-group-flush overflow-auto" style={{ maxHeight: 'calc(100vh - 56px)' }}>
        <h1 className="text-white p-3">HTML</h1>
        <Link to="/task1" className="list-group-item list-group-item-action">Task 1</Link>
        <Link to="/task2" className="list-group-item list-group-item-action">Task 2</Link>
        <Link to="/task3" className="list-group-item list-group-item-action">Task 3</Link>
        <Link to="/task4" className="list-group-item list-group-item-action">Task 4</Link>
        <Link to="/task5" className="list-group-item list-group-item-action">Task 5</Link>

        <div className="pb-3"></div>

        <h1 className="text-white p-3">CSS</h1>
        {Array.from({ length: 10 }, (_, index) => (
          <Link key={index} to={`/task${index + 6}`} className="list-group-item list-group-item-action">
            Task {index + 1}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;





