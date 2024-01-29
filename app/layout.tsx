// app/layout.tsx
import { Providers } from './providers'
import { fonts } from './fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' className={fonts.jost.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}