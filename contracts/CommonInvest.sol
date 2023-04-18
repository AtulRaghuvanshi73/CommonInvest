//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Crowdfunding {
    address payable public owner;
    mapping(address => uint) public contributions;
    uint public goal;
    uint public endTime;
    uint public totalContributions;
    bool public goalReached;
    bool public ended;

    constructor(uint _goal, uint _durationInDays) {
        owner = payable(msg.sender);
        goal = _goal * 1 ether;
        endTime = block.timestamp + (_durationInDays * 1 days);
    }

    function contribute() public payable {
        require(!ended, "Crowdfunding: the crowdfunding has ended");
        contributions[msg.sender] += msg.value;
        totalContributions += msg.value;
    }

    function checkGoalReached() public {
        require(block.timestamp >= endTime, "Crowdfunding: the crowdfunding is not over yet");
        require(!ended, "Crowdfunding: the crowdfunding has already ended");

        if (totalContributions >= goal) {
            goalReached = true;
            payable(owner).transfer(address(this).balance);
        }

        ended = true;
    }

    function withdraw() public {
        require(ended, "Crowdfunding: the crowdfunding is still ongoing");
        require(!goalReached, "Crowdfunding: the goal has been reached");

        uint amount = contributions[msg.sender];
        contributions[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }

    function getRefund() public {
        require(ended, "Crowdfunding: the crowdfunding is still ongoing");
        require(!goalReached, "Crowdfunding: the goal has been reached");

        uint amount = contributions[msg.sender];
        contributions[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
}


