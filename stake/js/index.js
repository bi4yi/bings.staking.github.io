"use strict";

const stakingAddress = '0xf7012816941Ac0b356F0aE4a7066AFCbd1212318'; //staking
const stakingAbi = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"percentPer","type":"uint256"},{"internalType":"uint256","name":"accrualPeriod","type":"uint256"},{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"InvestPlans","outputs":[{"internalType":"string","name":"title","type":"string"},{"internalType":"uint256","name":"min_amount","type":"uint256"},{"internalType":"uint256","name":"max_amount","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"term","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENT_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"close","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAccrualPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPercentPer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTokenBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getUserActiveInvestedTarif","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserCountActiveDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserCountDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getUserDepositInfo","outputs":[{"components":[{"internalType":"uint256","name":"investplan","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"withdrawn","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"percentPer","type":"uint256"},{"internalType":"uint256","name":"accrualPeriod","type":"uint256"},{"internalType":"uint256","name":"term","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"tw","type":"uint256"},{"internalType":"uint256","name":"status","type":"uint256"}],"internalType":"struct StakingBINGS.Deposit","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"i","type":"uint256"}],"name":"getUserDividendsDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getUserDividendsTarif","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getUserStakedTarif","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalActiveDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getUserTotalInvestedTarif","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getUserUnstakedTarif","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"reinvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"}],"name":"setAccrualPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"}],"name":"setPercentPer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"testCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"withdrawn","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const contractAddress = '0xa1D93fb78e61b53E618A7a770a1919bA625cC6D9'; //fcfs launchpad
const contractAbi = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"sale_days","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"minBUSD","type":"uint256"},{"internalType":"uint256","name":"maxBusdUser","type":"uint256"},{"internalType":"uint256","name":"forSale","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"divider","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"existsAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDivider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeftToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListWithdrawalDate","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"internalType":"struct SaleWL.Limit[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxBusdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextWithdrawalDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserWithdrawNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"insertAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_listAddresses","type":"address[]"}],"name":"insertListAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"limits","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setDivider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMaxBusdUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMinBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setSaleDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_x","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setTotalSold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingUserTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const tokenAddress = '0x07800715245D547Ad6b483f34Ce8c392523AC8eC'; //main token
const tokenAbi = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountIn","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"path","type":"address[]"}],"name":"SwapETHForTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountIn","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"path","type":"address[]"}],"name":"SwapTokensForETH","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"BurnedWalletAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_BurnedShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_buyBurnedFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_buyLiquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_buyMarketingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_liquidityShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_marketingShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_sellBurnedFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_sellLiquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_sellMarketingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_totalDistributionShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_totalTaxIfBuying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_totalTaxIfSelling","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_walletMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"blacklistMode","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"coolBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deadAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"genesisBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCirculatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isMarketPair","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isTxLimitExempt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isWalletLimitExempt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingWalletAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumTokensBeforeSwapAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"setExcludeFromBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"setIncludeToBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"newValue","type":"bool"}],"name":"setIsExcludedFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsTxLimitExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"newValue","type":"bool"}],"name":"setMarketPairStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]');
const busdAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'; //busd token
const busdAbi = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]');
const contractAddressWL = '0xF306b041eB8F53691eC4e8A943838D525984215b'; //whitelist launchpad
const contractAbiWL = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"sale_days","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"minBUSD","type":"uint256"},{"internalType":"uint256","name":"maxBusdUser","type":"uint256"},{"internalType":"uint256","name":"forSale","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"divider","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"existsAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDivider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeftToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListWithdrawalDate","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"internalType":"struct SaleWL.Limit[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxBusdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextWithdrawalDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserWithdrawNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"insertAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_listAddresses","type":"address[]"}],"name":"insertListAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"limits","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setDivider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMaxBusdUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMinBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setSaleDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_x","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setTotalSold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingUserTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const contractAddressWLS = '0x6F3f34115cf204996bAC44aD48ED3960730c489C'; //tier launchpad
const contractAbiWLS = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"sale_days","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"minBUSD","type":"uint256"},{"internalType":"uint256","name":"basevar","type":"uint256"},{"internalType":"uint256","name":"forSale","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"divider","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"checkAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"editLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBaseVar","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDivider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEndSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeftToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListWithdrawalDate","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"internalType":"struct SaleWL.Limit[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addressAccount","type":"address"}],"name":"getMaxBusdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextWithdrawalDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserLimitNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserWithdrawNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getWeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"limits","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"plans","outputs":[{"internalType":"uint256","name":"weight","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setBaseVar","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setDivider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMinBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setSaleDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_x","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setTotalSold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingUserTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

const contractAddressWLMtvp = '0xDedb62C86f5Fc371b76DF9322df5Ffd2116edf93';
const contractAbiWLMtvp = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"sale_days","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"minBUSD","type":"uint256"},{"internalType":"uint256","name":"maxBusdUser","type":"uint256"},{"internalType":"uint256","name":"forSale","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"divider","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"existsAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDivider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeftToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListWithdrawalDate","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"internalType":"struct saleWLMTVP.Limit[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxBusdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextWithdrawalDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserWithdrawNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"insertAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_listAddresses","type":"address[]"}],"name":"insertListAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"limits","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setDivider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMaxBusdUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMinBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setSaleDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_x","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setTotalSold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingUserTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const contractAddressWL0Mtvp = '0x85f3b63B3EEfd58d9AA112E4d36ECde7DD1c5EA4';
const contractAbiWL0Mtvp = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"sale_days","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"minBUSD","type":"uint256"},{"internalType":"uint256","name":"maxBusdUser","type":"uint256"},{"internalType":"uint256","name":"forSale","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"divider","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getContractBalanceBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDivider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeftToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListWithdrawalDate","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"internalType":"struct saleWL0MTVP.Limit[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxBusdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextWithdrawalDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserWithdrawNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"limits","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setDivider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMaxBusdUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMinBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setSaleDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_x","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setTotalSold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingUserTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const contractAddressWL0Mtvp2 = '0xAdC7C2CCF68Dc12E005f45E34146363FCb147C4F';
const contractAbiWL0Mtvp2 = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"sale_days","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"minBUSD","type":"uint256"},{"internalType":"uint256","name":"maxBusdUser","type":"uint256"},{"internalType":"uint256","name":"forSale","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"divider","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getContractBalanceBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDivider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeftToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListWithdrawalDate","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"internalType":"struct saleWL0MTVP.Limit[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxBusdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextWithdrawalDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserWithdrawNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"limits","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setDivider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMaxBusdUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMinBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setSaleDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_x","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setTotalSold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingUserTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const contractAddressWL0Mtvp3 = '0x41E359Bc0c08266aA22694819171C3833d8Af553';
const contractAbiWL0Mtvp3 = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"sale_days","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"minBUSD","type":"uint256"},{"internalType":"uint256","name":"maxBusdUser","type":"uint256"},{"internalType":"uint256","name":"forSale","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"divider","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getContractBalanceBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDivider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeftToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListWithdrawalDate","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"internalType":"struct saleWL0MTVP.Limit[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxBusdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextWithdrawalDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserWithdrawNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"limits","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setDivider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMaxBusdUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMinBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setSaleDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_x","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setTotalSold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingUserTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const contractAddressWL0MtvpIdo = '0xEdd8da0872a0F200Cd40c463ec918A1C0A5CdED9';
const contractAbiWL0MtvpIdo = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"sale_days","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"minBUSD","type":"uint256"},{"internalType":"uint256","name":"maxBusdUser","type":"uint256"},{"internalType":"uint256","name":"forSale","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"divider","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getContractBalanceBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDivider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeftToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListWithdrawalDate","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"internalType":"struct saleWL0MTVP.Limit[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxBusdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextWithdrawalDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserWithdrawNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"limits","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setDivider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMaxBusdUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMinBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setSaleDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_x","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setTotalSold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingUserTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const contractAddressWLSprout = '0x49e65B22673b750F4896c2e6d93EB83D3A7fDFDe';
const contractAbiWLSprout = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"sale_days","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"minBUSD","type":"uint256"},{"internalType":"uint256","name":"maxBusdUser","type":"uint256"},{"internalType":"uint256","name":"forSale","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"divider","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"existsAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDivider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeftToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListWithdrawalDate","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"internalType":"struct saleWLSPROUT.Limit[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxBusdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextWithdrawalDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserWithdrawNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"insertAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_listAddresses","type":"address[]"}],"name":"insertListAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"limits","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setDivider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMaxBusdUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMinBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setSaleDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_x","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setTotalSold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingUserTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const contractAddressWL0Sprout = '0x1301F045d6E3d0424D7CCc1488769B6B90DF988E';
const contractAbiWL0Sprout = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"sale_days","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"minBUSD","type":"uint256"},{"internalType":"uint256","name":"maxBusdUser","type":"uint256"},{"internalType":"uint256","name":"forSale","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"divider","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getContractBalanceBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDivider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeftToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListWithdrawalDate","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"internalType":"struct saleWL0SPROUT.Limit[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxBusdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextWithdrawalDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserWithdrawNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"limits","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setDivider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMaxBusdUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMinBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setSaleDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_x","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setTotalSold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingUserTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const contractAddressWLDkm = '0x6F54453cfE6f47924F65E30A759a8fBd8fdDC8d3';
const contractAbiWLDkm = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"sale_days","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"minBUSD","type":"uint256"},{"internalType":"uint256","name":"maxBusdUser","type":"uint256"},{"internalType":"uint256","name":"forSale","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"divider","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"existsAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDivider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeftToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListWithdrawalDate","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"internalType":"struct saleWLMTVP.Limit[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxBusdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextWithdrawalDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserWithdrawNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"insertAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_listAddresses","type":"address[]"}],"name":"insertListAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"limits","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setDivider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMaxBusdUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMinBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setSaleDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_x","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setTotalSold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingUserTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const contractAddressWLDkmc = '0xbE30b205f39F5299E31C98B4045be6943552c719';
const contractAbiWLDkmc = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"sale_days","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"minBUSD","type":"uint256"},{"internalType":"uint256","name":"maxBusdUser","type":"uint256"},{"internalType":"uint256","name":"forSale","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"divider","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"existsAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDivider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeftToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListWithdrawalDate","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"internalType":"struct saleWLMTVP.Limit[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxBusdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextWithdrawalDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserWithdrawNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"insertAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_listAddresses","type":"address[]"}],"name":"insertListAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"limits","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setDivider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMaxBusdUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMinBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setSaleDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_x","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setTotalSold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingUserTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const contractAddressWL0Dkm = '0x2F41b2d128F7E917B57Ada08E56bEDC319BA754C';
const contractAbiWL0Dkm = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"sale_days","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"minBUSD","type":"uint256"},{"internalType":"uint256","name":"maxBusdUser","type":"uint256"},{"internalType":"uint256","name":"forSale","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"divider","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getContractBalanceBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDivider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeftToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListWithdrawalDate","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"internalType":"struct saleWL0DKM.Limit[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxBusdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextWithdrawalDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserWithdrawNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"limits","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setDivider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMaxBusdUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMinBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setSaleDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_x","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setTotalSold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingUserTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const contractAddressWLGyc = '0xf4b955546A2673Ddcf731119e1B18de44D71F480';
const contractAbiWLGyc = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"sale_days","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"minBUSD","type":"uint256"},{"internalType":"uint256","name":"maxBusdUser","type":"uint256"},{"internalType":"uint256","name":"forSale","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"divider","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"existsAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDivider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeftToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListWithdrawalDate","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"internalType":"struct saleWLMTVP.Limit[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxBusdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextWithdrawalDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserWithdrawNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"insertAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_listAddresses","type":"address[]"}],"name":"insertListAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"limits","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setDivider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMaxBusdUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMinBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setSaleDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_x","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setTotalSold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingUserTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const contractAddressWL0Gyc = '0x5f6B92A986ea5483b7e13d2D5d302D2747f3fE03';
const contractAbiWL0Gyc = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"sale_days","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"minBUSD","type":"uint256"},{"internalType":"uint256","name":"maxBusdUser","type":"uint256"},{"internalType":"uint256","name":"forSale","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"divider","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getContractBalanceBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDivider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeftToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListWithdrawalDate","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"internalType":"struct saleWL0MTVP.Limit[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxBusdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextWithdrawalDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserWithdrawNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"limits","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setDivider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMaxBusdUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMinBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setSaleDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_x","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setTotalSold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingUserTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const contractAddressWL0Wzrd = '0x8364E86b68364a0bBEBF5b4a76a4AB8520B07AE3';
const contractAbiWL0Wzrd = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"sale_days","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"minBUSD","type":"uint256"},{"internalType":"uint256","name":"maxBusdUser","type":"uint256"},{"internalType":"uint256","name":"forSale","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"divider","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getContractBalanceBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDivider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeftToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListWithdrawalDate","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"internalType":"struct saleWL0MTVP.Limit[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxBusdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextWithdrawalDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserWithdrawNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"limits","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setDivider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMaxBusdUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMinBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setSaleDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_x","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setTotalSold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingUserTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const contractAddressWL0Som = '0xeEda8e1d180Cd177DC012f228719Ae01b3120Fa3';
const contractAbiWL0Som = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"sale_days","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"minBUSD","type":"uint256"},{"internalType":"uint256","name":"maxBusdUser","type":"uint256"},{"internalType":"uint256","name":"forSale","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"divider","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getContractBalanceBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDivider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeftToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListWithdrawalDate","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"internalType":"struct saleWL0MTVP.Limit[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxBusdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextWithdrawalDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserWithdrawNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"limits","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setDivider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMaxBusdUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMinBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setSaleDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_x","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setTotalSold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingUserTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const contractAddressWL0Cnb = '0x3F61f926271435d62961Ab1910DEc2D1e0b61425';
const contractAbiWL0Cnb = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"sale_days","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"minBUSD","type":"uint256"},{"internalType":"uint256","name":"maxBusdUser","type":"uint256"},{"internalType":"uint256","name":"forSale","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"divider","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getContractBalanceBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDivider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeftToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListWithdrawalDate","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"internalType":"struct saleWL0MTVP.Limit[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxBusdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextWithdrawalDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserWithdrawNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"limits","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setDivider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMaxBusdUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMinBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setSaleDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_x","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setTotalSold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingUserTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const contractAddressWLSCnb = '0x0D4D576d0c55f2013ea755B3e6228233695d6520';
const contractAbiWLSCnb = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"sale_days","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"minBUSD","type":"uint256"},{"internalType":"uint256","name":"basevar","type":"uint256"},{"internalType":"uint256","name":"forSale","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"divider","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"checkAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"editLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBaseVar","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDivider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEndSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeftToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListWithdrawalDate","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"internalType":"struct saleWLSCNB.Limit[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addressAccount","type":"address"}],"name":"getMaxBusdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextWithdrawalDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserLimitNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserWithdrawNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getWeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"limits","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"plans","outputs":[{"internalType":"uint256","name":"weight","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setBaseVar","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setDivider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMinBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setSaleDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_x","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setTotalSold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingOwnerTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawingUserTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]');


const timerString = document.getElementById('timerString');
const timerStringWL = document.getElementById('timerStringWL');
const timerStringWLS = document.getElementById('timerStringWLS');

const timerStringWLMtvp = document.getElementById('timerStringWLMtvp');
const timerStringWL0Mtvp = document.getElementById('timerStringWL0Mtvp');
const timerStringWL0Mtvp2 = document.getElementById('timerStringWL0Mtvp2');
const timerStringWL0Mtvp3 = document.getElementById('timerStringWL0Mtvp3');
const timerStringWL0MtvpIdo = document.getElementById('timerStringWL0MtvpIdo');
const timerStringWLSprout = document.getElementById('timerStringWLSprout');
const timerStringWL0Sprout = document.getElementById('timerStringWL0Sprout');
const timerStringWLDkm = document.getElementById('timerStringWLDkm');
const timerStringWLDkmc = document.getElementById('timerStringWLDkmc');
const timerStringWL0Dkm = document.getElementById('timerStringWL0Dkm');
const timerStringWLGyc = document.getElementById('timerStringWLGyc');
const timerStringWL0Gyc = document.getElementById('timerStringWL0Gyc');
const timerStringWL0Wzrd = document.getElementById('timerStringWL0Wzrd');
const timerStringWL0Som = document.getElementById('timerStringWL0Som');
const timerStringWL0Cnb = document.getElementById('timerStringWL0Cnb');
const timerStringWLSCnb = document.getElementById('timerStringWLSCnb');









const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider;


// Address of the selected account
let selectedAccount;
let web3;
let contract;
let contractWL;
let contractWLS;

let contractWLMtvp;
let contractWL0Mtvp;
let contractWL0Mtvp2;
let contractWL0Mtvp3;
let contractWL0MtvpIdo;
let contractWLSprout;
let contractWL0Sprout;
let contractWLDkm;
let contractWLDkmc;
let contractWL0Dkm;
let contractWLGyc;
let contractWL0Gyc;
let contractWL0Wzrd;
let contractWL0Som;
let contractWL0Cnb;
let contractWLSCnb;
let staking;
let token;
let tokenBalance;
let minBUSDval = 0;
let forSaleVal = 0;
let totalSoldVal = 0;
let leftToken = 0;
let RATEval = 0;
let endTime = 0;
let startTime = 0;
let active;
let approve = 0;

let startTimeWL = 0;
let endTimeWL = 0;
let minBUSDvalWL = 0;
let forSaleValWL = 0;
let totalSoldValWL = 0;
let leftTokenWL = 0;
let RATEvalWL = 0;
let activeWL;
let approveWL = 0;

let startTimeWLS = 0;
let endTimeWLS = 0;
let minBUSDvalWLS = 0;
let forSaleValWLS = 0;
let totalSoldValWLS = 0;
let leftTokenWLS = 0;
let RATEvalWLS = 0;
let activeWLS;
let approveWLS = 0;

let startTimeWLMtvp = 0;
let endTimeWLMtvp = 0;
let minBUSDvalWLMtvp = 0;
let forSaleValWLMtvp = 0;
let totalSoldValWLMtvp = 0;
let leftTokenWLMtvp = 0;
let RATEvalWLMtvp = 0;
let activeWLMtvp;
let approveWLMtvp = 0;

let startTimeWL0Mtvp = 0;
let endTimeWL0Mtvp = 0;
let minBUSDvalWL0Mtvp = 0;
let forSaleValWL0Mtvp = 0;
let totalSoldValWL0Mtvp = 0;
let leftTokenWL0Mtvp = 0;
let RATEvalWL0Mtvp = 0;
let activeWL0Mtvp;
let approveWL0Mtvp = 0;

let startTimeWL0Mtvp2 = 0;
let endTimeWL0Mtvp2 = 0;
let minBUSDvalWL0Mtvp2 = 0;
let forSaleValWL0Mtvp2 = 0;
let totalSoldValWL0Mtvp2 = 0;
let leftTokenWL0Mtvp2 = 0;
let RATEvalWL0Mtvp2 = 0;
let activeWL0Mtvp2;
let approveWL0Mtvp2 = 0;

let startTimeWL0Mtvp3 = 0;
let endTimeWL0Mtvp3 = 0;
let minBUSDvalWL0Mtvp3 = 0;
let forSaleValWL0Mtvp3 = 0;
let totalSoldValWL0Mtvp3 = 0;
let leftTokenWL0Mtvp3 = 0;
let RATEvalWL0Mtvp3 = 0;
let activeWL0Mtvp3;
let approveWL0Mtvp3 = 0;

let startTimeWL0MtvpIdo = 0;
let endTimeWL0MtvpIdo = 0;
let minBUSDvalWL0MtvpIdo = 0;
let forSaleValWL0MtvpIdo = 0;
let totalSoldValWL0MtvpIdo = 0;
let leftTokenWL0MtvpIdo = 0;
let RATEvalWL0MtvpIdo = 0;
let activeWL0MtvpIdo;
let approveWL0MtvpIdo = 0;

let startTimeWLSprout = 0;
let endTimeWLSprout = 0;
let minBUSDvalWLSprout = 0;
let forSaleValWLSprout = 0;
let totalSoldValWLSprout = 0;
let leftTokenWLSprout = 0;
let RATEvalWLSprout = 0;
let activeWLSprout;
let approveWLSprout = 0;

let startTimeWL0Sprout = 0;
let endTimeWL0Sprout = 0;
let minBUSDvalWL0Sprout = 0;
let forSaleValWL0Sprout = 0;
let totalSoldValWL0Sprout = 0;
let leftTokenWL0Sprout = 0;
let RATEvalWL0Sprout = 0;
let activeWL0Sprout;
let approveWL0Sprout = 0;

let startTimeWLDkm = 0;
let endTimeWLDkm = 0;
let minBUSDvalWLDkm = 0;
let forSaleValWLDkm = 0;
let totalSoldValWLDkm = 0;
let leftTokenWLDkm = 0;
let RATEvalWLDkm = 0;
let activeWLDkm;
let approveWLDkm = 0;

let startTimeWLDkmc = 0;
let endTimeWLDkmc = 0;
let minBUSDvalWLDkmc = 0;
let forSaleValWLDkmc = 0;
let totalSoldValWLDkmc = 0;
let leftTokenWLDkmc = 0;
let RATEvalWLDkmc = 0;
let activeWLDkmc;
let approveWLDkmc = 0;

let startTimeWL0Dkm = 0;
let endTimeWL0Dkm = 0;
let minBUSDvalWL0Dkm = 0;
let forSaleValWL0Dkm = 0;
let totalSoldValWL0Dkm = 0;
let leftTokenWL0Dkm = 0;
let RATEvalWL0Dkm = 0;
let activeWL0Dkm;
let approveWL0Dkm = 0;

let startTimeWLGyc = 0;
let endTimeWLGyc = 0;
let minBUSDvalWLGyc = 0;
let forSaleValWLGyc = 0;
let totalSoldValWLGyc = 0;
let leftTokenWLGyc = 0;
let RATEvalWLGyc = 0;
let activeWLGyc;
let approveWLGyc = 0;

let startTimeWL0Gyc = 0;
let endTimeWL0Gyc = 0;
let minBUSDvalWL0Gyc = 0;
let forSaleValWL0Gyc = 0;
let totalSoldValWL0Gyc = 0;
let leftTokenWL0Gyc = 0;
let RATEvalWL0Gyc = 0;
let activeWL0Gyc;
let approveWL0Gyc = 0;

let startTimeWL0Wzrd = 0;
let endTimeWL0Wzrd = 0;
let minBUSDvalWL0Wzrd = 0;
let forSaleValWL0Wzrd = 0;
let totalSoldValWL0Wzrd = 0;
let leftTokenWL0Wzrd = 0;
let RATEvalWL0Wzrd = 0;
let activeWL0Wzrd;
let approveWL0Wzrd = 0;

let startTimeWL0Som = 0;
let endTimeWL0Som = 0;
let minBUSDvalWL0Som = 0;
let forSaleValWL0Som = 0;
let totalSoldValWL0Som = 0;
let leftTokenWL0Som = 0;
let RATEvalWL0Som = 0;
let activeWL0Som;
let approveWL0Som = 0;

let startTimeWL0Cnb = 0;
let endTimeWL0Cnb = 0;
let minBUSDvalWL0Cnb = 0;
let forSaleValWL0Cnb = 0;
let totalSoldValWL0Cnb = 0;
let leftTokenWL0Cnb = 0;
let RATEvalWL0Cnb = 0;
let activeWL0Cnb;
let approveWL0Cnb = 0;

let startTimeWLSCnb = 0;
let endTimeWLSCnb = 0;
let minBUSDvalWLSCnb = 0;
let forSaleValWLSCnb = 0;
let totalSoldValWLSCnb = 0;
let leftTokenWLSCnb = 0;
let RATEvalWLSCnb = 0;
let activeWLSCnb;
let approveWLSCnb = 0;


async function init(){
  web3 = new Web3(provider);
  const accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];
  var first = selectedAccount.slice(0, 5);
  var last = selectedAccount.slice(-3);
  document.querySelector("#btn-disconnect").textContent = first+"..."+last;
  document.querySelector("#btn-connect").style.display = "none";
  document.querySelector("#btn-disconnect").style.display = "block";
  contract = new web3.eth.Contract(contractAbi,contractAddress);
  contractWL = new web3.eth.Contract(contractAbiWL,contractAddressWL);
  contractWLS = new web3.eth.Contract(contractAbiWLS,contractAddressWLS);
  contractWLMtvp = new web3.eth.Contract(contractAbiWLMtvp,contractAddressWLMtvp);
  contractWL0Mtvp = new web3.eth.Contract(contractAbiWL0Mtvp,contractAddressWL0Mtvp);
  contractWL0Mtvp2 = new web3.eth.Contract(contractAbiWL0Mtvp2,contractAddressWL0Mtvp2);
  contractWL0Mtvp3 = new web3.eth.Contract(contractAbiWL0Mtvp3,contractAddressWL0Mtvp3);
  contractWL0MtvpIdo = new web3.eth.Contract(contractAbiWL0MtvpIdo,contractAddressWL0MtvpIdo);
  contractWLSprout = new web3.eth.Contract(contractAbiWLSprout,contractAddressWLSprout);
  contractWL0Sprout = new web3.eth.Contract(contractAbiWL0Sprout,contractAddressWL0Sprout);
  contractWLDkm = new web3.eth.Contract(contractAbiWLDkm,contractAddressWLDkm);
  contractWLDkmc = new web3.eth.Contract(contractAbiWLDkmc,contractAddressWLDkmc);
  contractWL0Dkm = new web3.eth.Contract(contractAbiWL0Dkm,contractAddressWL0Dkm);
  contractWLGyc = new web3.eth.Contract(contractAbiWLGyc,contractAddressWLGyc);
  contractWL0Gyc = new web3.eth.Contract(contractAbiWL0Gyc,contractAddressWL0Gyc);
  contractWL0Wzrd = new web3.eth.Contract(contractAbiWL0Wzrd,contractAddressWL0Wzrd);
  contractWL0Som = new web3.eth.Contract(contractAbiWL0Som,contractAddressWL0Som);
  contractWL0Cnb = new web3.eth.Contract(contractAbiWL0Cnb,contractAddressWL0Cnb);
  contractWLSCnb = new web3.eth.Contract(contractAbiWLSCnb,contractAddressWLSCnb);
  staking = new web3.eth.Contract(stakingAbi,stakingAddress);
  token = new web3.eth.Contract(tokenAbi,tokenAddress);
}

async function fetchContractData(){
  await token.methods.balanceOf(selectedAccount).call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      tokenBalance = parseFloat(web3.utils.fromWei(data)).toFixed(2);
      document.querySelector("#tokenBalance").innerHTML = tokenBalance;
    }
  });
  let dividents = [];
  let invested = [];
  let unstaked = [];
  for(var i = 0;i<8;i++){
    await staking.methods.getUserDividendsTarif(selectedAccount,i).call(function (err, data) {
      if (err) { console.log(err) }
      if (data) {
        dividents[i] = data;
        if(i == 1 || i == 3 || i== 5 || i == 7){
          document.querySelector("#rewards"+i).innerHTML = parseFloat(web3.utils.fromWei(dividents[i])).toFixed(5);
        }
      }
    });
    await staking.methods.getUserStakedTarif(selectedAccount,i).call(function (err, data) {
      if (err) { console.log(err) }
      if (data) {
        invested[i] = data;
        document.querySelector("#invested"+i).textContent = web3.utils.fromWei(invested[i]);
      }
    });
    await staking.methods.getUserUnstakedTarif(selectedAccount,i).call(function (err, data) {
      if (err) { console.log(err) }
      if (data) {
        unstaked[i] = data;
        document.querySelector("#unstaked"+i).textContent = web3.utils.fromWei(unstaked[i]);
      }
    });
  }
  await contract.methods.getStatus().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      active = data;
    }
  });
  await contract.methods.getRate().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      RATEval = parseInt(data)/1000;
    }
  });
  await contract.methods.getTotalSold().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      totalSoldVal = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contract.methods.getForSale().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      forSaleVal = td;
    }
  });
  await contract.methods.getMinBusd().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      minBUSDval = td;
    }
  });
  await contract.methods.getStartTime().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      startTime = parseInt(data);
    }
  });
  await contract.methods.getSaleDays().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      endTime = parseInt(data) + startTime;
    }
  });
  await contract.methods.getLeftToken().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      leftToken = parseFloat(web3.utils.fromWei(data));
    }
  });
}

