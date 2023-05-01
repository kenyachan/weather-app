import './css/style.css';
import './css/footer.css';
import './css/weather.css';
import { weatherApp } from './weatherApp';
import { screenController } from './screenController';

const app = weatherApp();

const sc = screenController(app);

