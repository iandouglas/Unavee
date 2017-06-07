import { connect } from 'react-redux'
import Home from './Home'
import { searchResults } from '../actions/index'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchResult: (search) => {
      return dispatch(searchResults(search))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
