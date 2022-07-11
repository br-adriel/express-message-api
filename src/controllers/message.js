function message(request, response) {
  response.send(request.body);
}

export { message };
