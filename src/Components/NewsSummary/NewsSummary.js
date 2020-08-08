import React from "react";
import { connect } from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import { Redirect } from 'react-router-dom'
import { withRouter } from "react-router";
import Header from "../Header/Header";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import BlogSidebarItems from "../BlogSidebarItems/BlogSidebarItems";
import BlogSidebarRecent from "../BlogSidebarRecent/BlogSidebarRecent";
import BlogSidebarCategories from "../BlogSidebarCategories/BlogSidebarCategories";
import BlogSidebarSearch from "../BlogSidebarSearch/BlogSidebarSearch";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./NewsSummary.css";


class NewsSummary extends React.Component {
    constructor(props) {
        super(props);
      }
    componentDidMount() {
    }
    
    componentWillUnmount() {

    }
    showGreetings = () => {
        this.props.showGreetings();
    }
    renderRedirect = () => {
        if (!this.props.data) {
          return <Redirect to='/Home' />
        }
      }
    render() {
        
        console.log("this.props",this.props);
        console.log("this.props.testvalue",this.props.testvalue);
        console.log("this.props.location",this.props.location.state.id);
        const data = this.props.data;
        console.log("dta==", data)
        return (
            <div>
                {this.renderRedirect()}
                <Header />
                <Breadcrumb />
                {/* <!-- Blog Details Section Begin --> */}
                <section class="blog-details spad">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-5 order-md-1 order-2">
                                <div class="blog__sidebar">
                                    <BlogSidebarSearch data={data} />

                                    <BlogSidebarCategories data={data} />

                                    <BlogSidebarRecent data={data} />

                                    <BlogSidebarItems data={data} />
                                </div>
                            </div>
                            { (this.props.isLoading === true) ? <div>Loading...</div> : ''}
                            {( ( data || [] ) .filter((key, index) => index == this.props.location.state.id)).map(currentObject => (
                                <div class="col-lg-8 col-md-7 order-md-1 order-1">
                                    <div class="blog__details__text">
                                        <img src={currentObject['urlToImage']} alt="" />
                                        <h3>{currentObject['title']}</h3>
                                        <p>{currentObject['description']}</p>

                                        <p>{currentObject['content']}</p>
                                    </div>
                                    <div class="blog__details__content">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="blog__details__author">
                                                    <div class="blog__details__author__pic">
                                                        <img src="img/blog/details/details-author.jpg" alt="" />
                                                    </div>
                                                    <div class="blog__details__author__text">
                                                        <h6>{currentObject['author']}</h6>
                                                        <span>{currentObject['publishedAt']}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-6">
                                                <div class="blog__details__widget">
                                                    <ul>
                                                        <li><span>Categories:</span> Food</li>
                                                        <li><span>Tags:</span> All, Trending, Cooking, Healthy Food, Life Style</li>
                                                    </ul>
                                                    <div class="blog__details__social">
                                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                                        <a href="#"><i class="fa fa-google-plus"></i></a>
                                                        <a href="#"><i class="fa fa-linkedin"></i></a>
                                                        <a href="#"><i class="fa fa-envelope"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* <!-- Blog Details Section End --> */}
            </div>
        );
    }
}


const mapStateToProps = state => {
    console.log("state==", state)
    return {
        isLoading: state.home.isLoading,
        data: state.home.data,
        error: state.home.error
    };
};

export default withRouter(connect(mapStateToProps)(NewsSummary));
