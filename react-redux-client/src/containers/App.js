// ./react-redux-client/src/containers/App.js
import { connect } from 'react-redux';
import * as appActions from '../actions/appActions';
import App from '../components/App';
import * as itemActions from '../actions/itemActions';


// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedAppState: state.appState
  }
}


// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedToggleAddItem: () => dispatch(appActions.toggleAddItem()),
    mappedAddItem: item => dispatch(itemActions.addNewItem(item))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);