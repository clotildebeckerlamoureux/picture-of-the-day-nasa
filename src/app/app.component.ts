import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NasaService } from './nasa.service';

interface Data {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'picture-of-the-day-nasa';

  public imgOfTheDay?: string;

  public data?: Data;

  private nasaService = inject(NasaService);

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe(pictureFromJson => {
      this.data = pictureFromJson as Data
      this.imgOfTheDay = this.data.url
      console.log(this.imgOfTheDay)
    })
  }
}
