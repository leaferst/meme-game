const verifyAuthorization = (req,res,next) => {

  const fullURL = 'http://' + req.headers.host + req.url;

  const query = url.parse(fullURL,true);

  console.log('headers: ', req.headers);
  console.log('body: ', req.bodyy);
  console.log('params: ', req.params);
  console.log('query: ', query);

  next();
}

module.exports = verifyAuthorization;