export class CustomError extends Error {
  data;
  constructor(message: string, data: any) {
    super(message);
    this.data = data;
  }
}
