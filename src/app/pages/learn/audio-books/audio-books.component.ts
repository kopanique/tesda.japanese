import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-books',
  templateUrl: './audio-books.component.html',
  styleUrl: './audio-books.component.css'
})
export class AudioBooksComponent implements OnInit {

  displayAudiobook001 = "none";
  displayAudiobook002 = "none";
  displayAudiobook003 = "none";
  displayAudiobook004 = "none";
  displayAudiobook005 = "none";
  displayAudiobook006 = "none";
  displayAudiobook007 = "none";
  displayAudiobook008 = "none";
  displayAudiobook009 = "none";
  displayAudiobook010 = "none";

  ngOnInit() {
   }

  openModal(audiobook: string) {
    switch(audiobook) {
      case "audiobook-001":
        this.displayAudiobook001 = "block";
        break;
      case "audiobook-002":
        this.displayAudiobook002 = "block";
        break;
      case "audiobook-003":
        this.displayAudiobook003 = "block";
        break;
      case "audiobook-004":
        this.displayAudiobook004 = "block";
        break;
      case "audiobook-005":
        this.displayAudiobook005 = "block";
        break;
      case "audiobook-006":
        this.displayAudiobook006 = "block";
        break;
      case "audiobook-007":
        this.displayAudiobook007 = "block";
        break;
      case "audiobook-008":
        this.displayAudiobook008 = "block";
        break;
      case "audiobook-009":
        this.displayAudiobook009 = "block";
        break;
      case "audiobook-010":
        this.displayAudiobook010 = "block";
        break;
    }
  }

  onCloseHandled(audiobook: string) {
    switch(audiobook) {
      case "audiobook-001":
        this.displayAudiobook001 = "none";
        break;
      case "audiobook-002":
        this.displayAudiobook002 = "none";
        break;
      case "audiobook-003":
        this.displayAudiobook003 = "none";
        break;
      case "audiobook-004":
        this.displayAudiobook004 = "none";
        break;
      case "audiobook-005":
        this.displayAudiobook005 = "none";
        break;
      case "audiobook-006":
        this.displayAudiobook006 = "none";
        break;
      case "audiobook-007":
        this.displayAudiobook007 = "none";
        break;
      case "audiobook-008":
        this.displayAudiobook008 = "none";
        break;
      case "audiobook-009":
        this.displayAudiobook009 = "none";
        break;
      case "audiobook-010":
        this.displayAudiobook010 = "none";
        break;
    }
  }
}
