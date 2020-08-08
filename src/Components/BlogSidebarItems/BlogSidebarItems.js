import React from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./BlogSidebarItems.css";


import { SidebarCategories } from "../../Constant/Constant";


class BlogSidebarItems extends React.Component {
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (




            <div>
                <div className="blog__sidebar__item">
                    <h4>Search By</h4>
                    <div className="blog__sidebar__item__tags">

                        {(SidebarCategories || []).map((currentObject, index) =>

                            Object.keys(currentObject).map((key, index) =>

                                <Link key={`link`+index} className="blog__sidebar__recent__item"
                                    to={{
                                        pathname: `/Home/${key}`,
                                        state: { 'key': key }
                                    }}>

                                    <a key={`ach`+index} href="#">{currentObject[key]}</a>
                                </Link>
                            )
                        )}

                    </div>
                </div>



            </div>

        );
    }
}

export default BlogSidebarItems;


