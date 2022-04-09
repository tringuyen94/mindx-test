import restConnector from "./baseURL";


class Service {
   shortenLink(linkNeedToShorten) {
      return restConnector({
         url: `/shorten?url=${linkNeedToShorten}`,
         method:'GET',
      })
   }
}

export default new Service()