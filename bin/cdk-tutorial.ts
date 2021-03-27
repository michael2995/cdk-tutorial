#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkTutorialStack } from '../lib/cdk-tutorial-stack';

const app = new cdk.App();
new CdkTutorialStack(app, 'CdkTutorialStack');
