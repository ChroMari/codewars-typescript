export const weatherInfo = (temp: number): string => {
  const convertToCelsius = ((temp - 32) * 5/9)
  
  return (Math.round(convertToCelsius *1e5)/1e5 + (convertToCelsius < 0 ?  ' is freezing temperature' : ' is above freezing temperature'));
};
