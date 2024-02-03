/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    components: {
      IconButton: {
        baseStyle: {
          fontSize: "40px",
          color: "white",
        },
      },
    },
});