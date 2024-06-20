import { extendTheme } from "@chakra-ui/react";
import "@fontsource/bai-jamjuree";

const theme = extendTheme({
  styles: {
    global: {
      "*": {
        wordBreak: "break-word",
      },
      body: {
        bg: "custom.200",
        background:
          "radial-gradient(circle at top, #406968 0%, rgba(32, 34, 34, 1) 44%)",
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
          transition: "all .4s ease",
          _hover: {
            opacity: "0.7",
          },
        },

        tokenBtn: {
          fontSize: "16px",
          fontWeight: "600",
          borderRadius: "8px",
          background: "custom.200",
          color: "custom.300",
          transition: "all .4s ease",
          _hover: {
            opacity: "0.7",
          },
        },

        connectBtn: {
          fontWeight: "400",
          borderRadius: "8px",
          border: "1px solid",
          borderColor: "custom.250",
          background: "transparent",
          color: "custom.300",
          transition: "all .4s ease",
          _hover: {
            borderColor: "custom.50",
            color: "custom.50",
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
          _checked: {
            bg: "transparent",
            borderColor: "custom.250",
            _hover: {
              borderColor: "custom.250",
              bg: "transparent",
            },
          },
          _hover: {
            bg: "transparent",
            borderColor: "custom.250",
          },
          _focus: {
            bg: "transparent",
            borderColor: "custom.250",
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
