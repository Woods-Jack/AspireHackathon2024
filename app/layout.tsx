// app/layout.tsx
import { Providers } from './providers'
import { fonts } from './fonts'
import { PageWrapper } from '@/components/common/PageWrapper'
import LeftSidebar from '@/components/common/LeftSidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' className={fonts.jost.variable}>
      <body>
        <Providers>
          <LeftSidebar />
          <PageWrapper>
          {children}
          </PageWrapper>
        </Providers>
      </body>
    </html>
  )
}