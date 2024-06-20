"use client";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React, { FC } from "react";
import { TailSpin } from "react-loader-spinner";

const Loader: FC = () => {
  return (
    <Box position="relative" top="1px">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/react-loader-spinner/4.0.0/css/react-spinner-loader.css"
        />
      </Head>

      <TailSpin
        height="18px"
        width="18px"
        color="rgba(31, 34, 34, 1)"
        ariaLabel="tail-spin-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        strokeWidth={5}
      />
    </Box>
  );
};

export default Loader;