//wl
async function fetchContractDataWL(){
  await contractWL.methods.getStatus().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      activeWL = data;
    }
  });
  await contractWL.methods.getRate().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      RATEvalWL = parseInt(data)/1000;
    }
  });
  await contractWL.methods.getTotalSold().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      totalSoldValWL = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contractWL.methods.getForSale().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      forSaleValWL = td;
    }
  });
  await contractWL.methods.getLeftToken().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      leftTokenWL = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contractWL.methods.getStartTime().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      startTimeWL = parseInt(data);
    }
  });
  await contractWL.methods.getSaleDays().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      endTimeWL = parseInt(data) + startTimeWL;
    }
  });
  await contractWL.methods.getLeftToken().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      leftTokenWL = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contractWL.methods.getMinBusd().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      minBUSDvalWL = td;
    }
  });
}

//wls
async function fetchContractDataWLS(){
  await contractWLS.methods.getStatus().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      activeWLS = data;
    }
  });
  await contractWLS.methods.getRate().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      RATEvalWLS = parseInt(data)/1000;
    }
  });
  await contractWLS.methods.getTotalSold().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      totalSoldValWLS = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contractWLS.methods.getForSale().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      forSaleValWLS = td;
    }
  });
  await contractWLS.methods.getMinBusd().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      minBUSDvalWLS = td;
    }
  });
  await contractWLS.methods.getStartTime().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      startTimeWLS = parseInt(data);
    }
  });
  await contractWLS.methods.getSaleDays().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      endTimeWLS = parseInt(data) + startTimeWLS;
    }
  });
  await contractWLS.methods.getLeftToken().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      leftTokenWLS = parseFloat(web3.utils.fromWei(data));
    }
  });
}

