//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.0/contracts/token/ERC20/IERC20.sol" from "github.com;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.0/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.0/contracts/utils/math/SafeMath.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.0/contracts/access/Ownable.sol";

contract MyContract is Ownable {
  using SafeMath for uint256;

  address public walletAddress;
  IERC20 public token;

  constructor(address _walletAddress, address _tokenAddress) {
    walletAddress = _walletAddress;
    token = IERC20(_tokenAddress);
  }

  function connectToWallet() public onlyOwner {
    uint256 balance = token.balanceOf(address(this));
    require(balance > 0, "MyContract: no tokens to transfer");

    require(token.approve(walletAddress, balance), "MyContract: approval failed");
  }
}
