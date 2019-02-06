import React, { Component } from 'react';
import MenuDropdownItem from "./menu_dropdown_item";

import "../assets/web/assets/mobirise-icons/mobirise-icons.css";
import "../assets/tether/tether.min.css";
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/bootstrap/css/bootstrap-grid.min.css";
import "../assets/bootstrap/css/bootstrap-reboot.min.css";
import "../assets/dropdown/css/style.css";
import "../assets/socicon/css/styles.css";
import "../assets/theme/css/style.css";
import "../assets/gallery/style.css";
import "../assets/mobirise/css/mbr-additional.css";

class NavItem extends Component {

  createDropdownItem = () => {
    const items = this.props.info.nav_subitems;
    const listItems = [];
    for (let value of items) {
      listItems.push(<MenuDropdownItem url={value.url} content={value.name} key={value.name}/>);
    }
    return listItems;
  }

  render(){
    return (
      <li className="nav-item dropdown ">
        <a className="nav-link link text-black dropdown-toggle display-4"
          href={this.props.info.nav_item_url}
          data-toggle="dropdown-submenu"
          aria-expanded="true"
        >{this.props.info.nav_item_name}
        </a>
        <div className="dropdown-menu">
          {this.createDropdownItem()}
        </div>
      </li>
    );
  }
}

export default NavItem;