//mtvpWL
async function fetchContractDataWLMtvp(){
  await contractWLMtvp.methods.getStatus().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      activeWLMtvp = data;
    }
  });
  await contractWLMtvp.methods.getRate().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      RATEvalWLMtvp = parseInt(data)/100;
    }
  });
  await contractWLMtvp.methods.getTotalSold().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      totalSoldValWLMtvp = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contractWLMtvp.methods.getForSale().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      forSaleValWLMtvp = td;
    }
  });
  await contractWLMtvp.methods.getMinBusd().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      minBUSDvalWLMtvp = td;
    }
  });
  await contractWLMtvp.methods.getStartTime().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      startTimeWLMtvp = parseInt(data);
    }
  });
  await contractWLMtvp.methods.getSaleDays().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      endTimeWLMtvp = parseInt(data) + startTimeWLMtvp;
    }
  });
  await contractWLMtvp.methods.getLeftToken().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      leftTokenWLMtvp = parseFloat(web3.utils.fromWei(data));
    }
  });
}

//mtvpWL0
async function fetchContractDataWL0Mtvp(){
  await contractWL0Mtvp.methods.getStatus().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      activeWL0Mtvp = data;
    }
  });
  await contractWL0Mtvp.methods.getRate().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      RATEvalWL0Mtvp = parseInt(data)/100;
    }
  });
  await contractWL0Mtvp.methods.getTotalSold().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      totalSoldValWL0Mtvp = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contractWL0Mtvp.methods.getForSale().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      forSaleValWL0Mtvp = td;
    }
  });
  await contractWL0Mtvp.methods.getMinBusd().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      minBUSDvalWL0Mtvp = td;
    }
  });
  await contractWL0Mtvp.methods.getStartTime().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      startTimeWL0Mtvp = parseInt(data);
    }
  });
  await contractWL0Mtvp.methods.getSaleDays().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      endTimeWL0Mtvp = parseInt(data) + startTimeWL0Mtvp;
    }
  });
  await contractWL0Mtvp.methods.getLeftToken().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      leftTokenWL0Mtvp = parseFloat(web3.utils.fromWei(data));
    }
  });
}

//WL0Mtvp2
async function fetchContractDataWL0Mtvp2(){
  await contractWL0Mtvp2.methods.getStatus().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      activeWL0Mtvp2 = data;
    }
  });
  await contractWL0Mtvp2.methods.getRate().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      RATEvalWL0Mtvp2 = parseInt(data)/100;
    }
  });
  await contractWL0Mtvp2.methods.getTotalSold().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      totalSoldValWL0Mtvp2 = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contractWL0Mtvp2.methods.getForSale().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      forSaleValWL0Mtvp2 = td;
    }
  });
  await contractWL0Mtvp2.methods.getMinBusd().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      minBUSDvalWL0Mtvp2 = td;
    }
  });
  await contractWL0Mtvp2.methods.getStartTime().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      startTimeWL0Mtvp2 = parseInt(data);
    }
  });
  await contractWL0Mtvp2.methods.getSaleDays().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      endTimeWL0Mtvp2 = parseInt(data) + startTimeWL0Mtvp2;
    }
  });
  await contractWL0Mtvp2.methods.getLeftToken().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      leftTokenWL0Mtvp2 = parseFloat(web3.utils.fromWei(data));
    }
  });
}

//WL0Mtvp3
async function fetchContractDataWL0Mtvp3(){
  await contractWL0Mtvp3.methods.getStatus().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      activeWL0Mtvp3 = data;
    }
  });
  await contractWL0Mtvp3.methods.getRate().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      RATEvalWL0Mtvp3 = parseInt(data)/100;
    }
  });
  await contractWL0Mtvp3.methods.getTotalSold().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      totalSoldValWL0Mtvp3 = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contractWL0Mtvp3.methods.getForSale().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      forSaleValWL0Mtvp3 = td;
    }
  });
  await contractWL0Mtvp3.methods.getMinBusd().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      minBUSDvalWL0Mtvp3 = td;
    }
  });
  await contractWL0Mtvp3.methods.getStartTime().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      startTimeWL0Mtvp3 = parseInt(data);
    }
  });
  await contractWL0Mtvp3.methods.getSaleDays().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      endTimeWL0Mtvp3 = parseInt(data) + startTimeWL0Mtvp3;
    }
  });
  await contractWL0Mtvp3.methods.getLeftToken().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      leftTokenWL0Mtvp3 = parseFloat(web3.utils.fromWei(data));
    }
  });
}

