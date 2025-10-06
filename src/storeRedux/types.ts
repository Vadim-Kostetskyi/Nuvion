export interface Product {
  id: number;
  title: string;
  slug: string;
  date: string;
  // image: string;
  images: string[];
  work_performed?: string;
  address?: string;
  language: string;
  description: string;
}

export interface SaveProductArg {
  formData: FormData;
  id?: number;
}
