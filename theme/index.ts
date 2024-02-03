/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
      heading: 'var(--font-jost)',
      body: 'var(--font-jost)',
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