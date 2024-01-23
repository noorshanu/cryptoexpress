import { TickerTape } from "react-ts-tradingview-widgets";

function TikerWig() {
    const defaultSymbols = [
   
    
     
        {
          "proName": "BITSTAMP:BTCUSD",
          "title": "BTC/USD"
        },
        {
          "proName": "BITSTAMP:ETHUSD",
          "title": "ETH/USD"
        }
      ];
    
      // Additional symbols (e.g., Dogecoin and more)
      const additionalSymbols = [
        {
          "proName": "CRYPTOCAP:DOGE",
          "title": "DogeCoin"
        },
        {
          "proName": "BINANCE:ADAUSD",
          "title": "Cardano (ADA)"
        },
        {
          "proName": "BINANCE:XRPUSD",
          "title": "Ripple (XRP)"
        }
      ];
    
      const allSymbols = [...defaultSymbols, ...additionalSymbols];
  return (
  <div className=" my-4">
      <TickerTape
        colorTheme="dark"
        symbols={allSymbols}
        showSymbolLogo={true}
        isTransparent={false}
        displayMode="adaptive"
        locale="en"
      />
  </div>
  )
}

export default TikerWig