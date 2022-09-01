import { bookDetails } from "../../../types/storeType"
import {BookInfoResponse} from "../../../api/BooksInfoResponseTypes"
const NoImage=`http://books.google.com/books/content?id=WV3FngEACAAJ&printsec=frontcover&img=2&zoom=9&source=gbs_api`
   
export const bookApiGood: BookInfoResponse = {
    "kind": "books#volume",
    "id": "eq9XvgAACAAJ",
    "etag": "JdrxCxfiFWo",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/eq9XvgAACAAJ",
    "volumeInfo": {
      "title": "Fantastic Beasts and Where to Find Them",
      "authors": [
        "Felicity Baker",
        "J. K. Rowling"
      ],
      "publisher": "Scholastic",
      "publishedDate": "2017-02-02",
      "description": "An approved textbook at Hogwarts School of Witchcraft and Wizardry since publication, Newt Scamander's masterpiece has entertained wizarding families through the generations. Fantastic Beasts and Where to Find Them is an indispensable introduction to the magical beasts of the wizarding world.",
      "industryIdentifiers": [
        {
          "type": "ISBN_10",
          "identifier": "1407179403"
        },
        {
          "type": "ISBN_13",
          "identifier": "9781407179407"
        }
      ],
      "readingModes": {
        "text": false,
        "image": false
      },
      "pageCount": 64,
      "printedPageCount": 64,
      "dimensions": {
        "height": "22.70 cm",
        "width": "15.70 cm",
        "thickness": "1.10 cm"
      },
      "printType": "BOOK",
      "averageRating": 4,
      "ratingsCount": 78,
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": false,
      "contentVersion": "preview-1.0.0",
      "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
      },
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE72GAREQikG8fvC_Q7iucOkea6xNOCsJJr5K0yC5T55vQeq7opNNcMIH1yCvoALkjMUcs3-Vfp1Y--7lIkluoxFm0OqrSq1NbL5ZdnntCJ6ht28S6RwmmaysZdzhvMQga61qJtjf&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73cRZ2VyoDpldO4i6PWKUNLN9KZe5vgycgw6hBR2xZ2ure8LZVF2uABsfciLc7t3O4hZR382qdFTD2gRKFFm-jmYA1jlFJxTRXxz8eHDVNNk_J76X0qWpWhaZPHtVHN5N9x0b98&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.co.in/books?id=eq9XvgAACAAJ&hl=&source=gbs_api",
      "infoLink": "https://play.google.com/store/books/details?id=eq9XvgAACAAJ&source=gbs_api",
      "canonicalVolumeLink": "https://play.google.com/store/books/details?id=eq9XvgAACAAJ"
    },
    "saleInfo": {
      "country": "IN",
      "saleability": "NOT_FOR_SALE",
      "isEbook": false
    },
    "accessInfo": {
      "country": "IN",
      "viewability": "NO_PAGES",
      "embeddable": false,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
        "isAvailable": false
      },
      "pdf": {
        "isAvailable": false
      },
      "webReaderLink": "http://play.google.com/books/reader?id=eq9XvgAACAAJ&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "NONE",
      "quoteSharingAllowed": false
    }
  }

  export const bookTransformerGood:bookDetails={
    "id":"eq9XvgAACAAJ",
    "title": "Fantastic Beasts and Where to Find Them",
    "thumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73cRZ2VyoDpldO4i6PWKUNLN9KZe5vgycgw6hBR2xZ2ure8LZVF2uABsfciLc7t3O4hZR382qdFTD2gRKFFm-jmYA1jlFJxTRXxz8eHDVNNk_J76X0qWpWhaZPHtVHN5N9x0b98&source=gbs_api",
     "author": "Felicity Baker",
     "publishedDate": "2017-02-02",
     isbn_no: "1407179403",
     "pageCount":64,
     "description": "An approved textbook at Hogwarts School of Witchcraft and Wizardry since publication, Newt Scamander's masterpiece has entertained wizarding families through the generations. Fantastic Beasts and Where to Find Them is an indispensable introduction to the magical beasts of the wizarding world.",
    }
  
