import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CoolEmojiConverter } from '../utils/emoji/cool-emoji-converter';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root',
})
export class WeatherRepository {
  private baseUrl: string = `${environment.apiUrl}?q=Berlin`

  constructor(
    private httpClient: HttpClient,
    private emojiConverter: CoolEmojiConverter
  ) {}

  getMainWeather() {
    return this.httpClient.get(this.baseUrl).pipe(
      map((weatherResult: any) => {
        console.log(weatherResult)
        return {
          mainWeather: this.emojiConverter.getWeatherEmoji(weatherResult),
          country: weatherResult.name,
        };
      })
    );
  }
}
