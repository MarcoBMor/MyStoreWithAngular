export interface IProduct {
    _id:        string;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    image:       string;
    annualSales: number;
}

export enum Category {
    Mobiles = "mobile",
    Processors = "processor",
    Tablets = "tablet",
    Computers = "computer",
}
