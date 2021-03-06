import React from 'react';


const Hamburger = (props) => {

    return (
      <button className="navbar-toggler navbar-toggler-right" type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    );

}

export default Hamburger;
