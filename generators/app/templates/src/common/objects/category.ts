export class Category {
  id: number;
  name: string;
  status: boolean;
  created_at: string;
  updated_at: string;

  constructor(item: any) {
    this.id = item.id;
    this.name = item.name;
    this.status = item.status;
    this.created_at = item.created_at;
    this.updated_at = item.updated_at;
  }
}