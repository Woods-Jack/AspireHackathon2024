export const buildUserData = (theme: string, marcelData: string, ccData: string) => 
  (
  `
    Information about the employee:
      ${marcelData}

    Key themes from the employees recent growth catch ups:
      ${ccData}

    Current market trends:
      - Generative AI
      - Blockchain
      - NextJS
      - Jira

    Make sure to particularly include courses around the theme of "${theme.replace('_',' ')}"
  `
  )