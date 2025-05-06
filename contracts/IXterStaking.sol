// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IXterStaking {
    function XTER() external view returns (address);
    // Staking status
    struct Stk {
        uint256 id; // Unique identifier for each stake
        address staker; // Address of the staker
        uint256 amount; // Amount staked
        uint256 startTime; // Staking start time
        uint256 duration; // Duration in seconds
        bool claimed; // default is false
    }


    function stakes(uint256 index) external view returns (Stk memory);

    //mapping(address => uint256[]) public userStakes; // Mapping from user address to their stake record IDs
    function userStakes(address,uint256) external view returns (uint256);
}