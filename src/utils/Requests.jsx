import PropTypes from 'prop-types';

// Realiza requisição async
function Requests( url, modo, dados ) {



    const realiza_requisição = async () => { 
        console.log(dados);
        const settings = {
          method: modo,
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
            body: JSON.stringify(dados)
        };
        try {
          const fetchResponse = await fetch(url, settings);
          const data = await fetchResponse.json();
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
    dados: PropTypes.func.isRequired,
}


export default Requests;