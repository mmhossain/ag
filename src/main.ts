/// <reference types="@angular/localize" />

import "./polyfills";

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

enableProdMode();

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
