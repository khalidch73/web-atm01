#! /usr/bin/env node
import { startATM } from './atm.js';

(async () => {
  await startATM();
})();
