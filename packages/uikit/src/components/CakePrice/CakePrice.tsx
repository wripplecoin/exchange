import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Colors } from "../../theme";
import Skeleton from "../Skeleton/Skeleton";
import Text from "../Text/Text";

export interface Props {
  color?: keyof Colors;
  cakePriceUsd?: number;
  showSkeleton?: boolean;
  chainId: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  &:hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const fetchWXRPPrice = async () => {
  try {
    const response = await fetch(
      "https://api.dexscreener.com/latest/dex/pairs/bsc/0xeeA18A4885D4119f1cdbDcD0E33A20Bd738C10fB"
    );
    const data = await response.json();
    const wXRPPriceUsd = parseFloat(data.pairs[0].priceUsd);
    return wXRPPriceUsd;
  } catch (error) {
    console.error("Error fetching wXRP price:", error);
    return null;
  }
};

const CakePrice: React.FC<React.PropsWithChildren<Props>> = ({
  cakePriceUsd,
  color = "textSubtle",
  showSkeleton = true,
  chainId,
}) => {
  const [wXRPPrice, setWXRPPrice] = useState<number | null>(null);

  useEffect(() => {
    const getWXRPPrice = async () => {
      const price = await fetchWXRPPrice();
      setWXRPPrice(price);
    };
    getWXRPPrice();
  }, []);

  return cakePriceUsd ? (
    <PriceLink
      href={`https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=${chainId}`}
      target="_blank"
    >
      <img
        src="http://wripple.net/static/img/xrp.png"
        alt="Wripple Logo"
        width="45px"
        style={{ verticalAlign: "middle", marginRight: "2px" }}
      />

      <Text color={color} bold>{`XRP: $${cakePriceUsd.toFixed(3)}`}</Text>

      {wXRPPrice !== null && (
        <>
          <img
            src="https://wripple.net/logo.png"
            alt="wXRP Logo"
            width="28px"
            style={{ verticalAlign: "middle", marginLeft: "8px", marginRight: "2px" }}
          />
          <Text color={color} bold>{`wXRP: $${wXRPPrice.toFixed(9)}`}</Text>
        </>
      )}
    </PriceLink>
  ) : showSkeleton ? (
    <Skeleton width={80} height={24} />
  ) : null;
};

export default React.memo(CakePrice);
