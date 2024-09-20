import PropTypes from 'prop-types';

// Realiza requisição async
function Requests( url, modo, dados ) {

    const realiza_requisição = async () => { 
        const settings = {
          method: modo,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
            body: dados
        };
        try {
          const fetchResponse = await fetch(url, settings);
          const data = await fetchResponse.json();
          console.log(data);
          return await data;
      } catch (e) {
          console.log(e);
          return null;
      }
    }

    return realiza_requisição();

};

Requests.propTypes = {
    url: PropTypes.func.isRequired,
    modo: PropTypes.func.isRequired,
}


export default Requests;