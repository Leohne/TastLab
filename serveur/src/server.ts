import express, { Application, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const app: Application = express();
const port: number = 3000