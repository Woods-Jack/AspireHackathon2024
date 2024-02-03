/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "Futura, sans-serif",
    heading: "Futura, sans-serif",
  },
  styles: {
    global: {
      "@font-face": [
        {
          fontFamily: 'Futura',
          fontWeight: 400,
          src: 'url("/fonts/FuturaNext_Medium.otf") format("opentype")',
        },
        {
          fontFamily: 'futura-light',
          fontWeight: 300,
          src: 'url("/fonts/FuturaNext_Light.otf") format("opentype")',
        },
        {
          fontFamily: 'futura-book',
          fontWeight: 350,
          src: 'url("/fonts/FuturaNext_Book.otf") format("opentype")',
        },
        {
          fontFamily: 'futura-semibold',
          fontWeight: 600,
          src: 'url("/fonts/FuturaNext_DemiBold.otf") format("opentype")',
        },
      ],
    },
  },
    components: {
      IconButton: {
        baseStyle: {
          fontSize: "40px",
          color: "white",
        },
      },
    },
});