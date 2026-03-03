/** biome-ignore-all lint/suspicious/noExplicitAny: <> */

type LanguageType = {
  name: string
  native: string
  code: string
}

type CurrencyType = {
  name: string
  code: string
  symbol: string
  native: string
  plural: string
}

type TimeZoneType = {
  name: string
  abbr: string
  offset: string
  is_dst: boolean
  current_time: string
}

type ThreatType = {
  is_tor: boolean
  is_icloud_relay: boolean
  is_proxy: boolean
  is_datacenter: boolean
  is_anonymous: boolean
  is_known_attacker: boolean
  is_known_abuser: boolean
  is_threat: boolean
  is_bogon: boolean
  blocklists: any[]
}

export type DataResponseType = {
  ip: string
  is_eu: boolean
  city: string
  region: string
  region_code: string
  region_type: string
  country_name: string
  country_code: string
  continent_name: string
  continent_code: string
  latitude: number
  longitude: number
  postal: string
  calling_code: string
  flag: string
  emoji_flag: string
  emoji_unicode: string
  languages: LanguageType[]
  currency: CurrencyType
  time_zone: TimeZoneType
  threat: ThreatType
  count: string
}
