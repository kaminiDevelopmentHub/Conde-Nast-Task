import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./BlogSidebarSearch.css";

class BlogSidebarSearch extends React.Component {
  
  searchTextChange = (e) => {
    this.props.searchTextChange(e.target.value);
  }
  searchTextSubmit = () => {
    this.props.searchTextSubmit();
  }

  render() {
    return (
      <div>
        <div className="blog__sidebar__search">
          <form onSubmit={e => e.preventDefault()}>
            <input type="text" onChange={e => this.searchTextChange(e)} placeholder="Search..." />
            <button type="submit" onClick={this.searchTextSubmit}><span className="icon_search"></span></button>
          </form>
        </div>
      </div>
    );
  }
}

export default BlogSidebarSearch;

