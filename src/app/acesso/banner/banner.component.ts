import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/core/';
import {Imagem} from './imagem.model'


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations:[
    trigger('banner',[
      state('escondido',style({      
        opacity:0
      })),
      state('visivel',style({
        opacity:1
      })),
      transition('escondido <=> visivel',animate('1s ease-in')), // <=> funciona de um lado para outro, assim nos 
                                                                        //possilitando usar esse trecho de 
                                                                        //código para os dois 
                                                                        //tipos de transação
     

    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado:string = 'escondido'
  public imagens:Imagem[] = [
    {estado:'escondido',url:'/assets/banner-acesso/img_1.png' },
    {estado:'escondido',url:'/assets/banner-acesso/img_2.png' },
    {estado:'visivel',url:'/assets/banner-acesso/img_3.png' },
    {estado:'escondido',url:'/assets/banner-acesso/img_4.png' },
    {estado:'escondido',url:'/assets/banner-acesso/img_5.png' }
  ]

  constructor() { }

  ngOnInit() {
    console.log(this.imagens)
  }
  
  public toogleEstadoAnimacao():void{
    this.estado = this.estado ==='visivel'?'escondido':'visivel'
  }
}