//WL0MtvpIdo
async function fetchContractDataWL0MtvpIdo(){
  await contractWL0MtvpIdo.methods.getStatus().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      activeWL0MtvpIdo = data;
    }
  });
  await contractWL0MtvpIdo.methods.getRate().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      RATEvalWL0MtvpIdo = parseInt(data)/100;
    }
  });
  await contractWL0MtvpIdo.methods.getTotalSold().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      totalSoldValWL0MtvpIdo = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contractWL0MtvpIdo.methods.getForSale().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      forSaleValWL0MtvpIdo = td;
    }
  });
  await contractWL0MtvpIdo.methods.getMinBusd().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      minBUSDvalWL0MtvpIdo = td;
    }
  });
  await contractWL0MtvpIdo.methods.getStartTime().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      startTimeWL0MtvpIdo = parseInt(data);
    }
  });
  await contractWL0MtvpIdo.methods.getSaleDays().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      endTimeWL0MtvpIdo = parseInt(data) + startTimeWL0MtvpIdo;
    }
  });
  await contractWL0MtvpIdo.methods.getLeftToken().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      leftTokenWL0MtvpIdo = parseFloat(web3.utils.fromWei(data));
    }
  });
}


//WLSprout
async function fetchContractDataWLSprout(){
  await contractWLSprout.methods.getStatus().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      activeWLSprout = data;
    }
  });
  await contractWLSprout.methods.getRate().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      RATEvalWLSprout = parseInt(data)/100;
    }
  });
  await contractWLSprout.methods.getTotalSold().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      totalSoldValWLSprout = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contractWLSprout.methods.getForSale().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      forSaleValWLSprout = td;
    }
  });
  await contractWLSprout.methods.getMinBusd().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      minBUSDvalWLSprout = td;
    }
  });
  await contractWLSprout.methods.getStartTime().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      startTimeWLSprout = parseInt(data);
    }
  });
  await contractWLSprout.methods.getSaleDays().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      endTimeWLSprout = parseInt(data) + startTimeWLSprout;
    }
  });
  await contractWLSprout.methods.getLeftToken().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      leftTokenWLSprout = parseFloat(web3.utils.fromWei(data));
    }
  });
}

//WL0Sprout
async function fetchContractDataWL0Sprout(){
  await contractWL0Sprout.methods.getStatus().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      activeWL0Sprout = data;
    }
  });
  await contractWL0Sprout.methods.getRate().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      RATEvalWL0Sprout = parseInt(data)/100;
    }
  });
  await contractWL0Sprout.methods.getTotalSold().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      totalSoldValWL0Sprout = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contractWL0Sprout.methods.getForSale().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      forSaleValWL0Sprout = td;
    }
  });
  await contractWL0Sprout.methods.getMinBusd().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      minBUSDvalWL0Sprout = td;
    }
  });
  await contractWL0Sprout.methods.getStartTime().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      startTimeWL0Sprout = parseInt(data);
    }
  });
  await contractWL0Sprout.methods.getSaleDays().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      endTimeWL0Sprout = parseInt(data) + startTimeWL0Sprout;
    }
  });
  await contractWL0Sprout.methods.getLeftToken().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      leftTokenWL0Sprout = parseFloat(web3.utils.fromWei(data));
    }
  });
}

//WLDkm
async function fetchContractDataWLDkm(){
  await contractWLDkm.methods.getStatus().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      activeWLDkm = data;
    }
  });
  await contractWLDkm.methods.getRate().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      RATEvalWLDkm = parseInt(data)/1000;
    }
  });
  await contractWLDkm.methods.getTotalSold().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      totalSoldValWLDkm = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contractWLDkm.methods.getForSale().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      forSaleValWLDkm = td;
    }
  });
  await contractWLDkm.methods.getMinBusd().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      minBUSDvalWLDkm = td;
    }
  });
  await contractWLDkm.methods.getStartTime().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      startTimeWLDkm = parseInt(data);
    }
  });
  await contractWLDkm.methods.getSaleDays().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      endTimeWLDkm = parseInt(data) + startTimeWLDkm;
    }
  });
  await contractWLDkm.methods.getLeftToken().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      leftTokenWLDkm = parseFloat(web3.utils.fromWei(data));
    }
  });
}

//WLDkmc
async function fetchContractDataWLDkmc(){
  await contractWLDkmc.methods.getStatus().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      activeWLDkmc = data;
    }
  });
  await contractWLDkmc.methods.getRate().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      RATEvalWLDkmc = parseInt(data)/1000;
    }
  });
  await contractWLDkmc.methods.getTotalSold().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      totalSoldValWLDkmc = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contractWLDkmc.methods.getForSale().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      forSaleValWLDkmc = td;
    }
  });
  await contractWLDkmc.methods.getMinBusd().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      minBUSDvalWLDkmc = td;
    }
  });
  await contractWLDkmc.methods.getStartTime().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      startTimeWLDkmc = parseInt(data);
    }
  });
  await contractWLDkmc.methods.getSaleDays().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      endTimeWLDkmc = parseInt(data) + startTimeWLDkmc;
    }
  });
  await contractWLDkmc.methods.getLeftToken().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      leftTokenWLDkmc = parseFloat(web3.utils.fromWei(data));
    }
  });
}

//WL0Dkm
async function fetchContractDataWL0Dkm(){
  await contractWL0Dkm.methods.getStatus().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      activeWL0Dkm = data;
    }
  });
  await contractWL0Dkm.methods.getRate().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      RATEvalWL0Dkm = parseInt(data)/100;
    }
  });
  await contractWL0Dkm.methods.getTotalSold().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      totalSoldValWL0Dkm = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contractWL0Dkm.methods.getForSale().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      forSaleValWL0Dkm = td;
    }
  });
  await contractWL0Dkm.methods.getMinBusd().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      minBUSDvalWL0Dkm = td;
    }
  });
  await contractWL0Dkm.methods.getStartTime().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      startTimeWL0Dkm = parseInt(data);
    }
  });
  await contractWL0Dkm.methods.getSaleDays().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      endTimeWL0Dkm = parseInt(data) + startTimeWL0Dkm;
    }
  });
  await contractWL0Dkm.methods.getLeftToken().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      leftTokenWL0Dkm = parseFloat(web3.utils.fromWei(data));
    }
  });
}

//WLGyc
async function fetchContractDataWLGyc(){
  await contractWLGyc.methods.getStatus().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      activeWLGyc = data;
    }
  });
  await contractWLGyc.methods.getRate().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      RATEvalWLGyc = parseInt(data)/100;
    }
  });
  await contractWLGyc.methods.getTotalSold().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      totalSoldValWLGyc = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contractWLGyc.methods.getForSale().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      forSaleValWLGyc = td;
    }
  });
  await contractWLGyc.methods.getMinBusd().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      minBUSDvalWLGyc = td;
    }
  });
  await contractWLGyc.methods.getStartTime().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      startTimeWLGyc = parseInt(data);
    }
  });
  await contractWLGyc.methods.getSaleDays().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      endTimeWLGyc = parseInt(data) + startTimeWLGyc;
    }
  });
  await contractWLGyc.methods.getLeftToken().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      leftTokenWLGyc = parseFloat(web3.utils.fromWei(data));
    }
  });
}

//WL0Gyc
async function fetchContractDataWL0Gyc(){
  await contractWL0Gyc.methods.getStatus().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      activeWL0Gyc = data;
    }
  });
  await contractWL0Gyc.methods.getRate().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      RATEvalWL0Gyc = parseInt(data)/100;
    }
  });
  await contractWL0Gyc.methods.getTotalSold().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      totalSoldValWL0Gyc = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contractWL0Gyc.methods.getForSale().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      forSaleValWL0Gyc = td;
    }
  });
  await contractWL0Gyc.methods.getMinBusd().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      minBUSDvalWL0Gyc = td;
    }
  });
  await contractWL0Gyc.methods.getStartTime().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      startTimeWL0Gyc = parseInt(data);
    }
  });
  await contractWL0Gyc.methods.getSaleDays().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      endTimeWL0Gyc = parseInt(data) + startTimeWL0Gyc;
    }
  });
  await contractWL0Gyc.methods.getLeftToken().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      leftTokenWL0Gyc = parseFloat(web3.utils.fromWei(data));
    }
  });
}

//WL0Wzrd
async function fetchContractDataWL0Wzrd(){
  await contractWL0Wzrd.methods.getStatus().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      activeWL0Wzrd = data;
    }
  });
  await contractWL0Wzrd.methods.getRate().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      RATEvalWL0Wzrd = parseInt(data)/100;
    }
  });
  await contractWL0Wzrd.methods.getTotalSold().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      totalSoldValWL0Wzrd = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contractWL0Wzrd.methods.getForSale().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      forSaleValWL0Wzrd = td;
    }
  });
  await contractWL0Wzrd.methods.getMinBusd().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      minBUSDvalWL0Wzrd = td;
    }
  });
  await contractWL0Wzrd.methods.getStartTime().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      startTimeWL0Wzrd = parseInt(data);
    }
  });
  await contractWL0Wzrd.methods.getSaleDays().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      endTimeWL0Wzrd = parseInt(data) + startTimeWL0Wzrd;
    }
  });
  await contractWL0Wzrd.methods.getLeftToken().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      leftTokenWL0Wzrd = parseFloat(web3.utils.fromWei(data));
    }
  });
}

//WL0Som
async function fetchContractDataWL0Som(){
  await contractWL0Som.methods.getStatus().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      activeWL0Som = data;
    }
  });
  await contractWL0Som.methods.getRate().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      RATEvalWL0Som = parseInt(data)/100;
    }
  });
  await contractWL0Som.methods.getTotalSold().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      totalSoldValWL0Som = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contractWL0Som.methods.getForSale().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      forSaleValWL0Som = td;
    }
  });
  await contractWL0Som.methods.getMinBusd().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      minBUSDvalWL0Som = td;
    }
  });
  await contractWL0Som.methods.getStartTime().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      startTimeWL0Som = parseInt(data);
    }
  });
  await contractWL0Som.methods.getSaleDays().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      endTimeWL0Som = parseInt(data) + startTimeWL0Som;
    }
  });
  await contractWL0Som.methods.getLeftToken().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      leftTokenWL0Som = parseFloat(web3.utils.fromWei(data));
    }
  });
}

//WL0Cnb
async function fetchContractDataWL0Cnb(){
  await contractWL0Cnb.methods.getStatus().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      activeWL0Cnb = data;
    }
  });
  await contractWL0Cnb.methods.getRate().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      RATEvalWL0Cnb = parseInt(data)/100;
    }
  });
  await contractWL0Cnb.methods.getTotalSold().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      totalSoldValWL0Cnb = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contractWL0Cnb.methods.getForSale().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      forSaleValWL0Cnb = td;
    }
  });
  await contractWL0Cnb.methods.getMinBusd().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      minBUSDvalWL0Cnb = td;
    }
  });
  await contractWL0Cnb.methods.getStartTime().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      startTimeWL0Cnb = parseInt(data);
    }
  });
  await contractWL0Cnb.methods.getSaleDays().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      endTimeWL0Cnb = parseInt(data) + startTimeWL0Cnb;
    }
  });
  await contractWL0Cnb.methods.getLeftToken().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      leftTokenWL0Cnb = parseFloat(web3.utils.fromWei(data));
    }
  });
}

