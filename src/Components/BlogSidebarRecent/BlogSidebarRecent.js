import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./BlogSidebarRecent.css";


class BlogSidebarRecent extends React.Component {
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const data = this.props.data;

        return (
            <div>
                <div className="blog__sidebar__item">
                    <h4>Recent News</h4>
                    <div className="blog__sidebar__recent">

                        {(data || []).slice(0, 4).map((currentObject, index) => (

                            <Link key={`link`+index} className="blog__sidebar__recent__item"
                                to={{
                                    pathname: `/NewsSummary/${index}`,
                                    state: { 'id': index }
                                }}>
                                <div key={`sec1`+index} className="blog__sidebar__recent__item__pic">
                                    <img key={`img`+index} style={{ "width": "85px", "height": "60px" }} src={currentObject['urlToImage']} alt="" />
                                </div>
                                <div key={`sec2`+index} className="blog__sidebar__recent__item__text">
                                    <h6 key={`title`+index}>{currentObject['title']}<br /> {currentObject['author']}</h6>
                                    <span key={`publishedAt`+index}>{currentObject['publishedAt']}</span>
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>

            </div>
        );
    }
}

export default BlogSidebarRecent;

