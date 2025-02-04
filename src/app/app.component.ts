import { Component, effect, OnInit, resource, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor() {
    effect(() => {
      if (this.userResource.value())
        this.user.set(this.userResource.value().joke);
    });
  }
  userResource = resource({
    loader: async () => {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
        },
      });
      return response.json();
    },
  });
  user = signal<string | null>(null);
  ngOnInit() {}
}
