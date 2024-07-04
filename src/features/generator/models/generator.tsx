export interface Generator {
  name: string;
  email: string;
  comercialName: string;
}

export interface GeneratorDocument extends Generator {
  id: string;
}
