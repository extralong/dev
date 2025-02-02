import { Card, Heading, Box, Flex, Button, Link } from "theme-ui";

import { GT } from "../../strings";

import { InfoMessage } from "../InfoMessage";
import { useStakingView } from "./context/StakingViewContext";
import { Icon } from "../Icon";

export const NoStake: React.FC = () => {
  const { dispatch } = useStakingView();

  return (
    <Card>
      <Heading><p>XLONG Staking</p></Heading>
      <Box sx={{ p: [2, 3] }}>
        <InfoMessage title={`You haven't staked ${GT} yet.`}>
          Stake {GT} to earn a share of borrowing and redemption fees.
          Learn more: <Link href="https://docs.extralong.one/teddy-staking#how-does-staking-work-in-liquity" target="_blank">How does staking work? <Icon name="external-link-alt" /></Link>
        </InfoMessage>

        <Flex variant="layout.actions">
          <Button style={{margin: "10px 0 0"}} onClick={() => dispatch({ type: "startAdjusting" })}>Stake XLONG</Button>
        </Flex>
      </Box>
    </Card>
  );
};
