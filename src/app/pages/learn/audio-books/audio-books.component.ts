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
  displayAudiobook011 = "none";
  displayAudiobook012 = "none";
  displayAudiobook013 = "none";
  displayAudiobook014 = "none";
  displayAudiobook015 = "none";
  displayAudiobook016 = "none";
  displayAudiobook017 = "none";
  displayAudiobook018 = "none";
  displayAudiobook019 = "none";
  displayAudiobook020 = "none";
  displayAudiobook021 = "none";
  displayAudiobook022 = "none";
  displayAudiobook023 = "none";
  displayAudiobook024 = "none";
  displayAudiobook025 = "none";
  displayAudiobook026 = "none";
  displayAudiobook027 = "none";
  displayAudiobook028 = "none";
  displayAudiobook029 = "none";
  displayAudiobook030 = "none";

  ngOnInit() {
   }

  openModal(audiobook: any) {
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
      case "audiobook-011":
        this.displayAudiobook011 = "block";
        break;
      case "audiobook-012":
        this.displayAudiobook012 = "block";
        break;
      case "audiobook-013":
        this.displayAudiobook013 = "block";
        break;
      case "audiobook-014":
        this.displayAudiobook014 = "block";
        break;
      case "audiobook-015":
        this.displayAudiobook015 = "block";
        break;
      case "audiobook-016":
        this.displayAudiobook016 = "block";
        break;
      case "audiobook-017":
        this.displayAudiobook017 = "block";
        break;
      case "audiobook-018":
        this.displayAudiobook018 = "block";
        break;
      case "audiobook-019":
        this.displayAudiobook019 = "block";
        break;
      case "audiobook-020":
        this.displayAudiobook020 = "block";
        break;
      case "audiobook-021":
        this.displayAudiobook021 = "block";
        break;
      case "audiobook-022":
        this.displayAudiobook022 = "block";
        break;
      case "audiobook-023":
        this.displayAudiobook023 = "block";
        break;
      case "audiobook-024":
        this.displayAudiobook024 = "block";
        break;
      case "audiobook-025":
        this.displayAudiobook025 = "block";
        break;
      case "audiobook-026":
        this.displayAudiobook026 = "block";
        break;
      case "audiobook-027":
        this.displayAudiobook027 = "block";
        break;
      case "audiobook-028":
        this.displayAudiobook028 = "block";
        break;
      case "audiobook-029":
        this.displayAudiobook029 = "block";
        break;
      case "audiobook-030":
        this.displayAudiobook030 = "block";
        break;
    }
  }

  onCloseHandled(audiobook: any) {
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
      case "audiobook-011":
        this.displayAudiobook011 = "none";
        break;
      case "audiobook-012":
        this.displayAudiobook012 = "none";
        break;
      case "audiobook-013":
        this.displayAudiobook013 = "none";
        break;
      case "audiobook-014":
        this.displayAudiobook014 = "none";
        break;
      case "audiobook-015":
        this.displayAudiobook015 = "none";
        break;
      case "audiobook-016":
        this.displayAudiobook016 = "none";
        break;
      case "audiobook-017":
        this.displayAudiobook017 = "none";
        break;
      case "audiobook-018":
        this.displayAudiobook018 = "none";
        break;
      case "audiobook-019":
        this.displayAudiobook019 = "none";
        break;
      case "audiobook-020":
        this.displayAudiobook020 = "none";
        break;
      case "audiobook-021":
        this.displayAudiobook021 = "none";
        break;
      case "audiobook-022":
        this.displayAudiobook022 = "none";
        break;
      case "audiobook-023":
        this.displayAudiobook023 = "none";
        break;
      case "audiobook-024":
        this.displayAudiobook024 = "none";
        break;
      case "audiobook-025":
        this.displayAudiobook025 = "none";
        break;
      case "audiobook-026":
        this.displayAudiobook026 = "none";
        break;
      case "audiobook-027":
        this.displayAudiobook027 = "none";
        break;
      case "audiobook-028":
        this.displayAudiobook028 = "none";
        break;
      case "audiobook-029":
        this.displayAudiobook029 = "none";
        break;
      case "audiobook-030":
        this.displayAudiobook030 = "none";
        break;
    }
  }


  audiobookList = [
    {
      title: "Ultimate Getting Started with Japanese 1.1",
      assignedConstructor: "audiobook-001",
      assignedDisplay: this.displayAudiobook001,
      img: "audiobook-thumbnail-01.png",
      audioCounts: "100",
      iFrameSrc: "https://audiomack.com/embed/kopanique/album/ultimate-getting-started-with-japanese"
    },
    {
      title: "Ultimate Getting Started with Japanese 1.2",
      assignedConstructor: "audiobook-002",
      assignedDisplay: this.displayAudiobook002,
      img: "audiobook-thumbnail-01.png",
      audioCounts: "9",
      iFrameSrc: "https://audiomack.com/embed/kopanique/album/ultimate-getting-started-with-japanese"
    },
    {
      title: "Ultimate Getting Started - Gengo Appendices 1.1",
      assignedConstructor: "audiobook-003",
      assignedDisplay: this.displayAudiobook003,
      img: "audiobook-thumbnail-05.png",
      audioCounts: "10",
      iFrameSrc: "https://audiomack.com/embed/kopanique/album/ultimate-getting-started-with-japanese"
    },
    {
      title: "Ultimate Getting Started - Gengo Appendices 1.2",
      assignedConstructor: "audiobook-004",
      assignedDisplay: this.displayAudiobook004,
      img: "audiobook-thumbnail-05.png",
      audioCounts: "12",
      iFrameSrc: "https://audiomack.com/embed/kopanique/album/ultimate-getting-started-with-japanese"
    },
    {
      title: "Ultimate Getting Started - Gengo Japanese",
      assignedConstructor: "audiobook-005",
      assignedDisplay: this.displayAudiobook005,
      img: "audiobook-thumbnail-05.png",
      audioCounts: "60",
      iFrameSrc: "https://audiomack.com/embed/kopanique/album/ultimate-getting-started-with-japanese"
    },
    {
      title: "Ultimate Getting Started - Japanese Conjugation",
      assignedConstructor: "audiobook-006",
      assignedDisplay: this.displayAudiobook006,
      img: "audiobook-thumbnail-05.png",
      audioCounts: "10",
      iFrameSrc: "https://audiomack.com/embed/kopanique/album/ultimate-getting-started-with-japanese"
    },
    {
      title: "Japanese Level 01",
      assignedConstructor: "audiobook-007",
      assignedDisplay: this.displayAudiobook007,
      img: "audiobook-thumbnail-02.png",
      audioCounts: "27",
      iFrameSrc: "https://audiomack.com/embed/kopanique/album/ultimate-getting-started-with-japanese"
    },
    {
      title: "Japanese Level 02",
      assignedConstructor: "audiobook-008",
      assignedDisplay: this.displayAudiobook008,
      img: "audiobook-thumbnail-03.png",
      audioCounts: "27",
      iFrameSrc: "https://audiomack.com/embed/kopanique/album/ultimate-getting-started-with-japanese"
    },
    {
      title: "Japanese Level 03",
      assignedConstructor: "audiobook-009",
      assignedDisplay: this.displayAudiobook009,
      img: "audiobook-thumbnail-04.png",
      audioCounts: "49",
      iFrameSrc: "https://audiomack.com/embed/kopanique/album/ultimate-getting-started-with-japanese"
    },
    {
      title: "Conversational Phrases Japanese Level 1 - Absolute Beginner",
      assignedConstructor: "audiobook-010",
      assignedDisplay: this.displayAudiobook010,
      img: "audiobook-thumbnail-06.png",
      audioCounts: "26",
      iFrameSrc: "https://audiomack.com/embed/kopanique/album/ultimate-getting-started-with-japanese"
    },
    {
      title: "Japanese Absolute Beginner 2 - Full Lessons",
      assignedConstructor: "audiobook-011",
      assignedDisplay: this.displayAudiobook011,
      img: "audiobook-thumbnail-07.png",
      audioCounts: "27",
      iFrameSrc: "https://audiomack.com/embed/kopanique/album/ultimate-getting-started-with-japanese"
    },
    {
      title: "Japanese Absolute Beginner 2 - Individual Lesson Dialogs",
      assignedConstructor: "audiobook-012",
      assignedDisplay: this.displayAudiobook012,
      img: "audiobook-thumbnail-07.png",
      audioCounts: "25",
      iFrameSrc: "https://audiomack.com/embed/kopanique/album/ultimate-getting-started-with-japanese"
    },
    {
      title: "Japanese Absolute Beginner 2 - Individual Lesson Reviews",
      assignedConstructor: "audiobook-013",
      assignedDisplay: this.displayAudiobook013,
      img: "audiobook-thumbnail-07.png",
      audioCounts: "25",
      iFrameSrc: "https://audiomack.com/embed/kopanique/album/ultimate-getting-started-with-japanese"
    },
    {
      title: "Japanese Level 2 - Absolute Beginner Japanese Volume 2",
      assignedConstructor: "audiobook-014",
      assignedDisplay: this.displayAudiobook014,
      img: "audiobook-thumbnail-07.png",
      audioCounts: "29",
      iFrameSrc: "https://audiomack.com/embed/kopanique/album/japanese-level-2-absolute-beginner-japanese-volume-2"
    },
    {
      title: "Japanese Level 2 - Absolute Beginner Japanese Volume 3",
      assignedConstructor: "audiobook-015",
      assignedDisplay: this.displayAudiobook015,
      img: "audiobook-thumbnail-07.png",
      audioCounts: "76",
      iFrameSrc: "https://audiomack.com/embed/kopanique/album/japanese-level-2-absolute-beginner-japanese-volume-3"
    },
    {
      title: "Japanese Level 2 - Absolute Beginner Japanese Volume 4",
      assignedConstructor: "audiobook-016",
      assignedDisplay: this.displayAudiobook016,
      img: "audiobook-thumbnail-07.png",
      audioCounts: "25",
      iFrameSrc: "https://audiomack.com/embed/kopanique/album/japanese-level-2-absolute-beginner-japanese-volume-4"
    },
    {
      title: "Japanese Level 4 - Beginner Japanese Volume 1",
      assignedConstructor: "audiobook-017",
      assignedDisplay: this.displayAudiobook017,
      img: "audiobook-thumbnail-08.png",
      audioCounts: "54",
      iFrameSrc: "https://audiomack.com/embed/kopanique/album/japanese-level-4-beginner-japanese-volume-1-2"
    },
    {
      title: "Japanese Level 4 - Beginner Japanese Volume 2",
      assignedConstructor: "audiobook-018",
      assignedDisplay: this.displayAudiobook018,
      img: "audiobook-thumbnail-08.png",
      audioCounts: "27",
      iFrameSrc: "https://audiomack.com/embed/kopanique/album/japanese-level-4-beginner-japanese-volume-2"
    },
    {
      title: "Japanese Level 5 - Upper Beginner Japanese Volume 1",
      assignedConstructor: "audiobook-019",
      assignedDisplay: this.displayAudiobook019,
      img: "audiobook-thumbnail-09.png",
      audioCounts: "29",
      iFrameSrc: "https://audiomack.com/embed/kopanique/album/japanese-level-5-upper-beginner-japanese-volume-1"
    },
    {
      title: "Japanese Level 6 - Lower Intermediate Japanese Volume 2",
      assignedConstructor: "audiobook-020",
      assignedDisplay: this.displayAudiobook020,
      img: "audiobook-thumbnail-10.png",
      audioCounts: "28",
      iFrameSrc: "https://audiomack.com/embed/kopanique/album/japanese-level-6-lower-intermediate-japanese-volume-2"
    },
    {
      title: "Japanese Level 6 - Lower Intermediate Japanese Volume 3",
      assignedConstructor: "audiobook-021",
      assignedDisplay: this.displayAudiobook021,
      img: "audiobook-thumbnail-10.png",
      audioCounts: "76",
      iFrameSrc: "https://audiomack.com/embed/kopanique/album/japanese-level-6-lower-intermediate-japanese-volume-3"
    }

  ];


}
