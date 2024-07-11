import { RouterOutlet } from '@angular/router';
import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { WeatherComponent } from './components/weather/weather.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppComponent', () => {
  it('should render', async () => {
    await render(WeatherComponent, {
      imports: [RouterOutlet, WeatherComponent],
      providers: [HttpClient, HttpHandler],
    });
  });
});
