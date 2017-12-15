import { Framework7Engine } from 'aurelia-framework7-typescript';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(Framework7Engine,EventAggregator)
export class App {
  
  views:AppView[];

  constructor (private f7:Framework7Engine, private ea:EventAggregator) {
    this.views = [
    {
      name: 'index',
      navTitle: 'Home',
      moduleId: './pages/index/index',
      nav: true,
      homepage:true,
    }, 
   
    {
      name: 'normal-page',
      navTitle: 'Normal Page',
      moduleId: './pages/normal-page/normal-page',
      nav: true
    },
    {
      name: 'no-nav',
      moduleId: './pages/no-nav/no-nav',
      nav: false
    }]
  }

  attached () {
    this.f7.setUpFramework7();
    
  }
}