export const bookApiNoThumbnail: BookInfoResponse = {
  "kind": "books#volume",
  "id": "eq9XvgAACAAJ",
  "etag": "JdrxCxfiFWo",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/eq9XvgAACAAJ",
  "volumeInfo": {
    "title": "Fantastic Beasts and Where to Find Them",
    "authors": [
      "Felicity Baker",
      "J. K. Rowling"
    ],
    "publisher": "Scholastic",
    "publishedDate": "2017-02-02",
    "description": "An approved textbook at Hogwarts School of Witchcraft and Wizardry since publication, Newt Scamander's masterpiece has entertained wizarding families through the generations. Fantastic Beasts and Where to Find Them is an indispensable introduction to the magical beasts of the wizarding world.",
    "industryIdentifiers": [
      {
        "type": "ISBN_10",
        "identifier": "1407179403"
      },
      {
        "type": "ISBN_13",
        "identifier": "9781407179407"
      }
    ],
    "readingModes": {
      "text": false,
      "image": false
    },
    "pageCount": 64,
    "printedPageCount": 64,
    "dimensions": {
      "height": "22.70 cm",
      "width": "15.70 cm",
      "thickness": "1.10 cm"
    },
    "printType": "BOOK",
    "averageRating": 4,
    "ratingsCount": 78,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
    },
    "language": "en",
    "previewLink": "http://books.google.co.in/books?id=eq9XvgAACAAJ&hl=&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=eq9XvgAACAAJ&source=gbs_api",
    "canonicalVolumeLink": "https://play.google.com/store/books/details?id=eq9XvgAACAAJ"
  },
  "saleInfo": {
    "country": "IN",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
  },
  "accessInfo": {
    "country": "IN",
    "viewability": "NO_PAGES",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
      "isAvailable": false
    },
    "pdf": {
      "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=eq9XvgAACAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "NONE",
    "quoteSharingAllowed": false
  }
}

export const bookTransformerNoThumbnail:bookDetails={
  "id":"eq9XvgAACAAJ",
  "title": "Fantastic Beasts and Where to Find Them",
  "thumbnail": NoImage,
   "author": "Felicity Baker",
   "publishedDate": "2017-02-02",
   isbn_no: "1407179403",
   "pageCount":64,
   "description": "An approved textbook at Hogwarts School of Witchcraft and Wizardry since publication, Newt Scamander's masterpiece has entertained wizarding families through the generations. Fantastic Beasts and Where to Find Them is an indispensable introduction to the magical beasts of the wizarding world.",
  }
  
