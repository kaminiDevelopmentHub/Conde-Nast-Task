import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./Breadcrumb.css";


class Breadcrumb extends React.Component {
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {

    return (
      <div>
        {/* <!-- Breadcrumb Section Begin --> */}
        <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="breadcrumb__text">
                                    <h2>Breaking News</h2>
                                    {/* <div className="breadcrumb__option">
                                        <a href="./index.html">Home</a>
                                        <span>Blog</span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Breadcrumb Section End --> */}
        
      </div>
    );
  }
}

export default Breadcrumb; 

