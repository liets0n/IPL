import type { TranslationValues } from 'next-intl'

type TFunction = (key: string, values?: TranslationValues) => string

export default function textFormatter(
  text: number | string | boolean,
  t: TFunction
) {
  const formattedText = String(text)

  const invalidValues = [
    '',
    'null',
    'null null',
    'Invalid Date',
    'null (null)',
    '+null'
  ]

  if (invalidValues.includes(formattedText)) return 'N/A'
  if (text === true) return t('yes')
  if (text === false) return t('no')

  return formattedText.length >= 40
    ? `${formattedText.slice(0, 40)}...`
    : formattedText
}