//WLSCnb
async function fetchContractDataWLSCnb(){
  await contractWLSCnb.methods.getStatus().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      activeWLSCnb = data;
    }
  });
  await contractWLSCnb.methods.getRate().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      RATEvalWLSCnb = parseInt(data)/100;
    }
  });
  await contractWLSCnb.methods.getTotalSold().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      totalSoldValWLSCnb = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contractWLSCnb.methods.getForSale().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      forSaleValWLSCnb = td;
    }
  });
  await contractWLSCnb.methods.getMinBusd().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      minBUSDvalWLSCnb = td;
    }
  });
  await contractWLSCnb.methods.getStartTime().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      startTimeWLSCnb = parseInt(data);
    }
  });
  await contractWLSCnb.methods.getSaleDays().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      endTimeWLSCnb = parseInt(data) + startTimeWLSCnb;
    }
  });
  await contractWLSCnb.methods.getLeftToken().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      leftTokenWLSCnb = parseFloat(web3.utils.fromWei(data));
    }
  });
}




function getTimer(){
  var diff = 0;
  if(selectedAccount){
    if(startTime > 0 && endTime > 0){
      if(Date.now() / 1000 > startTime && Date.now() / 1000 < endTime){
        diff = Math.floor(endTime - (Date.now() / 1000));
        if(totalSoldVal >= forSaleVal || leftToken/RATEval < minBUSDval){
            diff = 0;
            timerString.innerHTML = "Sale ended";
        }else{
          if(!active){
            diff = 0;
              timerString.innerHTML = "Sale ended";
          }
        }
      }else if(Date.now() / 1000 >= endTime){
          timerString.innerHTML = "Sale ended";
      }else{
        diff = Math.floor(startTime - (Date.now() / 1000));
      }
      if(diff > 0){
        let days = Math.floor((diff % (60*60*60*24))/(60*60*24));
        let hours = (Math.floor((diff % (60*60*60*24))/(60*60)) < 10) ? '0' + Math.floor((diff % (60*60*60*24))/(60*60)) : Math.floor((diff % (60*60*60*24))/(60*60));
        let minutes = (Math.floor((diff % (60*60))/60) < 10) ? '0' + Math.floor((diff % (60*60))/60) : Math.floor((diff % (60*60))/60);
        let seconds = (Math.floor(diff % 60) < 10) ? '0' + Math.floor(diff % 60) : Math.floor(diff % 60);
        if(days == 0){
          timerString.innerHTML = hours+":"+minutes+":"+seconds;
        }else{
          hours = hours - days*24;
          timerString.innerHTML = days+" days "+hours+":"+minutes+":"+seconds;
        }
      }
    }
    fetchContractData();
  }
}

//whitelist
function getTimerWL(){
  var diff = 0;
  if(selectedAccount){
    if(startTimeWL > 0 && endTimeWL > 0){
      if(Date.now() / 1000 > startTimeWL && Date.now() / 1000 < endTimeWL){
        diff = Math.floor(endTimeWL - (Date.now() / 1000));
        if(totalSoldValWL >= forSaleValWL || leftTokenWL/RATEvalWL < minBUSDvalWL){
            diff = 0;
            timerStringWL.innerHTML = "Sale ended";
        }else{
          if(!activeWL){
            diff = 0;
              timerStringWL.innerHTML = "Sale ended";
          }
        }
      }else if(Date.now() / 1000 >= endTimeWL){
          timerStringWL.innerHTML = "Sale ended";
      }else{
        diff = Math.floor(startTimeWL - (Date.now() / 1000));
      }
      if(diff > 0){
        let days = Math.floor((diff % (60*60*60*24))/(60*60*24));
        let hours = (Math.floor((diff % (60*60*60*24))/(60*60)) < 10) ? '0' + Math.floor((diff % (60*60*60*24))/(60*60)) : Math.floor((diff % (60*60*60*24))/(60*60));
        let minutes = (Math.floor((diff % (60*60))/60) < 10) ? '0' + Math.floor((diff % (60*60))/60) : Math.floor((diff % (60*60))/60);
        let seconds = (Math.floor(diff % 60) < 10) ? '0' + Math.floor(diff % 60) : Math.floor(diff % 60);
        if(days == 0){
          timerStringWL.innerHTML = hours+":"+minutes+":"+seconds;
        }else{
          hours = hours - days*24;
          timerStringWL.innerHTML = days+" days "+hours+":"+minutes+":"+seconds;
        }
      }
    }
    fetchContractDataWL();
  }
}

//wls
function getTimerWLS(){
  var diff = 0;
  if(selectedAccount){
    if(startTimeWLS > 0 && endTimeWLS > 0){
      if(Date.now() / 1000 > startTimeWLS && Date.now() / 1000 < endTimeWLS){
        diff = Math.floor(endTimeWLS - (Date.now() / 1000));
        if(totalSoldValWLS >= forSaleValWLS || leftTokenWLS/RATEvalWLS < minBUSDvalWLS){
            diff = 0;
            timerStringWLS.innerHTML = "Sale ended";
        }else{
          if(!activeWLS){
            diff = 0;
              timerStringWLS.innerHTML = "Sale ended";
          }
        }
      }else if(Date.now() / 1000 >= endTimeWLS){
          timerStringWLS.innerHTML = "Sale ended";
      }else{
        diff = Math.floor(startTimeWLS - (Date.now() / 1000));
      }
      if(diff > 0){
        let days = Math.floor((diff % (60*60*60*24))/(60*60*24));
        let hours = (Math.floor((diff % (60*60*60*24))/(60*60)) < 10) ? '0' + Math.floor((diff % (60*60*60*24))/(60*60)) : Math.floor((diff % (60*60*60*24))/(60*60));
        let minutes = (Math.floor((diff % (60*60))/60) < 10) ? '0' + Math.floor((diff % (60*60))/60) : Math.floor((diff % (60*60))/60);
        let seconds = (Math.floor(diff % 60) < 10) ? '0' + Math.floor(diff % 60) : Math.floor(diff % 60);
        if(days == 0){
          timerStringWLS.innerHTML = hours+":"+minutes+":"+seconds;
        }else{
          hours = hours - days*24;
          timerStringWLS.innerHTML = days+" days "+hours+":"+minutes+":"+seconds;
        }
      }
    }
    fetchContractDataWLS();
  }
}

//mtvpWL
function getTimerWLMtvp(){
  var diff = 0;
  if(selectedAccount){
    if(startTimeWLMtvp > 0 && endTimeWLMtvp > 0){
      if(Date.now() / 1000 > startTimeWLMtvp && Date.now() / 1000 < endTimeWLMtvp){
        diff = Math.floor(endTimeWLMtvp - (Date.now() / 1000));
        if(totalSoldValWLMtvp >= forSaleValWLMtvp || leftTokenWLMtvp/RATEvalWLMtvp< minBUSDvalWLMtvp){
            diff = 0;
            timerStringWLMtvp.innerHTML = "Sale ended";
        }else{
          if(!activeWLMtvp){
            diff = 0;
              timerStringWLMtvp.innerHTML = "Sale ended";
          }
        }
      }else if(Date.now() / 1000 >= endTimeWLMtvp){
          timerStringWLMtvp.innerHTML = "Sale ended";
      }else{
        diff = Math.floor(startTimeWLMtvp - (Date.now() / 1000));
      }
      if(diff > 0){
        let days = Math.floor((diff % (60*60*60*24))/(60*60*24));
        let hours = (Math.floor((diff % (60*60*60*24))/(60*60)) < 10) ? '0' + Math.floor((diff % (60*60*60*24))/(60*60)) : Math.floor((diff % (60*60*60*24))/(60*60));
        let minutes = (Math.floor((diff % (60*60))/60) < 10) ? '0' + Math.floor((diff % (60*60))/60) : Math.floor((diff % (60*60))/60);
        let seconds = (Math.floor(diff % 60) < 10) ? '0' + Math.floor(diff % 60) : Math.floor(diff % 60);
        if(days == 0){
          timerStringWLMtvp.innerHTML = hours+":"+minutes+":"+seconds;
        }else{
          hours = hours - days*24;
          timerStringWLMtvp.innerHTML = days+" days "+hours+":"+minutes+":"+seconds;
        }
      }
    }
    fetchContractDataWLMtvp();
  }
}

//mtvpWL0
function getTimerWL0Mtvp(){
  var diff = 0;
  if(selectedAccount){
    if(startTimeWL0Mtvp > 0 && endTimeWL0Mtvp > 0){
      if(Date.now() / 1000 > startTimeWL0Mtvp && Date.now() / 1000 < endTimeWL0Mtvp){
        diff = Math.floor(endTimeWL0Mtvp - (Date.now() / 1000));
        if(totalSoldValWL0Mtvp >= forSaleValWL0Mtvp || leftTokenWL0Mtvp/RATEvalWL0Mtvp< minBUSDvalWL0Mtvp){
            diff = 0;
            timerStringWL0Mtvp.innerHTML = "Sale ended";
        }else{
          if(!activeWL0Mtvp){
            diff = 0;
              timerStringWL0Mtvp.innerHTML = "Sale ended";
          }
        }
      }else if(Date.now() / 1000 >= endTimeWL0Mtvp){
          timerStringWL0Mtvp.innerHTML = "Sale ended";
      }else{
        diff = Math.floor(startTimeWL0Mtvp - (Date.now() / 1000));
      }
      if(diff > 0){
        let days = Math.floor((diff % (60*60*60*24))/(60*60*24));
        let hours = (Math.floor((diff % (60*60*60*24))/(60*60)) < 10) ? '0' + Math.floor((diff % (60*60*60*24))/(60*60)) : Math.floor((diff % (60*60*60*24))/(60*60));
        let minutes = (Math.floor((diff % (60*60))/60) < 10) ? '0' + Math.floor((diff % (60*60))/60) : Math.floor((diff % (60*60))/60);
        let seconds = (Math.floor(diff % 60) < 10) ? '0' + Math.floor(diff % 60) : Math.floor(diff % 60);
        if(days == 0){
          timerStringWL0Mtvp.innerHTML = hours+":"+minutes+":"+seconds;
        }else{
          hours = hours - days*24;
          timerStringWL0Mtvp.innerHTML = days+" days "+hours+":"+minutes+":"+seconds;
        }
      }
    }
    fetchContractDataWL0Mtvp();
  }
}

