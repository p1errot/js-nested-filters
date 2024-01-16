import createFilters from './utils/createFilters';
import createTitle from './utils/createTitle';
import config from './config.json';
import './style.css';

const app = document.getElementById('app');
const { oneFilter, filtersOneLevel, filtersMultipleLevel } = config;

// One level filter
const oneFilterTitle = createTitle('One level filter:');
app.appendChild(oneFilterTitle);

const oneFilterEl = createFilters(oneFilter);
app.appendChild(oneFilterEl);

// Group one level filter
const oneLevelTitle = createTitle(`Group one level filter:`);
app.appendChild(oneLevelTitle);

const wrapperOneLvlFilter = createFilters(filtersOneLevel);
app.appendChild(wrapperOneLvlFilter);

// Multiple level filter
const twoLevelTitle = createTitle(`Group two level filter:`);
app.appendChild(twoLevelTitle);

const wrapperTwoLvlFilter = createFilters(filtersMultipleLevel);
app.appendChild(wrapperTwoLvlFilter);
