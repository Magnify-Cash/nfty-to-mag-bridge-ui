import { Center, Flex, Image, Link, Text } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

const LinksWrapper = ({ children }: PropsWithChildren) => (
  <Flex flexDir="column" gap="20px">
    {children}
  </Flex>
);
const LinksHeaderWrapper = ({ title }: { title: string }) => (
  <Text fontSize="16px" fontWeight="700" lineHeight="24px" color="#fff">
    {title}
  </Text>
);
const LinkItem = ({
  href,
  title,
  target = "_blank",
}: {
  href: string;
  title: string;
  target?: React.HTMLAttributeAnchorTarget | undefined;
}) => (
  <Link
    fontSize="14px"
    fontWeight="400"
    lineHeight="16px"
    color="#BDC0C0"
    href={href}
    target={target}
    transition="color .3s"
    _hover={{ color: "#f77" }}
  >
    {title}
  </Link>
);

export const Footer = () => {
  return (
    <Center as="footer" mt="80px" mb="50px">
      <Flex w="1110px" justifyContent="space-between">
        <Flex>
          <Image src="/mag-logo.svg" alt="mag-logo.svg" />
        </Flex>
        <Flex gap="100px">
          <LinksWrapper>
            <LinksHeaderWrapper title="ABOUT MAGNIFY" />
            <LinkItem
              href="https://www.magnify.cash/"
              title="Magnify Website"
            />
            <LinkItem
              href="https://www.magnify.cash/whitepaper"
              title="Whitepaper"
            />
            <LinkItem
              href=" https://www.coingecko.com/en/coins/magnify-cash/"
              title="$MAG on CoinGecko"
            />
          </LinksWrapper>
          <LinksWrapper>
            <LinksHeaderWrapper title="SOCIALS" />
            <LinkItem href="https://x.com/MagnifyCash" title="Twitter" />
            <LinkItem href="https://t.me/magnifycash" title="Telegram" />
            <LinkItem href="https://discord.gg/magnifycash" title="Discord" />
          </LinksWrapper>
          <LinksWrapper>
            <LinksHeaderWrapper title="RESOURCES" />
            <LinkItem href="https://www.magnify.cash/community" title="Community" />
            <LinkItem
              href="mailto:socials@magnify.cash?subject=Inquiry via Magnify.Cash"
              title="Get in Touch"
              target={undefined}
            />
          </LinksWrapper>
        </Flex>
      </Flex>
    </Center>
  );
};
