import { getIsoDate } from 'badly-typed-package';

const iso1 = getIsoDate('2022-12-01');

const iso2 = getIsoDate(1669848664);

const iso3 = getIsoDate(new Date());

const iso4 = getIsoDate();
