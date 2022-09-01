import { key } from "../../../api/books-api"
import {ItemsEntity} from "../../../api/BooksResponseTypes"
import {book} from "../../../types/storeType"
const NoImage= `http://books.google.com/books/content?id=WV3FngEACAAJ&printsec=frontcover&img=2&zoom=9&source=gbs_api&key=${key}`
export const itemsData:ItemsEntity[]|null= [
    {
      "kind": "books#volume",
      "id": "eq9XvgAACAAJ",
      "etag": "N6sRhgWq5sU",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/eq9XvgAACAAJ",
      "volumeInfo": {
        "title": "Fantastic Beasts and Where to Find Them: Cinematic Guide: Newt Scamander Do Not Feed Out",
        "authors": [
          "Felicity Baker"
        ],
        "publishedDate": "2017-02-02",
        "description": "The essential film companion for Newt Scamander! Relive the magic of Newt's world with this hardback guidebook featuring your favourite scenes and quotes from Fantastic Beasts and Where to Find Them.",
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
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=eq9XvgAACAAJ&dq=Harry+Potter&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.co.in/books?id=eq9XvgAACAAJ&dq=Harry+Potter&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Fantastic_Beasts_and_Where_to_Find_Them.html?hl=&id=eq9XvgAACAAJ"
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
      },
      "searchInfo": {
        "textSnippet": "Relive all the magic of Newt&#39;s world with this hardback guidebook featuring all you need to know about Newt from the movie."
      }
    },
    {
      "kind": "books#volume",
      "id": "f280CwAAQBAJ",
      "etag": "VPqKsO/8j7o",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/f280CwAAQBAJ",
      "volumeInfo": {
        "title": "Harry Potter: The Complete Collection (1-7)",
        "authors": [
          "J.K. Rowling"
        ],
        "publisher": "Pottermore Publishing",
        "publishedDate": "2015-12-14",
        "description": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide. Having now become classics of our time, the Harry Potter ebooks never fail to bring comfort and escapism to readers of all ages. With its message of hope, belonging and the enduring power of truth and love, the story of the Boy Who Lived continues to delight generations of new readers.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781781106464"
          },
          {
            "type": "ISBN_10",
            "identifier": "1781106460"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 4236,
        "printType": "BOOK",
        "categories": [
          "Young Adult Fiction"
        ],
        "averageRating": 4,
        "ratingsCount": 47,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.20.19.0.preview.2",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=f280CwAAQBAJ&dq=Harry+Potter&hl=&cd=2&source=gbs_api",
        "infoLink": "http://books.google.co.in/books?id=f280CwAAQBAJ&dq=Harry+Potter&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_The_Complete_Collection_1_7.html?hl=&id=f280CwAAQBAJ"
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
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://play.google.com/books/reader?id=f280CwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide."
      }
    },
    {
      "kind": "books#volume",
      "id": "1XP_tQEACAAJ",
      "etag": "ggrQTARJn3c",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/1XP_tQEACAAJ",
      "volumeInfo": {
        "title": "Harry Potter",
        "subtitle": "The Illustrated Collection",
        "authors": [
          "J. K. Rowling"
        ],
        "publisher": "Harry Potter",
        "publishedDate": "2018-09-25",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "133831291X"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781338312911"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "printType": "BOOK",
        "categories": [
          "Juvenile Fiction"
        ],
        "averageRating": 5,
        "ratingsCount": 3,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=1XP_tQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=1XP_tQEACAAJ&dq=Harry+Potter&hl=&cd=3&source=gbs_api",
        "infoLink": "http://books.google.co.in/books?id=1XP_tQEACAAJ&dq=Harry+Potter&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter.html?hl=&id=1XP_tQEACAAJ"
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
        "webReaderLink": "http://play.google.com/books/reader?id=1XP_tQEACAAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Gorgeously illustrated in full color by award-winning artist Kay, the first three books in Rowling&#39;s beloved Harry Potter series--&quot;Harry Potter and the Sorcerer&#39;s Stone, Harry Potter and the Chamber of Secrets, &quot; and &quot;Harry Potter and the ..."
      }
    },
  ]
 export const transformedBookData:book[]=[
 {
    id:"eq9XvgAACAAJ",
    title:"Fantastic Beasts and Where to Find Them: Cinematic Guide: Newt Scamander Do Not Feed Out",
    thumbnail: "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
   },
   {
    id:"f280CwAAQBAJ",
    title: "Harry Potter: The Complete Collection (1-7)",
    thumbnail:NoImage,
   },
   {
    id:"1XP_tQEACAAJ",
    title: "Harry Potter",
    thumbnail:NoImage,
   },
   
]