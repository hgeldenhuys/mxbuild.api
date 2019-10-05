// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


import {getModelSchemaRef, post, requestBody, Response, RestBindings} from '@loopback/rest';
import {inject} from '@loopback/context';
import {Build} from '../models';
import * as shell from "shelljs";

export class MxBuildController {
  constructor(
    @inject(RestBindings.Http.RESPONSE)
    private readonly response: Response,
  ) {}

  @post('/build', {
    responses: {
      '200': {
        description: 'MxBuild',
        content: {'application/json': {schema: getModelSchemaRef(Build)}},
      },
    },
  })
  async register(
    @requestBody() build: Build,
  ): Promise<{log: string}> {
    shell.exec(`/tmp/opt/mono-3.10.0/bin/mono --config /tmp/opt/mono-3.10.0/etc/mono/config /mendix/modeler/mxbuild.exe --java-home=/mendix/app/.local/usr/lib/jvm/jdk-8u202-oracle-x64 --java-exe-path=/mendix/app/.local/usr/lib/jvm/jdk-8u202-oracle-x64/bin/java --write-errors=builderrors.log --target=${build.target} ${build.projectFilePath}`);
    return {
      log: "test"
    };
  }
}
