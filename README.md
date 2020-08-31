# WarpviewAngular

Demo project for WarpView integration with Angular

## Setup

```shell script
$ ng new warpview-angular # choose scss
$ cd warpview-angular
$ yarn add @senx/warpview
```

In `polyfills.ts`: 

```typescript
(window as any).global = window;
```

In `app.module.ts`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WarpViewAngularModule} from '@senx/warpview';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WarpViewAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

In `styles.scss` :

```scss
@import "~@senx/warpview/elements/warpview-elements.css";
```
