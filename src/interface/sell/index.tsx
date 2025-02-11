import { IClient } from '../client';
import { IProduct } from '../product';
import { IStatus, IStatus_Pay } from '../status';


export interface ISellProduct {
    product:IProduct
    count:number
}

export interface ISell {
    id: string;
    status: IStatus;
    statusPay:IStatus_Pay
    createdAt: string;
    updatedAt: string;
    client:IClient
    products:ISellProduct[]
    total:number
}
