export interface Vessel {
  imo: string,
  name: string;
  aeCode: string;
  vesselType: string;
  flag: string;
  organization: string;
  organizationId: number;
  status: string;
  active: boolean;
};

export type Vessels = Array<Vessel>;

export interface Thumbnail {
  height: number;
  width: number;
  url: string;
}

export interface SharePointfile {
  id?:  string;
  parentId?: string;
  name: string;
  modifiedOnUtc: string;
  modifiedBy: string;
  type: string;
  thumbnail?: Thumbnail;
  isGallery?: boolean;
};

export type SharePointfileField = keyof SharePointfile;

export type SharePointfiles = Array<SharePointfile>;

export interface TechPaperFile {
  id: string;
  name: string;
  updatedOn: string;
}

export type TechPaperFileField = keyof TechPaperFile;

export type Downloadable = SharePointfile | TechPaperFile;

export type TechPaperFiles = Array<TechPaperFile>;

export interface MenuItem {
  id: string;
  parentId?: string;
  name: string;
  icon?: any;
  submenu?: MenuItemArray;
  isPage: boolean;
};

export type MenuItemArray = Array<MenuItem>;

export type SortOrder = 'ASC' | 'DESC' | 'NONE';

export enum FileTypes {
  FOLDER = 'File Folder',
  GALLERY = 'Gallery',
  PDF = 'Pdf',
  WORD = 'Word',
  IMAGE = 'Image',
  EXCEL = 'Excel',
  POWERPOINT = 'Powerpoint',
  AUDIO = 'Audio',
  VIDEO = 'Video'
};
