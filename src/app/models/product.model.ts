export interface IProduct {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    image:       string;
    rating:      Rating;
}

export enum Category {
    Mobiles = "mobiles",
    Processors = "processors",
    Tablets = "tablets",
    Computers = "computers",
}

export interface Rating {
    rate:  number;
    count: number;
}
