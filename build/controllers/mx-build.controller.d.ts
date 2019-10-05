/// <reference types="express" />
import { Response } from '@loopback/rest';
import { Build } from '../models';
export declare class MxBuildController {
    private readonly response;
    constructor(response: Response);
    register(build: Build): Promise<{
        log: string;
    }>;
}
