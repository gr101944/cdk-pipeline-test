#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkpipelinesDemoPipelineStack2} from '../lib/pipeline';

const app = new cdk.App();
new CdkpipelinesDemoPipelineStack2(app, 'CdkpipelinesDemoPipelineStack2', {
  env: { account: '333490196116', region: 'us-east-1' },
});

app.synth();