export const bookApiNoAuthor: BookInfoResponse = {
  "kind": "books#volume",
  "id": "eq9XvgAACAAJ",
  "etag": "JdrxCxfiFWo",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/eq9XvgAACAAJ",
  "volumeInfo": {
    "title": "Fantastic Beasts and Where to Find Them",
    "publisher": "Scholastic",
    "publishedDate": "2017-02-02",
    "description": "An approved textbook at Hogwarts School of Witchcraft and Wizardry since publication, Newt Scamander's masterpiece has entertained wizarding families through the generations. Fantastic Beasts and Where to Find Them is an indispensable introduction to the magical beasts of the wizarding world.",
    "industryIdentifiers": [
      {
        "type": "ISBN_10",
        "identifier": "1407179403"
      },
      {
        "type": "ISBN_13",
        "identifier": "9781407179407"
      }
    ],
    "readingModes": {
      "text": false,
      "image": false
    },
    "pageCount": 64,
    "printedPageCount": 64,
    "dimensions": {
      "height": "22.70 cm",
      "width": "15.70 cm",
      "thickness": "1.10 cm"
    },
    "printType": "BOOK",
    "averageRating": 4,
    "ratingsCount": 78,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
    },
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE72GAREQikG8fvC_Q7iucOkea6xNOCsJJr5K0yC5T55vQeq7opNNcMIH1yCvoALkjMUcs3-Vfp1Y--7lIkluoxFm0OqrSq1NbL5ZdnntCJ6ht28S6RwmmaysZdzhvMQga61qJtjf&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73cRZ2VyoDpldO4i6PWKUNLN9KZe5vgycgw6hBR2xZ2ure8LZVF2uABsfciLc7t3O4hZR382qdFTD2gRKFFm-jmYA1jlFJxTRXxz8eHDVNNk_J76X0qWpWhaZPHtVHN5N9x0b98&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.co.in/books?id=eq9XvgAACAAJ&hl=&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=eq9XvgAACAAJ&source=gbs_api",
    "canonicalVolumeLink": "https://play.google.com/store/books/details?id=eq9XvgAACAAJ"
  },
  "saleInfo": {
    "country": "IN",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
  },
  "accessInfo": {
    "country": "IN",
    "viewability": "NO_PAGES",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
      "isAvailable": false
    },
    "pdf": {
      "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=eq9XvgAACAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "NONE",
    "quoteSharingAllowed": false
  }
}

export const bookTransformerNoAuthors:bookDetails={
  "id":"eq9XvgAACAAJ",
  "title": "Fantastic Beasts and Where to Find Them",
  "thumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73cRZ2VyoDpldO4i6PWKUNLN9KZe5vgycgw6hBR2xZ2ure8LZVF2uABsfciLc7t3O4hZR382qdFTD2gRKFFm-jmYA1jlFJxTRXxz8eHDVNNk_J76X0qWpWhaZPHtVHN5N9x0b98&source=gbs_api",
   "author": "Un Known",
   "publishedDate": "2017-02-02",
   isbn_no: "1407179403",
   "pageCount":64,
   "description": "An approved textbook at Hogwarts School of Witchcraft and Wizardry since publication, Newt Scamander's masterpiece has entertained wizarding families through the generations. Fantastic Beasts and Where to Find Them is an indispensable introduction to the magical beasts of the wizarding world.",
  }
  
export const bookApiNoPublishedDate: BookInfoResponse = {
  "kind": "books#volume",
  "id": "eq9XvgAACAAJ",
  "etag": "JdrxCxfiFWo",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/eq9XvgAACAAJ",
  "volumeInfo": {
    "title": "Fantastic Beasts and Where to Find Them",
    "authors": [
      "Felicity Baker",
      "J. K. Rowling"
    ],
    "publisher": "Scholastic",
    "description": "An approved textbook at Hogwarts School of Witchcraft and Wizardry since publication, Newt Scamander's masterpiece has entertained wizarding families through the generations. Fantastic Beasts and Where to Find Them is an indispensable introduction to the magical beasts of the wizarding world.",
    "industryIdentifiers": [
      {
        "type": "ISBN_10",
        "identifier": "1407179403"
      },
      {
        "type": "ISBN_13",
        "identifier": "9781407179407"
      }
    ],
    "readingModes": {
      "text": false,
      "image": false
    },
    "pageCount": 64,
    "printedPageCount": 64,
    "dimensions": {
      "height": "22.70 cm",
      "width": "15.70 cm",
      "thickness": "1.10 cm"
    },
    "printType": "BOOK",
    "averageRating": 4,
    "ratingsCount": 78,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
    },
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE72GAREQikG8fvC_Q7iucOkea6xNOCsJJr5K0yC5T55vQeq7opNNcMIH1yCvoALkjMUcs3-Vfp1Y--7lIkluoxFm0OqrSq1NbL5ZdnntCJ6ht28S6RwmmaysZdzhvMQga61qJtjf&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73cRZ2VyoDpldO4i6PWKUNLN9KZe5vgycgw6hBR2xZ2ure8LZVF2uABsfciLc7t3O4hZR382qdFTD2gRKFFm-jmYA1jlFJxTRXxz8eHDVNNk_J76X0qWpWhaZPHtVHN5N9x0b98&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.co.in/books?id=eq9XvgAACAAJ&hl=&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=eq9XvgAACAAJ&source=gbs_api",
    "canonicalVolumeLink": "https://play.google.com/store/books/details?id=eq9XvgAACAAJ"
  },
  "saleInfo": {
    "country": "IN",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
  },
  "accessInfo": {
    "country": "IN",
    "viewability": "NO_PAGES",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
      "isAvailable": false
    },
    "pdf": {
      "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=eq9XvgAACAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "NONE",
    "quoteSharingAllowed": false
  }
}

