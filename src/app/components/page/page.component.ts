import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HelloComponent } from '../hello/hello.component';
import { PanelComponent } from '../panel/panel.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HelloComponent, PanelComponent, FooterComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.less'
})
export class PageComponent {
  id: number | undefined;
  arr = [1, 2, 3, 4];
  private subscription: Subscription;

  titles: { [key: number]: string } = {
    1: "Наши новости",
    2: "Игровые моменты",
    3: "Прямые трансляции",
    4: "Вопросы судье и ваши пожелания",
  };

  leftImages: { [key: number]: string[] } = {
    1: ["assets/images/vk.svg#vk", "assets/images/discord.svg#discord"],
    2: ["assets/images/vk.svg#vk", "assets/images/youtube.svg#youtube"],
    3: ["assets/images/youtube.svg#youtube"],
    4: ["assets/images/discord.svg#discord"],
  };

  rightImages: { [key: number]: string[] } = {
    1: ["assets/images/micro.svg"],
    2: ["assets/images/mouse.svg"],
    3: ["assets/images/headphones.svg"],
    4: ["assets/images/message.svg"],
  };

  mainImages: { [key: number]: string } = {
    1: "assets/images/img-1.png",
    2: "assets/images/img-2.png",
    3: "assets/images/img-3.jpg",
  };

  constructor(private activateRoute: ActivatedRoute){
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id'] ? Number(params['id']) : undefined);
    console.log(this.id)
  }


  images_1 = ["../../../assets/images/vk.svg", "../../../assets/images/discord.svg"];
  images_2 = ["../../../assets/images/vk.svg", "../../../assets/images/youtube.svg"];
  images_3 = ["../../../assets/images/youtube.svg"];
  images_4 = ["../../../assets/images/discord.svg"];

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
