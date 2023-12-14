import {Readline} from "./Readline/Readline.js";
import {Puppeteer} from "./Puppeteer/Puppeteer.js";
import {Commander} from "./Commander/Commander.js";
const readline = new Readline()
const commander = new Commander()
const puppeteer =  new Puppeteer()

export {readline, puppeteer, commander}