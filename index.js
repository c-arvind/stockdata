//import
const { rtConnect, rtFeed, historical, formatTime} =require('truedata-nodejs');
const cron =require('node-cron');
require('dotenv').config()

//auth
const user = process.env.STOCK_USER;
const pwd = process.env.STOCK_PWD;
const port = process.env.STOCK_PORT;

const symbols = ['NIFTY50' , 'NIFTY BANK' , 'NIFTY AUTO' , 'NIFTY FMCG' , 'NIFTY IT' , 'NIFTY METAL' , 'NIFTY PHARMA' , 'NIFTY REALTY' , 'RELIANCE' , 'TCS' , 'HDFCBANK' , 'INFY' , 'HINDUNILVR' , 'ICICIBANK' , 'HDFC' , 'SBIN' , 'BAJFINANCE' , 'BHARTIARTL' , 'KOTAKBANK' , 'WIPRO' , 'HCLTECH' , 'DMART' , 'ASIANPAINT' , 'BAJAJFINSV' , 'ITC' , 'LT' , 'AXISBANK' , 'MARUTI' , 'ULTRACEMCO' , 'TITAN' , 'ADANITRANS' , 'SUNPHARMA' , 'ONGC' , 'NESTLEIND' , 'ADANIGREEN' , 'TATAMOTORS' , 'JSWSTEEL' , 'ATGL' , 'TATASTEEL' , 'ADANIENT' , 'TECHM' , 'ADANIPORTS' , 'HDFCLIFE' , 'DIVISLAB' , 'HINDZINC' , 'POWERGRID' , 'NTPC' , 'IOC' , 'PIDILITIND' , 'LTI' , 'SBILIFE' , 'GRASIM' , 'VEDL' , 'M&M' , 'BAJAJ-AUTO' , 'DABUR' , 'ZOMATO' , 'HINDALCO' , 'SHREECEM' , 'COALINDIA' , 'SBICARD' , 'DLF' , 'GODREJCP' , 'BPCL' , 'ICICIPRULI' , 'BRITANNIA' , 'INDUSINDBK' , 'INDIGO' , 'AMBUJACEM' , 'HAVELLS' , 'NAUKRI' , 'SIEMENS' , 'DRREDDY' , 'TATACONSUM' , 'MINDTREE' , 'MARICO' , 'INDUSTOWER' , 'CIPLA' , 'ICICIGI' , 'BERGEPAINT' , 'MOTHERSUMI' , 'MCDOWELL-N' , 'TATAPOWER' , 'EICHERMOT' , 'IRCTC' , 'GAIL' , 'SRF' , 'PEL' , 'GODREJPROP' , 'APOLLOHOSP' , 'GLAND' , 'MPHASIS' , 'MUTHOOTFIN' , 'JSWENERGY' , 'UPL' , 'HDFCAMC' , 'IDBI' , 'BAJAJHLDNG' , 'HEROMOTOCO' , 'CADILAHC' , 'CHOLAFIN' , 'BANKBARODA' , 'BEL' , 'BOSCHLTD' , 'LTTS' , 'JUBLFOOD' , 'TORNTPHARM' , 'BALKRISIND' , 'SAIL' , 'BANDHANBNK' , 'PNB' , 'PGHH' , 'PIIND' , 'ABB' , 'HINDPETRO' , 'ASTRAL' , 'UBL' , 'ACC' , 'HAL' , 'ALKEM' , 'GUJGASLTD' , 'ABBOTINDIA' , 'JINDALSTEL' , 'BIOCON' , 'PAGEIND' , 'COLPAL' , 'NMDC' , 'LUPIN' , 'ASHOKLEY' , 'AUROPHARMA' , 'IOB' , 'CONCOR' , 'VOLTAS' , 'CANBK' , 'ADANIPOWER' , 'SRTRANSFIN' , 'OFSS' , 'AUBANK' , 'DALBHARAT' , 'TATACOMM' , 'HONAUT' , 'VBL' , 'TATAELXSI' , 'BHARATFORG' , 'TRENT' , 'PFC' , 'AARTIIND' , 'PETRONET' , 'POLYCAB' , 'MFSL' , 'IGL' , 'RELAXO' , 'OBEROIRLTY' , 'MRF' , 'MAXHEALTH' , 'YESBANK' , 'IRFC' , 'UNIONBANK' , 'TVSMOTOR' , 'NHPC' , 'IDFCFIRSTB' , 'DEEPAKNTR' , 'PERSISTENT' , 'SUPREMEIND' , 'COFORGE' , 'KANSAINER' , 'RECLTD' , 'DIXON' , 'LALPATHLAB' , 'CROMPTON' , 'ZEEL' , 'HATSUN' , '3MINDIA' , 'WHIRLPOOL' , 'LAURUSLABS' , 'RUCHI' , 'IDEA' , 'IPCALAB' , 'ATUL' , 'TIINDIA' , 'SUNDARMFIN' , 'NAM-INDIA' , 'JKCEMENT' , 'ENDURANCE' , 'GLAXO' , 'BATAINDIA' , 'RAMCOCEM' , 'NIACL' , 'CUMMINSIND' , 'ABFRL' , 'BANKINDIA' , 'GMRINFRA' , 'OIL' , 'TORNTPOWER' , 'ISEC' , 'BHEL' , 'EMAMILTD' , 'INDHOTEL' , 'GICRE' , 'ABCAPITAL' ,];
const symtest = ['RELIANCE','WIPRO','HDFC']

//live ticks
rtConnect(user, pwd, 'RELIANCE', port, bidask = 1, heartbeat = 0);
rtFeed.on('tick', tickHandler);

function tickHandler(tick){
    console.log(tick);
}

// historical
// historical.auth(user,pwd);
//   .getTickData('NIFTY-I', duration='1D',interval="60min", (bidask = 1), (response = 'json'), (getSymbolId = 0))
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// console.log("heloo");
// cron.schedule('0 * * * *', () => {
//     console.log("heloo");
//   });