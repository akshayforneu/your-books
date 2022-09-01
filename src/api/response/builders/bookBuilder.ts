import Book from "../../../models/Book";

export class BookBuilder {
  private data: any = {
    kind: "books#volume",
    id: "eq9XvgAACAAJ",
    etag: "lTzSrQHxSZ8",
    selfLink: "https://www.googleapis.com/books/v1/volumes/eq9XvgAACAAJ",
    volumeInfo: {
      title:
        "Fantastic Beasts and Where to Find Them: Cinematic Guide: Newt Scamander Do Not Feed Out",
      authors: ["Felicity Baker"],
      publishedDate: "2017-02-02",
      description:
        "The essential film companion for Newt Scamander! Relive the magic of Newt's world with this hardback guidebook featuring your favourite scenes and quotes from Fantastic Beasts and Where to Find Them.",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "1407179403",
        },
        {
          type: "ISBN_13",
          identifier: "9781407179407",
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 64,
      printType: "BOOK",
      averageRating: 3,
      ratingsCount: 2,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "preview-1.0.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.co.in/books?id=eq9XvgAACAAJ&dq=Harry+Potter&hl=&cd=1&source=gbs_api",
      infoLink:
        "http://books.google.co.in/books?id=eq9XvgAACAAJ&dq=Harry+Potter&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/Fantastic_Beasts_and_Where_to_Find_Them.html?hl=&id=eq9XvgAACAAJ",
    },
    saleInfo: {
      country: "IN",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "IN",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=eq9XvgAACAAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "Relive all the magic of Newt&#39;s world with this hardback guidebook featuring all you need to know about Newt from the movie.",
    },
  };
  withId(id: string) {
    this.data.id = id;
    return this;
  }
  withVolumeInfo(info: any) {
    this.data.volumeInfo = info;
    return this;
  }
  build() {
    return this.data;
  }
}
