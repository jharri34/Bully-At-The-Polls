// eslint-disable-next-line
import config from '../shared/config'

export async function getElections() {
    let url =config.ELECTION_URL + config.QUERY_KEY + config.API_KEY
    return await fetch(url)
    
  }   