import { extendTheme } from "@chakra-ui/react";
import "@fontsource/bai-jamjuree";

const breakpoints = {
  xxs: "23em", //368px
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536px
  xxl: "110em", // 1760px
};

const theme = extendTheme({
  breakpoints,
  styles: {
    global: {
      "*": {
        wordBreak: "break-word",
      },
      body: {
        bg: "custom.200",
        background: [
          "radial-gradient(circle at top, #2f504ffc 0%, rgba(32, 34, 34, 1) 50%)",
          "radial-gradient(circle at top, #2f504ffc 0%, rgba(32, 34, 34, 1) 50%)",
          "radial-gradient(circle at top, #406968 0%, rgba(32, 34, 34, 1) 44%)",
        ],
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "100vh",
        color: "white",
        fontFamily: "sans-serif",
      },
    },
  },

  colors: {
    custom: {
      50: "rgba(122, 252, 248, 1)",
      100: "rgba(31, 34, 34, 1)",
      150: "rgba(40, 68, 67, 1)",
      200: "rgba(32, 34, 34, 1)",
      250: "rgba(189, 192, 192, 1)",
      300: "rgba(253, 254, 254, 1)",
      350: "rgb(55,102,101)",
      400: "rgba(249, 249, 249, 1)",
      450: "rgba(30, 44, 43, 1)",
      500: "rgba(26, 38, 37, 1)",
      550: "rgba(89, 129, 127, 1)",
      600: "rgba(255, 107, 105, 1)",
      650: "#f77",
    },
  },

  fonts: {
    heading: "'Bai Jamjuree', sans-serif",
    body: "'Bai Jamjuree', sans-serif",
  },

  components: {
    Button: {
      variants: {
        blueBtn: {
          borderRadius: "8px",
          background: "custom.50",
          color: "custom.100",
          transition: "background-color .3s",
          _hover: {
            background: "custom.650",
          },
        },

        borderedBtn: {
          fontWeight: "400",
          borderRadius: "8px",
          border: "1px solid",
          borderColor: "custom.250",
          background: "transparent",
          color: "custom.300",
          transition: "all .3s ease",
          _hover: {
            borderColor: "custom.50",
            background: "custom.50",
            color: "white",
          },
        },
      },
    },

    Checkbox: {
      baseStyle: {
        control: {
          width: "20px",
          height: "20px",
          borderWidth: "1px",
          borderRadius: "2px",
          borderColor: "custom.250",
          outline: "none",
          boxShadow: "none",
          _checked: {
            bg: "transparent",
            borderColor: "custom.250",
            outline: "none",
            boxShadow: "none",
            _hover: {
              borderColor: "custom.250",
              bg: "transparent",
              outline: "none",
              boxShadow: "none",
            },
          },
          _hover: {
            bg: "transparent",
            borderColor: "custom.250",
            outline: "none",
            boxShadow: "none",
          },
          _focus: {
            bg: "transparent",
            borderColor: "custom.250",
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },

    Input: {
      baseStyle: {
        field: {
          color: "custom.300",
          borderColor: "custom.550",
          borderRadius: "8px",
          boxShadow: "none",
          _active: {
            borderColor: "custom.550",
            boxShadow: "none",
          },
          _focus: {
            borderColor: "custom.550",
            boxShadow: "none",
          },
          _focusWithin: {
            borderColor: "custom.550",
            boxShadow: "none",
          },
          _hover: {
            borderColor: "custom.550",
            boxShadow: "none",
          },
          _visited: {
            borderColor: "custom.550",
            boxShadow: "none",
          },
          _focusVisible: {
            borderColor: "custom.550",
            boxShadow: "none",
          },
          _placeholder: {
            color: "custom.550",
            fontSize: "16px",
            fontWeight: "400",
          },
        },
      },
      variants: {
        outline: {
          field: {
            border: "1px solid",
            borderColor: "custom.550",
            _active: {
              borderColor: "custom.550",
              boxShadow: "none",
            },
            _focus: {
              borderColor: "custom.550",
              boxShadow: "none",
            },
            _focusWithin: {
              borderColor: "custom.550",
              boxShadow: "none",
            },
            _hover: {
              borderColor: "custom.550",
              boxShadow: "none",
            },
            _visited: {
              borderColor: "custom.550",
              boxShadow: "none",
            },
            _focusVisible: {
              borderColor: "custom.550",
              boxShadow: "none",
            },
            _placeholder: {
              color: "custom.550",
              fontSize: "16px",
              fontWeight: "400",
            },
          },
        },
        filled: {
          field: {
            bg: "gray.100",
            borderColor: "custom.550",
            _hover: {
              bg: "gray.150",
              borderColor: "custom.550",
            },
            _focus: {
              bg: "gray.200",
              borderColor: "custom.550",
              boxShadow: "none",
            },
            _focusVisible: {
              bg: "gray.200",
              borderColor: "custom.550",
              boxShadow: "none",
            },
            _placeholder: {
              color: "gray.400",
              fontSize: "14px",
            },
          },
        },
      },
      defaultProps: {
        variant: "outline",
      },
    },
  },
});

export default theme;
