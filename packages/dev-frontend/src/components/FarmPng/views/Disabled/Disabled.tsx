import React, { useEffect, useState } from "react";
import { Card, Heading, Box, Flex } from "theme-ui";
import { LiquityStoreState } from "@liquity/lib-base";
import { useLiquitySelector } from "@liquity/lib-react";
import { InfoMessage } from "../../../InfoMessage";
import { UnstakeAndClaim } from "../UnstakeAndClaim";
import { RemainingLQTY } from "../RemainingLQTY";
import { StaticRow } from "../../../Trove/Editor";
import { GT, POOL2LP } from "../../../../strings";

const unlockFarming = Date.UTC(2021, 8, 10, 16, 0);
const localUnlockTime = new Date(unlockFarming);

const selector = ({ pngLiquidityMiningStake, pngLiquidityMiningLQTYReward }: LiquityStoreState) => ({
  pngLiquidityMiningStake, pngLiquidityMiningLQTYReward 
});

export const Disabled: React.FC = () => {
  const currentTimestamp = Date.parse(new Date(Date.now()).toUTCString());
  const [isFarmStarted, setFarmReady] = useState(currentTimestamp > unlockFarming);
  const secondsToUnlock = unlockFarming - currentTimestamp;
  
  useEffect(() => {
    if (!isFarmStarted) {
      console.log(`Will unlock Farm in ${secondsToUnlock} seconds`);
      const timeout = setTimeout(() => {
        console.log(`Unlocking farm`);
        setFarmReady(true);
      }, secondsToUnlock)
      return () => clearTimeout(timeout);
    } else {
      console.log(`Farm already unlocked`);
      return ;
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { pngLiquidityMiningStake: liquidityMiningStake, pngLiquidityMiningLQTYReward: liquidityMiningLQTYReward } = useLiquitySelector(selector);
  
  const hasStake = !liquidityMiningStake.isZero;

  return (
    <Card>
      <Heading>
        {POOL2LP} on ViperSwap
        <Flex sx={{ justifyContent: "flex-end" }}>
          {isFarmStarted && <RemainingLQTY />}
        </Flex>
      </Heading>
      <Box sx={{ p: [2, 3] }}>
        {isFarmStarted ?
        <InfoMessage title="Liquidity farming period has finished">
          <Flex>There are no more XLONG rewards left to farm</Flex>
        </InfoMessage>
        :
        <InfoMessage title="Liquidity farming period has not started yet">
          <Flex>Rewards period for XLONG will start at {localUnlockTime.toLocaleTimeString()} {localUnlockTime.toDateString()} local time</Flex>
        </InfoMessage>
        }
        {hasStake && (
          <>
            <Box sx={{ border: 1, pt: 3, borderRadius: 3 }}>
              <StaticRow
                label="Stake"
                inputId="farm-deposit"
                amount={liquidityMiningStake.prettify(4)}
                unit={POOL2LP}
              />
              <StaticRow
                label="Reward"
                inputId="farm-reward"
                amount={liquidityMiningLQTYReward.prettify(4)}
                color={liquidityMiningLQTYReward.nonZero && "success"}
                unit={GT}
              />
            </Box>
            <UnstakeAndClaim />
          </>
        )}
      </Box>
    </Card>
  );
};
