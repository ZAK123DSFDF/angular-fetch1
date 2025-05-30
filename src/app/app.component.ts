import { Component, effect, OnInit, resource, signal } from '@angular/core';
function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent  {
  constructor() {
  }
  userResource = resource({
    loader: async () => {
      await delay(2000);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      return data.title;
    }
  });
}
