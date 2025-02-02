import React from "react";
import { Flex } from "theme-ui";

import { LiquityStoreState } from "@liquity/lib-base";
import { useLiquitySelector } from "@liquity/lib-react";

const selector = ({ pngRemainingLiquidityMiningLQTYReward }: LiquityStoreState) => ({
  pngRemainingLiquidityMiningLQTYReward
});

export const RemainingLQTY: React.FC = () => {
  const { pngRemainingLiquidityMiningLQTYReward: remainingLiquidityMiningLQTYReward } = useLiquitySelector(selector);

  return (
    <Flex sx={{ mr: 2, fontSize: 2, fontWeight: "medium" }}>
      {remainingLiquidityMiningLQTYReward.prettify(0)} XLONG remaining
    </Flex>
  );
};
