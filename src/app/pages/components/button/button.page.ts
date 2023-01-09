import { Component, OnInit } from '@angular/core';

import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  //alert
  handlerMessage = '';
  roleMessage = '';

  constructor(
    public alertController: AlertController,
    public action: ActionSheetController
  ) { }

  ngOnInit() {
  }

  consoleLog() {
    console.log("Olá mundo!! ionic 6");
  }

  async alertDefault() {
    const alert = await this.alertController.create({
      header: 'Alert Default',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async multipleButton() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Cancelado';
            console.log("Foi cancelado!!");
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Confirmado';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `${role}`;
  }

  async promptOrLogin() {

    const alert = await this.alertController.create({
      header: 'LOGIN',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel!');
        }
      }, {
        text: 'Ok',
        cssClass: 'primary',
        handler: (form) => {
          console.log('Confirm OK!');
          console.log(form);
        }
      }],
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'Informe seu Email',
          /* attributes: {
            maxlength: 8,
          }, */
        },
        {
          name: 'senha',
          type: 'password',
          placeholder: 'Informe sua Senha',
          attributes: {
            maxlength: 8,
          },
        },
      ],
    });

    await alert.present();

  }


  //Action sheet exemplos
  async actionSheet() {
    const action = await this.action.create({
      header: 'Musica',
      buttons: [{
        text: 'Deletar',
        role: 'destructive',
        cssClass: 'secondary',
        icon: 'trash',
        handler: () => {
          console.log('trash');
        }
      }, {
        text: 'Share',
        icon: 'Share',
        handler: () => {
          console.log('share');
        }
      },
      {
        text: 'Play',
        icon: 'star',
        handler: () => {
          console.log('Play');
        }
      },
      {
        text: 'Close',
        icon: 'close', //close-outline
        handler: () => {
          console.log('Close');
        }
      }],
    });


    await action.present();
  }

}
