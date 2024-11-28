export default apiStatus;

function apiStatus(request, response) {
  response.status(200).json({
    Chave: "Config Api",
    Chave2: "Teste",
  });
}
