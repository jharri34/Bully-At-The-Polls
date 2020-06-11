// eslint-disable-next-line

export async function getElections() {
  
    let data = await (await (fetch(`https://www.googleapis.com/civicinfo/v2/elections?key=${process.env.REACT_APP_API_KEY}`)
    .then(res => {
      return res.json()
    })
    .catch(err => {
      console.log(`Error: ${err}`)
    })
  ))
  console.log(data);
  return data   
 
  }