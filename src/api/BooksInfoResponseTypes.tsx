export interface BookInfoResponse {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
    accessInfo: AccessInfo;
  }
  export interface VolumeInfo {
    title: string;
    authors?: (string)[] | null;
    publisher: string;
    publishedDate?: string| null;
    description?: string| null;
    industryIdentifiers?: (IndustryIdentifiersEntity)[] | null;
    readingModes: ReadingModes;
    pageCount?: number|null;
    printedPageCount: number;
    dimensions: Dimensions;
    printType: string;
    averageRating: number;
    ratingsCount: number;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: PanelizationSummary;
    imageLinks?: ImageLinks| null;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  }
  export interface IndustryIdentifiersEntity {
    type: string;
    identifier: string;
  }
  export interface ReadingModes {
    text: boolean;
    image: boolean;
  }
  export interface Dimensions {
    height: string;
    width: string;
    thickness: string;
  }
  export interface PanelizationSummary {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  }
  export interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
  }
  export interface SaleInfo {
    country: string;
    saleability: string;
    isEbook: boolean;
  }
  export interface AccessInfo {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: EpubOrPdf;
    pdf: EpubOrPdf;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
  }
  export interface EpubOrPdf {
    isAvailable: boolean;
  }
  