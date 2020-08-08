//Fetch News List 

const fetchList = (category) => ({
  type: "FETCH_LIST",
  category: category
});

const fetchListSuccess = (data, subTotalAmount) => ({
  type: "FETCH_LIST_SUCCESS",
  data,
  subTotalAmount
});

const fetchListError = error => ({
  type: "FETCH_LIST_ERROR",
  error
});

// Search text Change  
const searchTextChange = (val) => ({
  type: "UPDATE_SEARCH_TEXT",
  searchValue: val
});


const searchTextChangeSuccess = (data, subTotalAmount) => ({
  type: "UPDATE_SEARCH_TEXT_SUCCESS",
  data,
  subTotalAmount
});

const searchTextChangeError = error => ({
  type: "UPDATE_SEARCH_TEXT_ERROR",
  error
});

// Search text Submit 
const searchTextSubmit = (val) => ({
  type: "SUBMIT_SEARCH_TEXT",
  searchValue: val
});


const searchTextSubmitSuccess = (data, subTotalAmount) => ({
  type: "SUBMIT_SEARCH_TEXT_SUCCESS",
  data,
  subTotalAmount
});

const searchTextSubmitError = error => ({
  type: "SUBMIT_SEARCH_TEXT_ERROR",
  error
});

export {
  fetchList, fetchListSuccess, fetchListError, searchTextChange, searchTextChangeSuccess, searchTextChangeError, searchTextSubmit, searchTextSubmitSuccess, searchTextSubmitError
};
