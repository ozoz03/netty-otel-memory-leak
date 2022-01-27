module.exports = {
  beforeRequest: beforeRequest,
  afterResponse: afterResponse
}

request_num = 0;

function beforeRequest(request, context, ee, next) {
  request.json = { number: request_num++ }
  console.log("\tREQUEST:\t" + request.json.number);
  return next();
}

function afterResponse(request, response, context, ee, next) {
	console.log("\tRESPONSE:\t" + response.body);  
  return next();
}

