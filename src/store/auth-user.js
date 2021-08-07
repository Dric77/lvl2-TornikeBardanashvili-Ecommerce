// import {ONLOG_IN} from "./reduxTypes";
// import API from "../api";
// import {AuthHelpers} from "./authHelpers";
//
// const initialState = {isLoggedIn: false}
//
// const user = (state = initialState, action) => {
//     switch (action.type) {
//         case ONLOG_IN:
//             return { () => {
//                 console.log(('reduxxxx'))
//                     let userInfo = {
//                         email: action.email,
//                         password: action.password
//                     };
//                     // setLoadign(false);
//                     API.authUser("auth/login", "POST", userInfo)
//                         .then((user) => {
//                             if (user.user) {
//                                 AuthHelpers.checkUserLogedIn(user);
//                                 state.isLoggedIn = false;
//                             }
//                         })
//                         // .catch((e) => {
//                         //     let errs = JSON.parse(e);
//                         //     errs.errors.map((el) => {
//                         //         setErrorMessage(...errorMessage, el);
//                         //     });
//                         // })
//                         // .finally(() => setLoadign(false));
//                 }}
//         case 'counter/decremented':
//             return { value: state.value - 1 }
//         default:
//             return state
//     }
// };
//
// export default user;
