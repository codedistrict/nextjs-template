import { COUNTRIES } from '@/constants/index';
import { Region } from '@/types/pages/admin';

let regions: any = {};

Object.values(COUNTRIES).forEach(country => {
  if (!regions[country.region]) regions[country.region] = [];

  regions[country.region].push({ id: country.id, name: country.name });
});

export type regionsMapType = { [key: string]: Region };

export const REGIONS_MAP: regionsMapType = {
  reg_0001: {
    countries: regions['Europe'],
    id: 'reg_0001',
    name: 'Western Europe',
  },
  reg_0002: {
    countries: regions['Europe'],
    id: 'reg_0002',
    name: 'Central Europe',
  },
  reg_0003: {
    countries: regions['Europe'],
    id: 'reg_0003',
    name: 'Eastern Europe',
  },
  reg_0004: { countries: regions['Asia'], id: 'reg_0004', name: 'Asia' },
  reg_0005: { countries: regions['Africa'], id: 'reg_0005', name: 'Africa' },
  reg_0006: { countries: regions['Asia'], id: 'reg_0006', name: 'Middle East' },
  reg_0007: {
    countries: regions['Americas'],
    id: 'reg_0007',
    name: 'North America',
  },
  reg_0008: {
    countries: regions['Americas'],
    id: 'reg_0008',
    name: 'Soutn America',
  },
};

export const REGIONS = Object.values(REGIONS_MAP);