export const bookTransformerNoPublishedDate:bookDetails={
  "id":"eq9XvgAACAAJ",
  "title": "Fantastic Beasts and Where to Find Them",
  "thumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73cRZ2VyoDpldO4i6PWKUNLN9KZe5vgycgw6hBR2xZ2ure8LZVF2uABsfciLc7t3O4hZR382qdFTD2gRKFFm-jmYA1jlFJxTRXxz8eHDVNNk_J76X0qWpWhaZPHtVHN5N9x0b98&source=gbs_api",
   "author": "Felicity Baker",
   "publishedDate": "Not Available",
   isbn_no: "1407179403",
   "pageCount":64,
   "description": "An approved textbook at Hogwarts School of Witchcraft and Wizardry since publication, Newt Scamander's masterpiece has entertained wizarding families through the generations. Fantastic Beasts and Where to Find Them is an indispensable introduction to the magical beasts of the wizarding world.",
  }
  
export const bookApiNoIsbn: BookInfoResponse = {
  "kind": "books#volume",
  "id": "eq9XvgAACAAJ",
  "etag": "JdrxCxfiFWo",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/eq9XvgAACAAJ",
  "volumeInfo": {
    "title": "Fantastic Beasts and Where to Find Them",
    "authors": [
      "Felicity Baker",
      "J. K. Rowling"
    ],
    "publisher": "Scholastic",
    "publishedDate": "2017-02-02",
    "description": "An approved textbook at Hogwarts School of Witchcraft and Wizardry since publication, Newt Scamander's masterpiece has entertained wizarding families through the generations. Fantastic Beasts and Where to Find Them is an indispensable introduction to the magical beasts of the wizarding world.",
    "readingModes": {
      "text": false,
      "image": false
    },
    "pageCount": 64,
    "printedPageCount": 64,
    "dimensions": {
      "height": "22.70 cm",
      "width": "15.70 cm",
      "thickness": "1.10 cm"
    },
    "printType": "BOOK",
    "averageRating": 4,
    "ratingsCount": 78,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
    },
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE72GAREQikG8fvC_Q7iucOkea6xNOCsJJr5K0yC5T55vQeq7opNNcMIH1yCvoALkjMUcs3-Vfp1Y--7lIkluoxFm0OqrSq1NbL5ZdnntCJ6ht28S6RwmmaysZdzhvMQga61qJtjf&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73cRZ2VyoDpldO4i6PWKUNLN9KZe5vgycgw6hBR2xZ2ure8LZVF2uABsfciLc7t3O4hZR382qdFTD2gRKFFm-jmYA1jlFJxTRXxz8eHDVNNk_J76X0qWpWhaZPHtVHN5N9x0b98&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.co.in/books?id=eq9XvgAACAAJ&hl=&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=eq9XvgAACAAJ&source=gbs_api",
    "canonicalVolumeLink": "https://play.google.com/store/books/details?id=eq9XvgAACAAJ"
  },
  "saleInfo": {
    "country": "IN",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
  },
  "accessInfo": {
    "country": "IN",
    "viewability": "NO_PAGES",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
      "isAvailable": false
    },
    "pdf": {
      "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=eq9XvgAACAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "NONE",
    "quoteSharingAllowed": false
  }
}

