import '@testing-library/jest-dom';
import { BasicEmojiConverter } from './basic-emoji-converter';

describe('BasicEmojiConverter', () => {
  it('should print sun if weather is Clear', () => {
    const serviceResponse = {
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
    };

    const emojiConverter = new BasicEmojiConverter();

    expect(emojiConverter.getWeatherEmoji(serviceResponse)).toBe('☀️');
  });
});
