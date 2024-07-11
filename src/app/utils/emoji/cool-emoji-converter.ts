import { Injectable } from '@angular/core';
import { EmojiConverter } from '../../models/emoji-converter';

@Injectable({
  providedIn: 'root',
})
export class CoolEmojiConverter implements EmojiConverter {
  getWeatherEmoji(weatherResult: any) {
    if (weatherResult.weather[0].main !== 'Clear') {
      return '☁️';
    }
    return '☀️';
  }
}
