import React from 'react';
import './Menu.css'; // Import your CSS file for styling

const Menu = () => {
  return (
    <section className="menu-section">
      <div className="container">
        <h2>SPECIAL MENU</h2>
        <div className="menu-items">

          <div className="menu-item">
            <img src="meal 1.jpg" alt="meal 1" />
            <h3>Item Name</h3>
          </div>
          <div className="menu-item">
            <img src="meal 2.jpg" alt="meal 2" />
            <h3>Item Name</h3>
          </div>

          <div className="menu-item">
            <img src="meal 3.jpg" alt="meal 3" />
            <h3>Item Name</h3>
          </div>

          <div className="menu-item">
            <img src="meal 4.jpg" alt="meal 4" />
            <h3>Item Name</h3>
          </div>

          <div className="menu-item">
            <img src="meal 5.jpg" alt="meal 5" />
            <h3>Item Name</h3>
          </div>

          <div className="menu-item">
            <img src="meal 6.jpg" alt="meal 6" />
            <h3>Item Name</h3>
          </div>

          <div className="menu-item">
            <img src="meal 7.jpg" alt="meal 7" />
            <h3>Item Name</h3>
          </div>

          <div className="menu-item">
            <img src="meal 8.jpg" alt="meal 8" />
            <h3>Item Name</h3>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Menu;
