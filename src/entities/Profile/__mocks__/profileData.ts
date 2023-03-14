import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'


import type { Profile } from '../module/types/Profile'


export const profileData: Profile = {
    username: 'admin',
    age: 41,
    country: Country.Russia,
    first: 'Ivan',
    lastname: 'Ivanov',
    city: 'Volgograd',
    currency: Currency.RUB
}