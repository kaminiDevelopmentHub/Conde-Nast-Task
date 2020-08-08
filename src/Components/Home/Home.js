import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";
import {
  fetchList, searchTextChange, searchTextSubmit
} from "./homeAction";
import NewsList from "../NewsList/NewsList";
import Header from "../Header/Header";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: (this.props.location && this.props.location.state && this.props.location.state.key) ? this.props.location.state.key : "bitcoin"
    };
  }

  searchTextChange = (val) => {
    this.props.searchTextChange(val);
  };
  searchTextSubmit = () => {
    this.props.searchTextSubmit(this.props.searchValue);
  };

  componentDidMount() {
    const category = (this.props.location && this.props.location.state && this.props.location.state.key) ? this.props.location.state.key : "apple";
    this.props.fetchLists(category);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.location !== prevState.location) {
      const category = (nextProps.location && nextProps.location.state && nextProps.location.state.key) ? nextProps.location.state.key : "apple";
      if (category !== prevState.location) {
        nextProps.fetchLists(category);
        return {
          location: category
        };
      }
      else return null;
    }
  }

  render() {
    const { data, isLoading, subTotalAmount } = this.props;

   

    return (
      <div>
        <Header subTotalAmount={subTotalAmount} />
        <NewsList showCheckoutPage={this.showCheckoutPage}
          searchTextChange={this.searchTextChange}
          searchTextSubmit={this.searchTextSubmit}
          data={data} subTotalAmount={subTotalAmount} 
          isLoading={isLoading}/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoading: state.home.isLoading,
    data: state.home.data,
    searchValue: state.home.searchValue,
    error: state.home.error
  };
};

const mapDispatchToProps = dispatch => ({
  fetchLists: (category) => dispatch(fetchList(category)),
  searchTextChange: (val) => dispatch(searchTextChange(val)),
  searchTextSubmit: (val) => dispatch(searchTextSubmit(val))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