export const bookTransformerNoIsbn:bookDetails={
  "id":"eq9XvgAACAAJ",
  "title": "Fantastic Beasts and Where to Find Them",
  "thumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73cRZ2VyoDpldO4i6PWKUNLN9KZe5vgycgw6hBR2xZ2ure8LZVF2uABsfciLc7t3O4hZR382qdFTD2gRKFFm-jmYA1jlFJxTRXxz8eHDVNNk_J76X0qWpWhaZPHtVHN5N9x0b98&source=gbs_api",
   "author": "Felicity Baker",
   "publishedDate": "2017-02-02",
   isbn_no: "not available",
   "pageCount":64,
   "description": "An approved textbook at Hogwarts School of Witchcraft and Wizardry since publication, Newt Scamander's masterpiece has entertained wizarding families through the generations. Fantastic Beasts and Where to Find Them is an indispensable introduction to the magical beasts of the wizarding world.",
  }
  
export const bookApiNoPageCount: BookInfoResponse = {
  "kind": "books#volume",
  "id": "eq9XvgAACAAJ",
  "etag": "JdrxCxfiFWo",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/eq9XvgAACAAJ",
  "volumeInfo": {
    "title": "Fantastic Beasts and Where to Find Them",
    "authors": [
      "Felicity Baker",
      "J. K. Rowling"
    ],
    "publisher": "Scholastic",
    "publishedDate": "2017-02-02",
    "description": "An approved textbook at Hogwarts School of Witchcraft and Wizardry since publication, Newt Scamander's masterpiece has entertained wizarding families through the generations. Fantastic Beasts and Where to Find Them is an indispensable introduction to the magical beasts of the wizarding world.",
    "industryIdentifiers": [
      {
        "type": "ISBN_10",
        "identifier": "1407179403"
      },
      {
        "type": "ISBN_13",
        "identifier": "9781407179407"
      }
    ],
    "readingModes": {
      "text": false,
      "image": false
    },
    "printedPageCount": 64,
    "dimensions": {
      "height": "22.70 cm",
      "width": "15.70 cm",
      "thickness": "1.10 cm"
    },
    "printType": "BOOK",
    "averageRating": 4,
    "ratingsCount": 78,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
    },
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE72GAREQikG8fvC_Q7iucOkea6xNOCsJJr5K0yC5T55vQeq7opNNcMIH1yCvoALkjMUcs3-Vfp1Y--7lIkluoxFm0OqrSq1NbL5ZdnntCJ6ht28S6RwmmaysZdzhvMQga61qJtjf&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73cRZ2VyoDpldO4i6PWKUNLN9KZe5vgycgw6hBR2xZ2ure8LZVF2uABsfciLc7t3O4hZR382qdFTD2gRKFFm-jmYA1jlFJxTRXxz8eHDVNNk_J76X0qWpWhaZPHtVHN5N9x0b98&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.co.in/books?id=eq9XvgAACAAJ&hl=&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=eq9XvgAACAAJ&source=gbs_api",
    "canonicalVolumeLink": "https://play.google.com/store/books/details?id=eq9XvgAACAAJ"
  },
  "saleInfo": {
    "country": "IN",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
  },
  "accessInfo": {
    "country": "IN",
    "viewability": "NO_PAGES",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
      "isAvailable": false
    },
    "pdf": {
      "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=eq9XvgAACAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "NONE",
    "quoteSharingAllowed": false
  }
}

