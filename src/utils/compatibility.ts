import { BirthChart, ZodiacSign } from '../types/user';

export function calculateCompatibility(chart1: BirthChart, chart2: BirthChart): number {
  // This is a simplified compatibility calculation
  // In a real app, this would use more complex astrological rules
  const aspects = [
    compareAspects(chart1.sunSign, chart2.sunSign),
    compareAspects(chart1.moonSign, chart2.moonSign),
    compareAspects(chart1.venus, chart2.venus),
    compareAspects(chart1.mars, chart2.mars),
    compareAspects(chart1.ascendant, chart2.ascendant)
  ];

  return (aspects.reduce((sum, score) => sum + score, 0) / aspects.length) * 100;
}

function compareAspects(sign1: ZodiacSign, sign2: ZodiacSign): number {
  const zodiacOrder = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  const pos1 = zodiacOrder.indexOf(sign1);
  const pos2 = zodiacOrder.indexOf(sign2);
  const distance = Math.abs(pos1 - pos2);

  // Trine (120°) = 1.0
  // Sextile (60°) = 0.8
  // Square (90°) = 0.4
  // Opposition (180°) = 0.6
  // Conjunction (0°) = 0.9
  
  switch (distance) {
    case 0: return 0.9;  // Conjunction
    case 2: return 0.8;  // Sextile
    case 3: return 0.4;  // Square
    case 4: return 0.8;  // Trine
    case 6: return 0.6;  // Opposition
    default: return 0.3;
  }
}