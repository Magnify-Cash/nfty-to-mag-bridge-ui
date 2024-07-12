import {Center, Flex, FlexProps, Image, Link, Text} from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

const LinksWrapper = ({ children, ...props }: PropsWithChildren & FlexProps) => (
  <Flex flexDir="column" gap="20px" {...props}>
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
    <Center as="footer" mt="80px" borderTop='1px solid' borderColor='#284443' py='50px' px={{base: '16px', lg: '0px'}}>
      <Flex w="1110px" justifyContent="space-between"  flexDirection={{base: 'column', lg: 'row'}} >
        <Image src="/mag-logo.svg" alt="mag-logo.svg" mb={{base: '50px', lg: '0px'}} />
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
          <LinksWrapper display={{base: 'none', lg: 'flex'}}>
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
        <Flex gap='24px' justifyContent="center" mt='48px' display={{base: 'flex', lg: 'none'}}>
          <Link href='https://x.com/MagnifyCash' target="_blank" rel="noopener noreferrer">
            <Image src='/twitter.svg' alt='twitter'/>
          </Link>
          <Link href='https://t.me/magnifycash' target="_blank" rel="noopener noreferrer">
            <Image src='/telegram.svg' alt='telegram'/>
          </Link>
          <Link href='https://discord.gg/magnifycash' target="_blank" rel="noopener noreferrer">
            <Image src='/discord.svg' alt='discord'/>
          </Link>

        </Flex>
      </Flex>
    </Center>
  );
};
