import React from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./BlogSidebarCategories.css";


import { SidebarCategories } from "../../Constant/Constant";


class BlogSidebarCategories extends React.Component {
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <div className="blog__sidebar__item">
          <h4>Categories</h4>
          <ul>

            {(SidebarCategories || []).map((currentObject, index) => 

              Object.keys(currentObject).map((key, index) => 

                  <Link key={`link`+index} className="blog__sidebar__recent__item"
                    to={{
                      pathname: `/Home/${key}`,
                      state: { 'key': key }
                    }}>

                    <li key={`li`+index}>
                    <a key={`anch`+index} href="#">{currentObject[key]}</a>
                    </li>
                  </Link>
              )
            )}
          </ul>
        </div>

      </div>
    );
  }
}

export default BlogSidebarCategories;

