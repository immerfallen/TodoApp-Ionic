import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  tasks: any[] = []

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController) { }


  async showAdd() {
    const alert = await this.alertCtrl.create({
      header: "O que deseja fazer?",
      inputs: [
        {
          name: 'newTask',
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
          handler: (form) => {
            this.add(form.newTask)
            console.log(form)
          }
        }

      ]
    })
    await alert.present()
  }

  async add(newTask: string) {
    //valida se usuário preencheu a task
    if (newTask.trim().length < 1) {
      const toast = await this.toastCtrl.create({
        message: 'Informe o que deseja fazer!',
        duration: 2000,
        position: 'top'
      })
      toast.present()
      return
    }
    let task = {name: newTask, done: false}

    this.tasks.push(task)
    this.updateLocalStorage()
  }
  updateLocalStorage(){
    localStorage.setItem('taskDb', JSON.stringify(this.tasks))
  }
}
