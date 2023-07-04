const Coinmarketcap = async () => {
  const url = `https://min-api.cryptocompare.com/datas/price?fsym=BTC&tsyms=USD`
  const resp = await fetch(url)
  const datas = await resp.json()

  console.log(datas);

 
};

export default Coinmarketcap;
