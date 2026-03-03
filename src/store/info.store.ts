/** biome-ignore-all lint/suspicious/noExplicitAny: <> */

import { create } from 'zustand'

import type { DataResponseType } from '@/@types/apiResponse'

export type UseInfoState = {
  ipv4: string
  data: DataResponseType
  setIpv4: (payload: string) => void
  setData: (payload: DataResponseType) => void
}

export const useInfo = create<UseInfoState>(set => ({
  ipv4: '',
  data: {
    ip: '192.168.1.1',
    is_eu: false,
    city: 'Luanda',
    region: 'Luanda Province',
    region_code: 'LUA',
    region_type: 'province',
    country_name: 'Angola',
    country_code: 'AO',
    continent_name: 'Africa',
    continent_code: 'AF',
    latitude: -8.839,
    longitude: 13.289,
    postal: '1000',
    calling_code: '+244',
    flag: '🇦🇴',
    emoji_flag: '🇦🇴',
    emoji_unicode: 'U+1F1E6 U+1F1F4',
    languages: [
      {
        name: 'Portuguese',
        native: 'Português',
        code: 'pt'
      }
    ],
    currency: {
      name: 'Angolan Kwanza',
      code: 'AOA',
      symbol: 'Kz',
      native: 'Kwanza',
      plural: 'Kwanzas'
    },
    time_zone: {
      name: 'Africa/Luanda',
      abbr: 'WAT',
      offset: '+01:00',
      is_dst: false,
      current_time: '2026-02-19T14:30:00+01:00'
    },
    threat: {
      is_tor: false,
      is_icloud_relay: false,
      is_proxy: false,
      is_datacenter: false,
      is_anonymous: false,
      is_known_attacker: false,
      is_known_abuser: false,
      is_threat: false,
      is_bogon: false,
      blocklists: []
    },
    count: '1'
  },
  setIpv4: (payload: string) => set({ ipv4: payload }),
  setData: (payload: DataResponseType) => set({ data: payload })
}))
