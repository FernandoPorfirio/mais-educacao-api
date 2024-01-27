import "reflect-metadata";
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import { router } from "./app/router/index";

export const app = express();


app.use(cors({
  credentials:true,
}));

app.use(express.json());
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/', router);