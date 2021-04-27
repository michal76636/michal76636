import produce from 'immer';
import createReducer from './reducerUtils'
const initialState = {
  user: {
    _id: " ",
    name: " ",
    email: "",
    password: " ",

  },
  images: [
    //   {
    //     url: " ",
    //     date: " ",
    //     title: "", 
    // }
  ],
}
const users = {
  setName(state, action) {
    state.user.name = action.payload;
  },
  setPassword(state, action) {
    state.user.password = action.payload;
  },
  setEmail(state, action) {
    state.user.email = action.payload;
  },
  addUser(state, action) {
    let newUsers = [...state.users, action.payload]
    state.users = newUsers
  },
  setImg(state, action) {
    state.img.name = action.payload;
  },
  setDate(state, action) {
    state.img.date = action.payload;
  },
  setTitle(state, action) {
    state.img.title = action.payload;
  },
  addImage(state, action) {
    state.images = [...state.images, action.payload]
  },
  setAllImg(state, action) {
    state.images = action.payload;},
    setHistoryPosts(state, action) {
      state.setHistoryImages = action.payload;
  },
  deleteImg(state, action) {
    let i = action.payload;
    let im = state.images.findIndex(image => image.url === i);
    state.posts.splice(im, 1)
},
};

export default produce((state, action) => createReducer(state, action, users), initialState);
