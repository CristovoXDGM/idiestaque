
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MegaMan1Page } from '../mega-man1/mega-man1';

@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html'
})
export class SobrePage {

  jogos  =  [{
    id:1,
    jogo:'MegaMan 1 ',
    descricao:"Clique aqui para ver mais",
    img:"./assets/img/21ZacaLRvi8itLTrTNMA_8bit_mega_man_1_20276_6496_thumb_9812.png"

  },
  {
    id:2,
    jogo:'MegaMan 2 ',
    descricao:"Clique aqui para ver mais",
    img:"./assets/img/21ZacaLRvi8itLTrTNMA_8bit_mega_man_1_20276_6496_thumb_9812.png"
  },
  {
    id:3,
    jogo:'MegaMan 3 ',
    descricao:"Clique aqui para ver mais",
    img:"./assets/img/21ZacaLRvi8itLTrTNMA_8bit_mega_man_1_20276_6496_thumb_9812.png"
  },
  {
    id:4,
    jogo:'MegaMan 4 ',
    descricao:"Clique aqui para ver mais",
    img:"./assets/img/21ZacaLRvi8itLTrTNMA_8bit_mega_man_1_20276_6496_thumb_9812.png"
  }

];
  
  constructor(public navCtrl: NavController) {

    

  }
  goToMegaMan1(jogo){

    if(jogo == 1){
      this.navCtrl.push(MegaMan1Page);
    }

  }
}
