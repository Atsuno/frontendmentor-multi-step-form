import { Ubuntu } from 'next/font/google'

const fontPrimary = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-primary',
})

const useFonts = [fontPrimary]

/* #####################
 * Magic
 ####################### */
const fontClass = useFonts.map((font) => (
  font.variable
)).join(' ')

export default fontClass
