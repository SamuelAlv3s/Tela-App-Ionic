import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon, IonButton, IonItem, IonAvatar, IonLabel, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { barbellOutline, notifications, accessibility, trophy, addCircleOutline } from 'ionicons/icons';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon, IonButton, IonItem, IonAvatar, IonLabel, IonText, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FolderPage {
  constructor() {
    addIcons({ barbellOutline, notifications, accessibility, trophy, addCircleOutline });
  }
}
