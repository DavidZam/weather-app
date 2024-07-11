import '@testing-library/jest-dom';
import { CoolEmojiConverter } from './cool-emoji-converter';

describe('CoolEmojiConverter', () => {
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

    const emojiConverter = new CoolEmojiConverter();

    expect(emojiConverter.getWeatherEmoji(serviceResponse)).toBe('☀️');
  });
});
