let initState = {
   isOk: false,
   result: {},
   typeShorten:null,
}

const linkReducer = (state = initState, actions) => {
   switch (actions.type) {
      case "SUCCESS":
         state.isOk = true
         state.result = actions.payload
         return { ...state }
      default:
         return state
   }
}

export default linkReducer