//WL0Mtvp2
function getTimerWL0Mtvp2(){
  var diff = 0;
  if(selectedAccount){
    if(startTimeWL0Mtvp2 > 0 && endTimeWL0Mtvp2 > 0){
      if(Date.now() / 1000 > startTimeWL0Mtvp2 && Date.now() / 1000 < endTimeWL0Mtvp2){
        diff = Math.floor(endTimeWL0Mtvp2 - (Date.now() / 1000));
        if(totalSoldValWL0Mtvp2 >= forSaleValWL0Mtvp2 || leftTokenWL0Mtvp2/RATEvalWL0Mtvp2< minBUSDvalWL0Mtvp2){
            diff = 0;
            timerStringWL0Mtvp2.innerHTML = "Sale ended";
        }else{
          if(!activeWL0Mtvp2){
            diff = 0;
              timerStringWL0Mtvp2.innerHTML = "Sale ended";
          }
        }
      }else if(Date.now() / 1000 >= endTimeWL0Mtvp2){
          timerStringWL0Mtvp2.innerHTML = "Sale ended";
      }else{
        diff = Math.floor(startTimeWL0Mtvp2 - (Date.now() / 1000));
      }
      if(diff > 0){
        let days = Math.floor((diff % (60*60*60*24))/(60*60*24));
        let hours = (Math.floor((diff % (60*60*60*24))/(60*60)) < 10) ? '0' + Math.floor((diff % (60*60*60*24))/(60*60)) : Math.floor((diff % (60*60*60*24))/(60*60));
        let minutes = (Math.floor((diff % (60*60))/60) < 10) ? '0' + Math.floor((diff % (60*60))/60) : Math.floor((diff % (60*60))/60);
        let seconds = (Math.floor(diff % 60) < 10) ? '0' + Math.floor(diff % 60) : Math.floor(diff % 60);
        if(days == 0){
          timerStringWL0Mtvp2.innerHTML = hours+":"+minutes+":"+seconds;
        }else{
          hours = hours - days*24;
          timerStringWL0Mtvp2.innerHTML = days+" days "+hours+":"+minutes+":"+seconds;
        }
      }
    }
    fetchContractDataWL0Mtvp2();
  }
}

//WL0Mtvp3
function getTimerWL0Mtvp3(){
  var diff = 0;
  if(selectedAccount){
    if(startTimeWL0Mtvp3 > 0 && endTimeWL0Mtvp3 > 0){
      if(Date.now() / 1000 > startTimeWL0Mtvp3 && Date.now() / 1000 < endTimeWL0Mtvp3){
        diff = Math.floor(endTimeWL0Mtvp3 - (Date.now() / 1000));
        if(totalSoldValWL0Mtvp3 >= forSaleValWL0Mtvp3 || leftTokenWL0Mtvp3/RATEvalWL0Mtvp3< minBUSDvalWL0Mtvp3){
            diff = 0;
            timerStringWL0Mtvp3.innerHTML = "Sale ended";
        }else{
          if(!activeWL0Mtvp3){
            diff = 0;
              timerStringWL0Mtvp3.innerHTML = "Sale ended";
          }
        }
      }else if(Date.now() / 1000 >= endTimeWL0Mtvp3){
          timerStringWL0Mtvp3.innerHTML = "Sale ended";
      }else{
        diff = Math.floor(startTimeWL0Mtvp3 - (Date.now() / 1000));
      }
      if(diff > 0){
        let days = Math.floor((diff % (60*60*60*24))/(60*60*24));
        let hours = (Math.floor((diff % (60*60*60*24))/(60*60)) < 10) ? '0' + Math.floor((diff % (60*60*60*24))/(60*60)) : Math.floor((diff % (60*60*60*24))/(60*60));
        let minutes = (Math.floor((diff % (60*60))/60) < 10) ? '0' + Math.floor((diff % (60*60))/60) : Math.floor((diff % (60*60))/60);
        let seconds = (Math.floor(diff % 60) < 10) ? '0' + Math.floor(diff % 60) : Math.floor(diff % 60);
        if(days == 0){
          timerStringWL0Mtvp3.innerHTML = hours+":"+minutes+":"+seconds;
        }else{
          hours = hours - days*24;
          timerStringWL0Mtvp3.innerHTML = days+" days "+hours+":"+minutes+":"+seconds;
        }
      }
    }
    fetchContractDataWL0Mtvp3();
  }
}

//WL0MtvpIdo
function getTimerWL0MtvpIdo(){
  var diff = 0;
  if(selectedAccount){
    if(startTimeWL0MtvpIdo > 0 && endTimeWL0MtvpIdo > 0){
      if(Date.now() / 1000 > startTimeWL0MtvpIdo && Date.now() / 1000 < endTimeWL0MtvpIdo){
        diff = Math.floor(endTimeWL0MtvpIdo - (Date.now() / 1000));
        if(totalSoldValWL0MtvpIdo >= forSaleValWL0MtvpIdo || leftTokenWL0MtvpIdo/RATEvalWL0MtvpIdo< minBUSDvalWL0MtvpIdo){
            diff = 0;
            timerStringWL0MtvpIdo.innerHTML = "Sale ended";
        }else{
          if(!activeWL0MtvpIdo){
            diff = 0;
              timerStringWL0MtvpIdo.innerHTML = "Sale ended";
          }
        }
      }else if(Date.now() / 1000 >= endTimeWL0MtvpIdo){
          timerStringWL0MtvpIdo.innerHTML = "Sale ended";
      }else{
        diff = Math.floor(startTimeWL0MtvpIdo - (Date.now() / 1000));
      }
      if(diff > 0){
        let days = Math.floor((diff % (60*60*60*24))/(60*60*24));
        let hours = (Math.floor((diff % (60*60*60*24))/(60*60)) < 10) ? '0' + Math.floor((diff % (60*60*60*24))/(60*60)) : Math.floor((diff % (60*60*60*24))/(60*60));
        let minutes = (Math.floor((diff % (60*60))/60) < 10) ? '0' + Math.floor((diff % (60*60))/60) : Math.floor((diff % (60*60))/60);
        let seconds = (Math.floor(diff % 60) < 10) ? '0' + Math.floor(diff % 60) : Math.floor(diff % 60);
        if(days == 0){
          timerStringWL0MtvpIdo.innerHTML = hours+":"+minutes+":"+seconds;
        }else{
          hours = hours - days*24;
          timerStringWL0MtvpIdo.innerHTML = days+" days "+hours+":"+minutes+":"+seconds;
        }
      }
    }
    fetchContractDataWL0MtvpIdo();
  }
}


//WLSprout
function getTimerWLSprout(){
  var diff = 0;
  if(selectedAccount){
    if(startTimeWLSprout > 0 && endTimeWLSprout > 0){
      if(Date.now() / 1000 > startTimeWLSprout && Date.now() / 1000 < endTimeWLSprout){
        diff = Math.floor(endTimeWLSprout - (Date.now() / 1000));
        if(totalSoldValWLSprout >= forSaleValWLSprout || leftTokenWLSprout/RATEvalWLSprout< minBUSDvalWLSprout){
            diff = 0;
            timerStringWLSprout.innerHTML = "Sale ended";
        }else{
          if(!activeWLSprout){
            diff = 0;
              timerStringWLSprout.innerHTML = "Sale ended";
          }
        }
      }else if(Date.now() / 1000 >= endTimeWLSprout){
          timerStringWLSprout.innerHTML = "Sale ended";
      }else{
        diff = Math.floor(startTimeWLSprout - (Date.now() / 1000));
      }
      if(diff > 0){
        let days = Math.floor((diff % (60*60*60*24))/(60*60*24));
        let hours = (Math.floor((diff % (60*60*60*24))/(60*60)) < 10) ? '0' + Math.floor((diff % (60*60*60*24))/(60*60)) : Math.floor((diff % (60*60*60*24))/(60*60));
        let minutes = (Math.floor((diff % (60*60))/60) < 10) ? '0' + Math.floor((diff % (60*60))/60) : Math.floor((diff % (60*60))/60);
        let seconds = (Math.floor(diff % 60) < 10) ? '0' + Math.floor(diff % 60) : Math.floor(diff % 60);
        if(days == 0){
          timerStringWLSprout.innerHTML = hours+":"+minutes+":"+seconds;
        }else{
          hours = hours - days*24;
          timerStringWLSprout.innerHTML = days+" days "+hours+":"+minutes+":"+seconds;
        }
      }
    }
    fetchContractDataWLSprout();
  }
}

//WL0Sprout
function getTimerWL0Sprout(){
  var diff = 0;
  if(selectedAccount){
    if(startTimeWL0Sprout > 0 && endTimeWL0Sprout > 0){
      if(Date.now() / 1000 > startTimeWL0Sprout && Date.now() / 1000 < endTimeWL0Sprout){
        diff = Math.floor(endTimeWL0Sprout - (Date.now() / 1000));
        if(totalSoldValWL0Sprout >= forSaleValWL0Sprout || leftTokenWL0Sprout/RATEvalWL0Sprout< minBUSDvalWL0Sprout){
            diff = 0;
            timerStringWL0Sprout.innerHTML = "Sale ended";
        }else{
          if(!activeWL0Sprout){
            diff = 0;
              timerStringWL0Sprout.innerHTML = "Sale ended";
          }
        }
      }else if(Date.now() / 1000 >= endTimeWL0Sprout){
          timerStringWL0Sprout.innerHTML = "Sale ended";
      }else{
        diff = Math.floor(startTimeWL0Sprout - (Date.now() / 1000));
      }
      if(diff > 0){
        let days = Math.floor((diff % (60*60*60*24))/(60*60*24));
        let hours = (Math.floor((diff % (60*60*60*24))/(60*60)) < 10) ? '0' + Math.floor((diff % (60*60*60*24))/(60*60)) : Math.floor((diff % (60*60*60*24))/(60*60));
        let minutes = (Math.floor((diff % (60*60))/60) < 10) ? '0' + Math.floor((diff % (60*60))/60) : Math.floor((diff % (60*60))/60);
        let seconds = (Math.floor(diff % 60) < 10) ? '0' + Math.floor(diff % 60) : Math.floor(diff % 60);
        if(days == 0){
          timerStringWL0Sprout.innerHTML = hours+":"+minutes+":"+seconds;
        }else{
          hours = hours - days*24;
          timerStringWL0Sprout.innerHTML = days+" days "+hours+":"+minutes+":"+seconds;
        }
      }
    }
    fetchContractDataWL0Sprout();
  }
}

//WLDkm
function getTimerWLDkm(){
  var diff = 0;
  if(selectedAccount){
    if(startTimeWLDkm > 0 && endTimeWLDkm > 0){
      if(Date.now() / 1000 > startTimeWLDkm && Date.now() / 1000 < endTimeWLDkm){
        diff = Math.floor(endTimeWLDkm - (Date.now() / 1000));
        if(totalSoldValWLDkm >= forSaleValWLDkm || leftTokenWLDkm/RATEvalWLDkm< minBUSDvalWLDkm){
            diff = 0;
            timerStringWLDkm.innerHTML = "Sale ended";
        }else{
          if(!activeWLDkm){
            diff = 0;
              timerStringWLDkm.innerHTML = "Sale ended";
          }
        }
      }else if(Date.now() / 1000 >= endTimeWLDkm){
          timerStringWLDkm.innerHTML = "Sale ended";
      }else{
        diff = Math.floor(startTimeWLDkm - (Date.now() / 1000));
      }
      if(diff > 0){
        let days = Math.floor((diff % (60*60*60*24))/(60*60*24));
        let hours = (Math.floor((diff % (60*60*60*24))/(60*60)) < 10) ? '0' + Math.floor((diff % (60*60*60*24))/(60*60)) : Math.floor((diff % (60*60*60*24))/(60*60));
        let minutes = (Math.floor((diff % (60*60))/60) < 10) ? '0' + Math.floor((diff % (60*60))/60) : Math.floor((diff % (60*60))/60);
        let seconds = (Math.floor(diff % 60) < 10) ? '0' + Math.floor(diff % 60) : Math.floor(diff % 60);
        if(days == 0){
          timerStringWLDkm.innerHTML = hours+":"+minutes+":"+seconds;
        }else{
          hours = hours - days*24;
          timerStringWLDkm.innerHTML = days+" days "+hours+":"+minutes+":"+seconds;
        }
      }
    }
    fetchContractDataWLDkm();
  }
}

