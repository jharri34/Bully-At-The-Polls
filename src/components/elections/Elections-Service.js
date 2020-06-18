// eslint-disable-next-line
import config from '../shared/config'

export const getElections =  async () => {
    let url =config.ELECTION_URL + config.QUERY_KEY + config.API_KEY
    return await fetch(url)
    
  }   

  