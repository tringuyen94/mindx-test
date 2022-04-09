import Services from '../../services/shortener.service'


export const shortenLink = (url) => {
   return dispatch => {
      Services.shortenLink(url)
         .then(res => dispatch({ type: "SUCCESS", payload: res.data }))
         .catch(err => console.log(err))
   }
}