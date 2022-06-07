class QueryHelper {
  static filterBody(allowedParameters, body){
    let query;

    Object.keys(body).map(key => {
      if(key && allowedParameters.includes(key)){
          query[key] = body[key];
      }
    });

    return query;
  }
}

module.exports = QueryHelper;