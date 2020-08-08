import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./NewsList.css";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import BlogSidebarItems from "../BlogSidebarItems/BlogSidebarItems";
import BlogSidebarRecent from "../BlogSidebarRecent/BlogSidebarRecent";
import BlogSidebarCategories from "../BlogSidebarCategories/BlogSidebarCategories";
import BlogSidebarSearch from "../BlogSidebarSearch/BlogSidebarSearch";

class NewsList extends React.Component {

    searchTextChange = (val) => {
        this.props.searchTextChange(val);
    }
    searchTextSubmit = () => {
        this.props.searchTextSubmit();
    }

    render() {
        const data = this.props.data;

        return (
            <div className="main shoping-cart spad">

                <Breadcrumb />
                {/* <!-- Blog Section Begin --> */}
                <section className="blog spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-5">
                                <div className="blog__sidebar">

                                    <BlogSidebarSearch searchTextSubmit={this.searchTextSubmit} searchTextChange={this.searchTextChange} data={data} />

                                    <BlogSidebarCategories data={data} />

                                    <BlogSidebarRecent data={data} />

                                    <BlogSidebarItems data={data} />
                                </div>
                            </div>
                            { (this.props.isLoading === true) ? <div>Loading...</div> : ''}
                            <div className="col-lg-8 col-md-7">
                                <div className="row">

                                    {(data || []).map((currentObject, index) => (
                                        <div key={`sec1` + index} className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="blog__item">
                                                <div className="blog__item__pic">
                                                    <img key={`urlToImage` + index} style={{ "width": "360px", "height": "270px" }} src={currentObject['urlToImage']} alt="" />
                                                </div>
                                                <div className="blog__item__text">
                                                    <ul key={`ul` + index}>
                                                        <li key={`publishedAt` + index}><i className="fa fa-calendar-o"></i> {currentObject['publishedAt']}</li>
                                                        <li><i className="fa fa-comment-o"></i> 5</li>
                                                    </ul>
                                                    <h5 key={`h5title` + index}>
                                                        <Link key={`link` + index}
                                                            to={{
                                                                pathname: `/NewsSummary/${index}`,
                                                                state: { 'id': index }
                                                            }}><a key={`title` + index} href="#">{currentObject['title']}</a></Link>

                                                    </h5>

                                                    <p key={`description` + index}>{(currentObject['description'].length > 85) ? currentObject['description'].substring(0, 85) + '...' : currentObject['description']}
                                                    </p>
                                                    <Link key={`link` + index} className="blog__btn"
                                                        to={{
                                                            pathname: `/NewsSummary/${index}`,
                                                            state: { 'id': index }
                                                        }}>READ MORE</Link>

                                                    <span className="arrow_right"></span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Blog Section End --> */}
            </div>
        );
    }
}

export default NewsList;
