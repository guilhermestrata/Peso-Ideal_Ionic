import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  resHomem:number=0;
  resMulher:number=0;
  altura:string='';
  radioSelecionada: string="";

  constructor(public toastController: ToastController, public alertController: AlertController) {}

  verificarRadio(){
    this.exibirAlerta();
    this.pesoH();
    this.pesoM();

  }

  pesoH(){
    if(this.radioSelecionada == "Homem"){
      this.resHomem = 72.7*parseFloat(this.altura)-58;
    }
  }
  pesoM(){
    if(this.radioSelecionada == "Mulher"){
      this.resMulher = 62.1*parseFloat(this.altura)-44.7;
    }
  }

  async exibirAlerta(){
    const alerta = await this.alertController.create({
      header: this.radioSelecionada,
      subHeader:"Seu peso ideal é:",
      message: String(this.resHomem ),
      buttons:["Ok"]
    });
    alerta.present();
  }}
