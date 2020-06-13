const _express = require('express');
const _server = _express();

const _port = 4000;

const { Pool, Client } = require("pg");

//const 

const postOperation =  function(sumando01, sumando02){
  var respuesta = sumando01 + sumando02;

  pool = new Pool({
    host: 'localhost',
   user: 'postgres',
   password: 'Prueba@2020',
   database: 'operaciones',
   port: '5432'
 });

  if (typeof respuesta !== "undefined" && respuesta!==null && !isNaN(respuesta)){
    pool.query('INSERT INTO public."Suma"("Numero1", "Numero2", "Resultado") VALUES ('+ sumando01+','+sumando02+','+respuesta+')'
    );
    return respuesta;
  }else{
    return "Bad request";
  }    
}

const guardar = _server.get('/retoibm/sumar/:sumando01/:sumando02', function(request, response) {
  try{
    var _sumando01 = new Number(request.params.sumando01);
    var _sumando02 = new Number(request.params.sumando02);
        
    var responsePost = postOperation(_sumando01,_sumando02);
    return response.status(200).json({resultado : responsePost});
  }
  catch(e){
    return response.status(500).json({resultado : e});
  }
});


guardar.listen(_port, () => {
   console.log(`Server listening at ${_port}`);
});