//WLDkmc
function getTimerWLDkmc(){
  var diff = 0;
  if(selectedAccount){
    if(startTimeWLDkmc > 0 && endTimeWLDkmc > 0){
      if(Date.now() / 1000 > startTimeWLDkmc && Date.now() / 1000 < endTimeWLDkmc){
        diff = Math.floor(endTimeWLDkmc - (Date.now() / 1000));
        if(totalSoldValWLDkmc >= forSaleValWLDkmc || leftTokenWLDkmc/RATEvalWLDkmc< minBUSDvalWLDkmc){
            diff = 0;
            timerStringWLDkmc.innerHTML = "Sale ended";
        }else{
          if(!activeWLDkmc){
            diff = 0;
              timerStringWLDkmc.innerHTML = "Sale ended";
          }
        }
      }else if(Date.now() / 1000 >= endTimeWLDkmc){
          timerStringWLDkmc.innerHTML = "Sale ended";
      }else{
        diff = Math.floor(startTimeWLDkmc - (Date.now() / 1000));
      }
      if(diff > 0){
        let days = Math.floor((diff % (60*60*60*24))/(60*60*24));
        let hours = (Math.floor((diff % (60*60*60*24))/(60*60)) < 10) ? '0' + Math.floor((diff % (60*60*60*24))/(60*60)) : Math.floor((diff % (60*60*60*24))/(60*60));
        let minutes = (Math.floor((diff % (60*60))/60) < 10) ? '0' + Math.floor((diff % (60*60))/60) : Math.floor((diff % (60*60))/60);
        let seconds = (Math.floor(diff % 60) < 10) ? '0' + Math.floor(diff % 60) : Math.floor(diff % 60);
        if(days == 0){
          timerStringWLDkmc.innerHTML = hours+":"+minutes+":"+seconds;
        }else{
          hours = hours - days*24;
          timerStringWLDkmc.innerHTML = days+" days "+hours+":"+minutes+":"+seconds;
        }
      }
    }
    fetchContractDataWLDkmc();
  }
}


//WL0Dkm
function getTimerWL0Dkm(){
  var diff = 0;
  if(selectedAccount){
    if(startTimeWL0Dkm > 0 && endTimeWL0Dkm > 0){
      if(Date.now() / 1000 > startTimeWL0Dkm && Date.now() / 1000 < endTimeWL0Dkm){
        diff = Math.floor(endTimeWL0Dkm - (Date.now() / 1000));
        if(totalSoldValWL0Dkm >= forSaleValWL0Dkm || leftTokenWL0Dkm/RATEvalWL0Dkm< minBUSDvalWL0Dkm){
            diff = 0;
            timerStringWL0Dkm.innerHTML = "Sale ended";
        }else{
          if(!activeWL0Dkm){
            diff = 0;
              timerStringWL0Dkm.innerHTML = "Sale ended";
          }
        }
      }else if(Date.now() / 1000 >= endTimeWL0Dkm){
          timerStringWL0Dkm.innerHTML = "Sale ended";
      }else{
        diff = Math.floor(startTimeWL0Dkm - (Date.now() / 1000));
      }
      if(diff > 0){
        let days = Math.floor((diff % (60*60*60*24))/(60*60*24));
        let hours = (Math.floor((diff % (60*60*60*24))/(60*60)) < 10) ? '0' + Math.floor((diff % (60*60*60*24))/(60*60)) : Math.floor((diff % (60*60*60*24))/(60*60));
        let minutes = (Math.floor((diff % (60*60))/60) < 10) ? '0' + Math.floor((diff % (60*60))/60) : Math.floor((diff % (60*60))/60);
        let seconds = (Math.floor(diff % 60) < 10) ? '0' + Math.floor(diff % 60) : Math.floor(diff % 60);
        if(days == 0){
          timerStringWL0Dkm.innerHTML = hours+":"+minutes+":"+seconds;
        }else{
          hours = hours - days*24;
          timerStringWL0Dkm.innerHTML = days+" days "+hours+":"+minutes+":"+seconds;
        }
      }
    }
    fetchContractDataWL0Dkm();
  }
}

//WLGyc
function getTimerWLGyc(){
  var diff = 0;
  if(selectedAccount){
    if(startTimeWLGyc > 0 && endTimeWLGyc > 0){
      if(Date.now() / 1000 > startTimeWLGyc && Date.now() / 1000 < endTimeWLGyc){
        diff = Math.floor(endTimeWLGyc - (Date.now() / 1000));
        if(totalSoldValWLGyc >= forSaleValWLGyc || leftTokenWLGyc/RATEvalWLGyc< minBUSDvalWLGyc){
            diff = 0;
            timerStringWLGyc.innerHTML = "Sale ended";
        }else{
          if(!activeWLGyc){
            diff = 0;
              timerStringWLGyc.innerHTML = "Sale ended";
          }
        }
      }else if(Date.now() / 1000 >= endTimeWLGyc){
          timerStringWLGyc.innerHTML = "Sale ended";
      }else{
        diff = Math.floor(startTimeWLGyc - (Date.now() / 1000));
      }
      if(diff > 0){
        let days = Math.floor((diff % (60*60*60*24))/(60*60*24));
        let hours = (Math.floor((diff % (60*60*60*24))/(60*60)) < 10) ? '0' + Math.floor((diff % (60*60*60*24))/(60*60)) : Math.floor((diff % (60*60*60*24))/(60*60));
        let minutes = (Math.floor((diff % (60*60))/60) < 10) ? '0' + Math.floor((diff % (60*60))/60) : Math.floor((diff % (60*60))/60);
        let seconds = (Math.floor(diff % 60) < 10) ? '0' + Math.floor(diff % 60) : Math.floor(diff % 60);
        if(days == 0){
          timerStringWLGyc.innerHTML = hours+":"+minutes+":"+seconds;
        }else{
          hours = hours - days*24;
          timerStringWLGyc.innerHTML = days+" days "+hours+":"+minutes+":"+seconds;
        }
      }
    }
    fetchContractDataWLGyc();
  }
}

//WL0Gyc
function getTimerWL0Gyc(){
  var diff = 0;
  if(selectedAccount){
    if(startTimeWL0Gyc > 0 && endTimeWL0Gyc > 0){
      if(Date.now() / 1000 > startTimeWL0Gyc && Date.now() / 1000 < endTimeWL0Gyc){
        diff = Math.floor(endTimeWL0Gyc - (Date.now() / 1000));
        if(totalSoldValWL0Gyc >= forSaleValWL0Gyc || leftTokenWL0Gyc/RATEvalWL0Gyc< minBUSDvalWL0Gyc){
            diff = 0;
            timerStringWL0Gyc.innerHTML = "Sale ended";
        }else{
          if(!activeWL0Gyc){
            diff = 0;
              timerStringWL0Gyc.innerHTML = "Sale ended";
          }
        }
      }else if(Date.now() / 1000 >= endTimeWL0Gyc){
          timerStringWL0Gyc.innerHTML = "Sale ended";
      }else{
        diff = Math.floor(startTimeWL0Gyc - (Date.now() / 1000));
      }
      if(diff > 0){
        let days = Math.floor((diff % (60*60*60*24))/(60*60*24));
        let hours = (Math.floor((diff % (60*60*60*24))/(60*60)) < 10) ? '0' + Math.floor((diff % (60*60*60*24))/(60*60)) : Math.floor((diff % (60*60*60*24))/(60*60));
        let minutes = (Math.floor((diff % (60*60))/60) < 10) ? '0' + Math.floor((diff % (60*60))/60) : Math.floor((diff % (60*60))/60);
        let seconds = (Math.floor(diff % 60) < 10) ? '0' + Math.floor(diff % 60) : Math.floor(diff % 60);
        if(days == 0){
          timerStringWL0Gyc.innerHTML = hours+":"+minutes+":"+seconds;
        }else{
          hours = hours - days*24;
          timerStringWL0Gyc.innerHTML = days+" days "+hours+":"+minutes+":"+seconds;
        }
      }
    }
    fetchContractDataWL0Gyc();
  }
}

//WL0Wzrd
function getTimerWL0Wzrd(){
  var diff = 0;
  if(selectedAccount){
    if(startTimeWL0Wzrd > 0 && endTimeWL0Wzrd > 0){
      if(Date.now() / 1000 > startTimeWL0Wzrd && Date.now() / 1000 < endTimeWL0Wzrd){
        diff = Math.floor(endTimeWL0Wzrd - (Date.now() / 1000));
        if(totalSoldValWL0Wzrd >= forSaleValWL0Wzrd || leftTokenWL0Wzrd/RATEvalWL0Wzrd< minBUSDvalWL0Wzrd){
            diff = 0;
            timerStringWL0Wzrd.innerHTML = "Sale ended";
        }else{
          if(!activeWL0Wzrd){
            diff = 0;
              timerStringWL0Wzrd.innerHTML = "Sale ended";
          }
        }
      }else if(Date.now() / 1000 >= endTimeWL0Wzrd){
          timerStringWL0Wzrd.innerHTML = "Sale ended";
      }else{
        diff = Math.floor(startTimeWL0Wzrd - (Date.now() / 1000));
      }
      if(diff > 0){
        let days = Math.floor((diff % (60*60*60*24))/(60*60*24));
        let hours = (Math.floor((diff % (60*60*60*24))/(60*60)) < 10) ? '0' + Math.floor((diff % (60*60*60*24))/(60*60)) : Math.floor((diff % (60*60*60*24))/(60*60));
        let minutes = (Math.floor((diff % (60*60))/60) < 10) ? '0' + Math.floor((diff % (60*60))/60) : Math.floor((diff % (60*60))/60);
        let seconds = (Math.floor(diff % 60) < 10) ? '0' + Math.floor(diff % 60) : Math.floor(diff % 60);
        if(days == 0){
          timerStringWL0Wzrd.innerHTML = hours+":"+minutes+":"+seconds;
        }else{
          hours = hours - days*24;
          timerStringWL0Wzrd.innerHTML = days+" days "+hours+":"+minutes+":"+seconds;
        }
      }
    }
    fetchContractDataWL0Wzrd();
  }
}

//WL0Som
function getTimerWL0Som(){
  var diff = 0;
  if(selectedAccount){
    if(startTimeWL0Som > 0 && endTimeWL0Som > 0){
      if(Date.now() / 1000 > startTimeWL0Som && Date.now() / 1000 < endTimeWL0Som){
        diff = Math.floor(endTimeWL0Som - (Date.now() / 1000));
        if(totalSoldValWL0Som >= forSaleValWL0Som || leftTokenWL0Som/RATEvalWL0Som< minBUSDvalWL0Som){
            diff = 0;
            timerStringWL0Som.innerHTML = "Sale ended";
        }else{
          if(!activeWL0Som){
            diff = 0;
              timerStringWL0Som.innerHTML = "Sale ended";
          }
        }
      }else if(Date.now() / 1000 >= endTimeWL0Som){
          timerStringWL0Som.innerHTML = "Sale ended";
      }else{
        diff = Math.floor(startTimeWL0Som - (Date.now() / 1000));
      }
      if(diff > 0){
        let days = Math.floor((diff % (60*60*60*24))/(60*60*24));
        let hours = (Math.floor((diff % (60*60*60*24))/(60*60)) < 10) ? '0' + Math.floor((diff % (60*60*60*24))/(60*60)) : Math.floor((diff % (60*60*60*24))/(60*60));
        let minutes = (Math.floor((diff % (60*60))/60) < 10) ? '0' + Math.floor((diff % (60*60))/60) : Math.floor((diff % (60*60))/60);
        let seconds = (Math.floor(diff % 60) < 10) ? '0' + Math.floor(diff % 60) : Math.floor(diff % 60);
        if(days == 0){
          timerStringWL0Som.innerHTML = hours+":"+minutes+":"+seconds;
        }else{
          hours = hours - days*24;
          timerStringWL0Som.innerHTML = days+" days "+hours+":"+minutes+":"+seconds;
        }
      }
    }
    fetchContractDataWL0Som();
  }
}

