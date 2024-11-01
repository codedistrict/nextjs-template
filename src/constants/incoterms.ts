import { Incoterm } from '@/types/models';

export const INCOTERMS: Incoterm[] = [
  { id: 'iterm_exw', name: 'EXW', title: 'EXW - Ex Works', type: 'any' },
  { id: 'iterm_fca', name: 'FCA', title: 'FCA - Free Carrier', type: 'any' },
  {
    id: 'iterm_cpt',
    name: 'CPT',
    title: 'CPT - Carriage Paid To',
    type: 'any',
  },
  {
    id: 'iterm_cip',
    name: 'CIP',
    title: 'CIP - Carriage and Insurance Paid To',
    type: 'any',
  },
  {
    id: 'iterm_dpu',
    name: 'DAP',
    title: 'DAP - Delivered At Place',
    type: 'any',
  },
  {
    id: 'iterm_ddp',
    name: 'DPU',
    title: 'DPU - Delivered at Place Unloaded',
    type: 'any',
  },
  {
    id: 'iterm_dpu',
    name: 'DDP',
    title: 'DDP - Delivered Duty Paid',
    type: 'any',
  },
  {
    id: 'iterm_fas',
    name: 'FAS',
    title: 'FAS - Free Alongside Ship',
    type: 'waterway',
  },
  {
    id: 'iterm_fob',
    name: 'FOB',
    title: 'FOB - Free On Board',
    type: 'waterway',
  },
  {
    id: 'iterm_cfr',
    name: 'CFR',
    title: 'CFR - Cost and Freight',
    type: 'waterway',
  },
  {
    id: 'iterm_cif',
    name: 'CIF',
    title: 'CIF - Cost, Insurance and Freight',
    type: 'waterway',
  },
];
