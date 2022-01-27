module.exports = {
  beforeRequest: beforeRequest,
  afterResponse: afterResponse
}

request_num = 0;

function beforeRequest(request, context, ee, next) {
  console.log("\tREQUEST:  #" + request_num++);
  return next();
}

function afterResponse(request, response, context, ee, next) {
  console.log("\tRESPONSE: #" + request_num);
  return next();
}