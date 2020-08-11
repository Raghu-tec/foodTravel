import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bananaleaf',
  templateUrl: './bananaleaf.component.html',
  styleUrls: ['./bananaleaf.component.css']
})
export class BananaleafComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  player: YT.Player;
  id: string = 'OqWsafUmzSE';
 
  savePlayer(player) {
    this.player = player;
    console.log('Video URL: ', player.getVideoUrl());
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
}

