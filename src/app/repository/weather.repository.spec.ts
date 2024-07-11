import { HttpClient } from '@angular/common/http';
import '@testing-library/jest-dom';
import { of } from 'rxjs';
import { BasicEmojiConverter } from '../utils/emoji/basic-emoji-converter';
import { CoolEmojiConverter } from '../utils/emoji/cool-emoji-converter';
import { WeatherRepository } from './weather.repository';

const weatherResult = {
  coord: {
    lon: 13.4105,
    lat: 52.5244,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  ],
  base: 'stations',
  main: {
    temp: 300.37,
    feels_like: 301.93,
    temp_min: 298.7,
    temp_max: 301.45,
    pressure: 1014,
    humidity: 65,
    sea_level: 1014,
    grnd_level: 1008,
  },
  visibility: 10000,
  wind: {
    speed: 3.6,
    deg: 310,
  },
  clouds: {
    all: 0,
  },
  dt: 1720631246,
  sys: {
    type: 2,
    id: 2011538,
    country: 'DE',
    sunrise: 1720580160,
    sunset: 1720639627,
  },
  timezone: 7200,
  id: 2950159,
  name: 'Berlin',
  cod: 200,
};

describe('WeatherRepository', () => {
  it('should get a response from the fetch request', async () => {
    const httpClient: HttpClient = {
      get: (url: string) => of(weatherResult),
    } as any;

    const emojiConverter: CoolEmojiConverter = {
      getWeatherEmoji: (weatherResult: any) => '☀️',
    } as any;

    let weatherRepository = new WeatherRepository(httpClient, emojiConverter);

    weatherRepository.getMainWeather().subscribe((response) => {
      expect(weatherResult.name).toBe(response.country);
      expect(weatherResult.weather[0].main).toBe(response.mainWeather);
    });
  });

  it('212should get a response from the fetch request', async () => {
    const httpClient: HttpClient = {
      get: (url: string) => of(weatherResult),
    } as any;

    const emojiConverter: CoolEmojiConverter = {
      getWeatherEmoji: (weatherResult: any) => '☀️',
    } as any;

    const movieService = new WeatherRepository(httpClient, emojiConverter);

    movieService.getMainWeather().subscribe((response) => {
      expect(response.mainWeather).toMatchObject({
        mainWeather: '☁️',
        country: 'Berlin',
      });
    });
  });
});
