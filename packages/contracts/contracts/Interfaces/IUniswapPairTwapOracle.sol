// SPDX-License-Identifier: MIT

pragma solidity =0.6.6;

import "openzeppelin-solidity/contracts/access/Ownable.sol";

import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol';
import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol';
import '@uniswap/lib/contracts/libraries/FixedPoint.sol';
import '@uniswap/v2-periphery/contracts/libraries/UniswapV2OracleLibrary.sol';
import '@uniswap/v2-periphery/contracts/libraries/UniswapV2Library.sol';


interface IUniswapPairTwapOracle is Ownable {

    function setPeriod(uint256 _period) external;
    function consult(address token, uint amountIn) external view returns (uint amountOut);
}