//WL0Cnb
function getTimerWL0Cnb(){
  var diff = 0;
  if(selectedAccount){
    if(startTimeWL0Cnb > 0 && endTimeWL0Cnb > 0){
      if(Date.now() / 1000 > startTimeWL0Cnb && Date.now() / 1000 < endTimeWL0Cnb){
        diff = Math.floor(endTimeWL0Cnb - (Date.now() / 1000));
        if(totalSoldValWL0Cnb >= forSaleValWL0Cnb || leftTokenWL0Cnb/RATEvalWL0Cnb< minBUSDvalWL0Cnb){
            diff = 0;
            timerStringWL0Cnb.innerHTML = "Sale ended";
        }else{
          if(!activeWL0Cnb){
            diff = 0;
              timerStringWL0Cnb.innerHTML = "Sale ended";
          }
        }
      }else if(Date.now() / 1000 >= endTimeWL0Cnb){
          timerStringWL0Cnb.innerHTML = "Sale ended";
      }else{
        diff = Math.floor(startTimeWL0Cnb - (Date.now() / 1000));
      }
      if(diff > 0){
        let days = Math.floor((diff % (60*60*60*24))/(60*60*24));
        let hours = (Math.floor((diff % (60*60*60*24))/(60*60)) < 10) ? '0' + Math.floor((diff % (60*60*60*24))/(60*60)) : Math.floor((diff % (60*60*60*24))/(60*60));
        let minutes = (Math.floor((diff % (60*60))/60) < 10) ? '0' + Math.floor((diff % (60*60))/60) : Math.floor((diff % (60*60))/60);
        let seconds = (Math.floor(diff % 60) < 10) ? '0' + Math.floor(diff % 60) : Math.floor(diff % 60);
        if(days == 0){
          timerStringWL0Cnb.innerHTML = hours+":"+minutes+":"+seconds;
        }else{
          hours = hours - days*24;
          timerStringWL0Cnb.innerHTML = days+" days "+hours+":"+minutes+":"+seconds;
        }
      }
    }
    fetchContractDataWL0Cnb();
  }
}

//WLSCnb
function getTimerWLSCnb(){
  var diff = 0;
  if(selectedAccount){
    if(startTimeWLSCnb > 0 && endTimeWLSCnb > 0){
      if(Date.now() / 1000 > startTimeWLSCnb && Date.now() / 1000 < endTimeWLSCnb){
        diff = Math.floor(endTimeWLSCnb - (Date.now() / 1000));
        if(totalSoldValWLSCnb >= forSaleValWLSCnb || leftTokenWLSCnb/RATEvalWLSCnb< minBUSDvalWLSCnb){
            diff = 0;
            timerStringWLSCnb.innerHTML = "Sale ended";
        }else{
          if(!activeWLSCnb){
            diff = 0;
              timerStringWLSCnb.innerHTML = "Sale ended";
          }
        }
      }else if(Date.now() / 1000 >= endTimeWLSCnb){
          timerStringWLSCnb.innerHTML = "Sale ended";
      }else{
        diff = Math.floor(startTimeWLSCnb - (Date.now() / 1000));
      }
      if(diff > 0){
        let days = Math.floor((diff % (60*60*60*24))/(60*60*24));
        let hours = (Math.floor((diff % (60*60*60*24))/(60*60)) < 10) ? '0' + Math.floor((diff % (60*60*60*24))/(60*60)) : Math.floor((diff % (60*60*60*24))/(60*60));
        let minutes = (Math.floor((diff % (60*60))/60) < 10) ? '0' + Math.floor((diff % (60*60))/60) : Math.floor((diff % (60*60))/60);
        let seconds = (Math.floor(diff % 60) < 10) ? '0' + Math.floor(diff % 60) : Math.floor(diff % 60);
        if(days == 0){
          timerStringWLSCnb.innerHTML = hours+":"+minutes+":"+seconds;
        }else{
          hours = hours - days*24;
          timerStringWLSCnb.innerHTML = days+" days "+hours+":"+minutes+":"+seconds;
        }
      }
    }
    fetchContractDataWLSCnb();
  }
}



let timerId = setInterval(() => getTimer(), 1000);
let timerIdWL = setInterval(() => getTimerWL(), 1000);
let timerIdWLS = setInterval(() => getTimerWLS(), 1000);

let timerIdWLMtvp = setInterval(() => getTimerWLMtvp(), 1000);
let timerIdWL0Mtvp = setInterval(() => getTimerWL0Mtvp(), 1000);
let timerIdWL0Mtvp2 = setInterval(() => getTimerWL0Mtvp2(), 1000);
let timerIdWL0Mtvp3 = setInterval(() => getTimerWL0Mtvp3(), 1000);
let timerIdWL0MtvpIdo = setInterval(() => getTimerWL0MtvpIdo(), 1000);
let timerIdWLSprout = setInterval(() => getTimerWLSprout(), 1000);
let timerIdWL0Sprout = setInterval(() => getTimerWL0Sprout(), 1000);
let timerIdWLDkm = setInterval(() => getTimerWLDkm(), 1000);
let timerIdWLDkmc = setInterval(() => getTimerWLDkmc(), 1000);
let timerIdWL0Dkm = setInterval(() => getTimerWL0Dkm(), 1000);
let timerIdWLGyc = setInterval(() => getTimerWLGyc(), 1000);
let timerIdWL0Gyc = setInterval(() => getTimerWL0Gyc(), 1000);
let timerIdWL0Wzrd = setInterval(() => getTimerWL0Wzrd(), 1000);
let timerIdWL0Som = setInterval(() => getTimerWL0Som(), 1000);
let timerIdWL0Cnb = setInterval(() => getTimerWL0Cnb(), 1000);
let timerIdWLSCnb = setInterval(() => getTimerWLSCnb(), 1000);











async function approveToken(amount){
  let approveAmount;
  await token.methods.approve(stakingAddress,amount).send({ from: selectedAccount },function (err, data) {
    if (err) {
      console.log(err);
      approveAmount = 0;
    }
    if (data) {
      approveAmount = 1;
    }
  });
  return approveAmount;
}

async function invest(id){
  var amount = parseFloat(document.querySelector("#amount"+id).value);
  if(amount){
    amount = String(amount);
    amount = web3.utils.toWei(amount);
    approve = await approveToken(amount);
    if(approve){
      amount = web3.utils.fromWei(amount);
      await staking.methods.invest(id,amount).send({from: selectedAccount}, function (err, data) {
        if (err) {
          console.log(err);
        }
        if (data) {
          
        }
      });
    }
  }
}

async function withdrawn(id){
  await staking.methods.withdrawn(id).send({from: selectedAccount}, function (err, data) {
    if (err) {
      console.log(err);
    }
    if (data) {
      fetchContractData();
    }
  });
}

async function closeDep(id){
  await staking.methods.close(id).send({from: selectedAccount}, function (err, data) {
    if (err) {
      console.log(err);
    }
    if (data) {
      fetchContractData();
    }
  });
}

async function reinvest(id){
  await staking.methods.reinvest(id).send({from: selectedAccount}, function (err, data) {
    if (err) {
      console.log(err);
    }
    if (data) {
      fetchContractData();
    }
  });
}

async function refreshAccountData() {
  document.querySelector("#btn-connect").style.display = "none";
  document.querySelector("#btn-disconnect").style.display = "block";
  const accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];
  var first = selectedAccount.slice(0, 5);
  var last = selectedAccount.slice(-3);
  document.querySelector("#btn-disconnect").textContent = first+"..."+last;
  fetchContractData();
}


/**
 * Connect wallet button pressed.
 */
async function onConnect() {
  try {
      provider = await web3Modal.connect();
  } catch(e) {
    return;
  }

  await init();
  await fetchContractData();
  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    refreshAccountData()
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    refreshAccountData()
  });

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    refreshAccountData()
  });
}
 
/**
 * Disconnect wallet button pressed.
 */
async function onDisconnect() {
  if(provider.close) {
    await provider.close;
    await web3Modal.clearCachedProvider();
    await web3Modal.providerController.clearCachedProvider();
  }
  await web3Modal.providerController.clearCachedProvider();
  selectedAccount = null;
  provider = null;
  selectedAccount = null;
  document.querySelector("#btn-connect").style.display = "block";
  document.querySelector("#btn-disconnect").style.display = "none";
}


/**
 * Main entry point.
 */
window.addEventListener('load', async () => {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {  
          56: "https://bsc-dataseed1.ninicoin.io",
        },
        name: 'FTM Mainnet',
        short_name: 'ftm',
        chain: 'smartchain',
        network: 'mainnet',
        chain_id: 56,
        network_id: 56,
        rpc_url: 'https://bsc-dataseed1.ninicoin.io',
        rpcUrl: "https://bsc-dataseed1.ninicoin.io",
        native_currency: {
          symbol: 'FTM',
          name: 'FTM',
          decimals: '0',
          contractAddress: '',
          balance: '',
        },
        infuraId: "6b941e3dae4a4c2db78ff46b6b213a96",
      }
    },

    fortmatic: {
      package: Fortmatic,
      options: {
        // Mikko's TESTNET api key
        key: "pk_test_391E26A3B43A3350"
      }
    }
  };
  
  web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions,
    disableInjectedProvider: false,
  });
  if(web3Modal.providerController.cachedProvider){
    if(web3Modal.providerController.cachedProvider == "walletconnect"){
      provider = new WalletConnectProvider({
        rpc: {  
          56: "https://bsc-dataseed1.ninicoin.io",
        },
        name: 'FTM Mainnet',
        short_name: 'Fantom',
        chain: 'smartchain',
        network: 'mainnet',
        chain_id: 56,
        network_id: 56,
        rpc_url: "https://bsc-dataseed1.ninicoin.io",
        native_currency: {
          symbol: 'FTM',
          name: 'FTM',
          decimals: '0',
          contractAddress: '',
          balance: '',
        },
        infuraId: "6b941e3dae4a4c2db78ff46b6b213a96",
      });
      if(provider.networkId != 56){
        onDisconnect();
      }else{
        await provider.enable();
      }
    }else{
      for(var i = 0;i<=web3Modal.providerController.providers.length;i++){
        if(web3Modal.providerController.providers[i].id == web3Modal.providerController.cachedProvider){
          const connector = web3Modal.providerController.providerOptions[web3Modal.providerController.providers[i].id];
          const proxy = await connector;
          provider = await web3Modal.connect(proxy);
          break;
        }
      }
    }
  }
  if(provider){
    await init();
    await fetchContractData();
    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
      refreshAccountData()
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
      refreshAccountData()
    });

    // Subscribe to networkId change
    provider.on("networkChanged", (networkId) => {
      refreshAccountData()
    });
  }
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
});
