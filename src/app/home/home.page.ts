import { Component, OnInit } from '@angular/core';
import { Platform, ToastController, NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';
  isSupported = false;
  barcodes: Barcode[] = [];

  constructor(
    private platform: Platform,
    private navCtrl: NavController,
    private router: Router,
    private toastCtrl: ToastController,
    private alertController: AlertController
  ) {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
    }
  }

  async ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permiso Denegado',
      message: 'Por favor autorice el acceso a la cámara para poder escanear códigos.',
      buttons: ['OK'],
    });
    await alert.present();
  }
  goToLoginPage() {
    this.router.navigate(['/login']);
  }

}
