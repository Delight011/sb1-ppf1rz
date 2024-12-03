export interface User {
  id: string;
  name: string;
  birthDate: Date;
  birthTime?: string;
  birthPlace?: string;
  zodiacSign: ZodiacSign;
  bio: string;
  profileImage: string;
  interests: string[];
  email: string;
  birthChart?: BirthChart;
}

export interface BirthChart {
  ascendant: ZodiacSign;
  sunSign: ZodiacSign;
  moonSign: ZodiacSign;
  venus: ZodiacSign;
  mars: ZodiacSign;
}

export type ZodiacSign =
  | 'Aries'
  | 'Taurus'
  | 'Gemini'
  | 'Cancer'
  | 'Leo'
  | 'Virgo'
  | 'Libra'
  | 'Scorpio'
  | 'Sagittarius'
  | 'Capricorn'
  | 'Aquarius'
  | 'Pisces';