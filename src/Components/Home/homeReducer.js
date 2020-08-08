const initialState = {
  isLoading: false,
  searchText: '',
  error: null,
  timelineWidth: 0,
  
  
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch news list 
    case "FETCH_LIST":
      return { ...state, ...action, isLoading: true };

    case "FETCH_LIST_SUCCESS":
      return { ...state, ...action, isLoading: false };

    case "FETCH_LIST_ERROR":
      return { ...state, error: action.error, isLoading: false };

    //Search Text Change 
    case "UPDATE_SEARCH_TEXT":
      return { ...state, ...action, isLoading: false };
    case "UPDATE_SEARCH_TEXT_SUCCESS":
      return { ...state, ...action, isLoading: false };
    case "UPDATE_SEARCH_TEXT_ERROR":
      return { ...state, error: action.error, isLoading: false };

    //Search Submit 
    case "SUBMIT_SEARCH_TEXT":
      return { ...state, ...action, isLoading: false };
    case "SUBMIT_SEARCH_TEXT_SUCCESS":
      return { ...state, ...action, isLoading: false };
    case "SUBMIT_SEARCH_TEXT_ERROR":
      return { ...state, error: action.error, isLoading: false };
      
    default:
      return state;
  }
};

export default homeReducer;
