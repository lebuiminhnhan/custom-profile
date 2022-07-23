export class UserModel {
  avatar: string | undefined;
  background: string | undefined;
  imageGalary: Image[] = [];
  video: Video[] = [];
}

export class Image {
  imgName: string | undefined;
  imgUrl: string | undefined;
}

export class Video {
  videoName: string | undefined;
  videoUrl: string | undefined;
}

export class FileUpload {
  key!: string;
  name!: string;
  url!: string;
  file!: File;
  constructor(file: File) {
    this.file = file;
  }
}
