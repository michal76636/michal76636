import axios from 'axios';



export async function loginUser(user) {
    const res =   await axios.get(`http://localhost:4000/getUser/${user.name}/${user.password}`)
    console.log( res);
    return res.data
  }

  export async function signUpUser(user) {
    return   await axios.post('http://localhost:4000/newUser', user).then(
           res => {
               console.log('login work ' + JSON.stringify(res));
            //   localStorage.setItem('userId', res.data.user._id)
               return res.data
           },
           err => {
               console.log('error login: ' + err);
           }
       )
   }
   export async function createImage(image) {
    return   await axios.post(`http://localhost:4000/createImage/${localStorage.getItem('token')}`, image).then(
           res => {
               console.log('image work ' + JSON.stringify(res));
               return res.data
           },
           err => {
               console.log('error login: ' + err);
           }
       )
   }

   export async function getHistoryImg() {
    const promise = new Promise((resolve, rejects) => {
         axios.get(`http://localhost:4000/getImages/${localStorage.getItem('token')}`).then(
             res => {
                resolve(res.data)      
                  },
            err => {
                rejects(err)
            }
        )
    } )   
    return promise;

   }

   export function deleteUserPost(url) {
    const token = localStorage.getItem('token');
    const promise = new Promise((resolve, rejects) => {
        axios.delete(`http://localhost:4000/deleteImg/${localStorage.getItem('token')}/${url}`)
            .then(
                res => {
                    console.log(" deleted")
                    console.log(res.data)
                    resolve(res.data)
                },
                err => {
                    console.log("error deleting")
                    console.log(err)
                    rejects(err)
                }
            );
    })
    return promise;
}


   
//    export async function getImageById() {

//     try {
//         const userId = localStorage.getItem("userId")
//         const res = await axios.get(`http://localhost:4000/getImageById/${userId}`)

//         console.log('get history question work ' + res);
//         return res.data
//     } catch (error) {
//         console.log(error);
//     }
// }
