import {connect} from "react-redux";
import App from "./App";
import {userLogIn} from "./redux/userReducer";

const mapStateToProps = () => {
    return {}
}

const AppContainer = connect(mapStateToProps,{
    userLogIn
})(App)

export default AppContainer