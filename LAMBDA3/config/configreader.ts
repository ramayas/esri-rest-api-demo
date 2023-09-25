// ------------------------------------------
// configreader
//
//  Reads a yaml configuration file and provides 
//  te methods to retrieve each parameter
// ------------------------------------------

import * as jsyaml from 'js-yaml';
import * as fs from 'fs';

export class ConfigReader {
  cfg: any;

  constructor(public configPath: string) {
    try {
      this.cfg = jsyaml.load(fs.readFileSync(configPath, 'utf8'));
    }
    catch (e) {
      throw e;
      // throw new Error('Unable to load the configuration file: ' + configPath);
    }
  }

  get(param: string): string {
    return this.cfg[param];
  }

  getArray(param: string): { [key: string]: any[] } {
    return this.cfg[param];
  }
}
