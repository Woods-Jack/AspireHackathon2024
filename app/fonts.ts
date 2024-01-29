// app/fonts.ts
import { Jost } from 'next/font/google'

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-Jost',
})

export const fonts = {
  jost,
}