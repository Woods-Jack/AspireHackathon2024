// app/layout.tsx
import { Providers } from './providers'
import { PageWrapper } from '@/components/common/PageWrapper'
import LeftSidebar from '@/components/common/LeftSidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
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