export const bookTransformerNoPageCount:bookDetails={
  "id":"eq9XvgAACAAJ",
  "title": "Fantastic Beasts and Where to Find Them",
  "thumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73cRZ2VyoDpldO4i6PWKUNLN9KZe5vgycgw6hBR2xZ2ure8LZVF2uABsfciLc7t3O4hZR382qdFTD2gRKFFm-jmYA1jlFJxTRXxz8eHDVNNk_J76X0qWpWhaZPHtVHN5N9x0b98&source=gbs_api",
   "author": "Felicity Baker",
   "publishedDate": "2017-02-02",
   isbn_no: "1407179403",
   "pageCount":0,
   "description": "An approved textbook at Hogwarts School of Witchcraft and Wizardry since publication, Newt Scamander's masterpiece has entertained wizarding families through the generations. Fantastic Beasts and Where to Find Them is an indispensable introduction to the magical beasts of the wizarding world.",
  }


  export const bookApiNoDescription: BookInfoResponse = {
    "kind": "books#volume",
    "id": "eq9XvgAACAAJ",
    "etag": "JdrxCxfiFWo",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/eq9XvgAACAAJ",
    "volumeInfo": {
      "title": "Fantastic Beasts and Where to Find Them",
      "authors": [
        "Felicity Baker",
        "J. K. Rowling"
      ],
      "publisher": "Scholastic",
      "publishedDate": "2017-02-02",
       "industryIdentifiers": [
        {
          "type": "ISBN_10",
          "identifier": "1407179403"
        },
        {
          "type": "ISBN_13",
          "identifier": "9781407179407"
        }
      ],
      "readingModes": {
        "text": false,
        "image": false
      },
      "pageCount": 64,
      "printedPageCount": 64,
      "dimensions": {
        "height": "22.70 cm",
        "width": "15.70 cm",
        "thickness": "1.10 cm"
      },
      "printType": "BOOK",
      "averageRating": 4,
      "ratingsCount": 78,
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": false,
      "contentVersion": "preview-1.0.0",
      "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
      },
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE72GAREQikG8fvC_Q7iucOkea6xNOCsJJr5K0yC5T55vQeq7opNNcMIH1yCvoALkjMUcs3-Vfp1Y--7lIkluoxFm0OqrSq1NbL5ZdnntCJ6ht28S6RwmmaysZdzhvMQga61qJtjf&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73cRZ2VyoDpldO4i6PWKUNLN9KZe5vgycgw6hBR2xZ2ure8LZVF2uABsfciLc7t3O4hZR382qdFTD2gRKFFm-jmYA1jlFJxTRXxz8eHDVNNk_J76X0qWpWhaZPHtVHN5N9x0b98&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.co.in/books?id=eq9XvgAACAAJ&hl=&source=gbs_api",
      "infoLink": "https://play.google.com/store/books/details?id=eq9XvgAACAAJ&source=gbs_api",
      "canonicalVolumeLink": "https://play.google.com/store/books/details?id=eq9XvgAACAAJ"
    },
    "saleInfo": {
      "country": "IN",
      "saleability": "NOT_FOR_SALE",
      "isEbook": false
    },
    "accessInfo": {
      "country": "IN",
      "viewability": "NO_PAGES",
      "embeddable": false,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
        "isAvailable": false
      },
      "pdf": {
        "isAvailable": false
      },
      "webReaderLink": "http://play.google.com/books/reader?id=eq9XvgAACAAJ&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "NONE",
      "quoteSharingAllowed": false
    }
  }

  export const bookTransformerNoDescription:bookDetails={
    "id":"eq9XvgAACAAJ",
    "title": "Fantastic Beasts and Where to Find Them",
    "thumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73cRZ2VyoDpldO4i6PWKUNLN9KZe5vgycgw6hBR2xZ2ure8LZVF2uABsfciLc7t3O4hZR382qdFTD2gRKFFm-jmYA1jlFJxTRXxz8eHDVNNk_J76X0qWpWhaZPHtVHN5N9x0b98&source=gbs_api",
     "author": "Felicity Baker",
     "publishedDate": "2017-02-02",
     isbn_no: "1407179403",
     "pageCount":64,
     description:"Description Not Available",
     }