export default function getToken() {
  return {
    headers: {
      Authorization: localStorage.tokenPorfolio,
    },
  };
}
