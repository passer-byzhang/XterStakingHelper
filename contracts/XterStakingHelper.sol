// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./IXterStaking.sol";
import "hardhat/console.sol";

contract XterStakingHelper {

    function getUserStakeCount(address stakingContract, address user) public view returns (uint256) {
        IXterStaking staking = IXterStaking(stakingContract);
        uint256 count = 0;
        try staking.userStakes(user, 0) returns (uint256) {
            while (true) {
                try staking.userStakes(user, count) returns (uint256) {
                    count++;
                } catch {
                    break;
                }
            }
        } catch {
            return 0;
        }
        return count;
    }

    function getStakesFromIds(address stakingContract, uint256[] memory stakeIds) public view returns (IXterStaking.Stk[] memory) {
        IXterStaking staking = IXterStaking(stakingContract);
        IXterStaking.Stk[] memory stakes = new IXterStaking.Stk[](stakeIds.length);
        console.log("stakeIds.length: ",stakeIds.length);
        console.log("stakeIds amount: ",staking.stakes(43677).amount);
        for (uint256 i = 0; i < stakeIds.length; i++) {
            console.log("id: ",stakeIds[i]);
            console.log("stakeIds amount: ",staking.stakes(stakeIds[i]).amount);
            stakes[i] = staking.stakes(stakeIds[i]);
        }
        return stakes;
    }

    function getStakesFromUser(address stakingContract, address user) public view returns (IXterStaking.Stk[] memory) {
        IXterStaking staking = IXterStaking(stakingContract);
        uint256 stakeCount = getUserStakeCount(stakingContract, user);
        uint256[] memory stakeIds = new uint256[](stakeCount);
        for (uint256 i = 0; i < stakeCount; i++) {
            stakeIds[i] = staking.userStakes(user, i);
        }
        return getStakesFromIds(stakingContract, stakeIds);
    }
} 