import { HttpClient, HttpHandler } from '@angular/common/http';
import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { CoolEmojiConverter } from '../../utils/emoji/cool-emoji-converter';
import { WeatherComponent } from './weather.component';

describe('Weather Component', () => {
  it('should render', async () => {
    await render(WeatherComponent, {
      providers: [HttpClient, HttpHandler, CoolEmojiConverter],
    });
  });

  it('should display a sun if main weather info is Clear', async () => {
    await render(WeatherComponent, {
      providers: [HttpClient, HttpHandler, CoolEmojiConverter],
      componentProperties: {
        mainWeather: 'Clear',
      },
    });

    const sun = await screen.findByRole('heading', { name: '☀️' })

    expect(sun).toBeInTheDocument();
  });

  it('should display a cloud if main weather info is not Clear', async () => {
    await render(WeatherComponent, {
      providers: [HttpClient, HttpHandler, CoolEmojiConverter],
      componentProperties: {
        mainWeather: 'Not Clear',
      },
    });

    const cloud = await screen.findByRole('heading', { name: '☁️' })

    expect(cloud).toBeInTheDocument();
  });
});
