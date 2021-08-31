const axios = require('axios').default;

const options = {
    method: 'GET',
    url: 'https://quotes15.p.rapidapi.com/quotes/random/',
    headers: {
      'x-rapidapi-host': 'quotes15.p.rapidapi.com',
      'x-rapidapi-key': '3f4fda833emsh76e80a91e4f3738p135331jsne50251074fad'
    }
  };

  const axios_index = (request, response, next)=>{
      let apiData;
      axios.request(options)
      .then(function(res) {
        console.log(res.data);
        apiData=res.data;
        response.render('axios/trending',{title:'API Content',data:apiData.content});
      })
      .catch(function(error){
          console.error(error);
      });
  }
  module.exports={axios_index}