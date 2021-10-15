import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertCtrl: AlertController) { }


  async showAdd() {
    const alert = await this.alertCtrl.create({
      header: "O que deseja fazer?",
      inputs: [
        {
          name: 'task',
          type: 'text',
          placeholder: 'O que deseja fazer'

        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'danger',
          handler: () => {
            console.log('clicked cancel')
          }
        },
        {
          text: 'Adicionar',
          handler: (form)=> {
            //this.add(form.task)
            console.log(form)
          }
        }

      ]
    })
    await alert.present()
  }
}
