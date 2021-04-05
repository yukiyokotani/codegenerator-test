import * as fs from 'fs';

import * as CodeGenerator from '@himenon/openapi-typescript-code-generator';

const main = () => {
  const params: CodeGenerator.Params = {
    entryPoint: 'openapi/api.yml', // support .yml, .yaml, .json
  };
  const code = CodeGenerator.generateTypeScriptCode(params);
  fs.writeFileSync('client.ts', code, { encoding: 'utf-8' });
};

main();
