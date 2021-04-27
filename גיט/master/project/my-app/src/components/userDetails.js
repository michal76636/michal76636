import React from 'react';
import { connect } from 'react-redux';
import {actionsUser} from '../redux/actions/actionsUser'
function mapStateToProps(state) {
   // debugger;
    return {
        user: state.userReducer.user,
        users: state.userReducer.users
    };
}

const mapDispatchToProps = (dispatch) => ({
    setNameUser: (name) => dispatch(actionsUser.setNameUser(name)),
    setPasswordUser: (password) => dispatch(actionsUser.setPasswordUser(password)),
    addUser: (user) => dispatch(actionsUser.addUser(user)),

})
export default connect(mapStateToProps, mapDispatchToProps)(function UserDetails(props) {
    const { user, users, setNameUser, setPasswordUser, addUser } = props;
    return (
        <div>
           <h5 style={{ textShadow: "1.5px 1.5px crimson" }} id="exampleModalLabel">:הכנס פרטים</h5>
        </div>
    );
})
