// src/types/formidable.d.ts
declare module "formidable" {
  export interface File {
    size: number;
    path: string;
    name: string;
    type: string;
    lastModifiedDate?: Date;
    filepath: string;
    // Add any other properties you use
  }

  export interface Fields {
    [key: string]: string | string[];
  }

  export interface Files {
    [key: string]: File | File[];
  }

  export class IncomingForm {
    parse(
      req: any,
      callback: (err: Error, fields: Fields, files: Files) => void
    ): void;
    // Add any other methods or properties you use
  }
}
