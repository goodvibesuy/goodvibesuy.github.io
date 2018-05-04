import { User } from "./user";
import { PointOfSale } from "./pointOfSale";
import { Product } from "./product";
import { Client } from "./client";
import { Customer } from './customer';

export class Route {
    public id: number;
    public name: string;
    public date: Date;
    public user: User;
    public customers: Customer[];
    public customersToRemove: Customer[];
    public stock: { product: Product, quantity: number }[];

    constructor() {
        this.id = 0;
        this.name = "";
        this.date = new Date();
        this.user = new User();
        this.customers = new Array<Customer>();
        this.customersToRemove = new Array<Customer>();
        this.stock = new Array<{ product: Product, quantity: number }>();
    }

    public addProductStock(productStock: { product: Product, quantity: number }): void {
        this.stock.push(productStock);
    }

    public getStock(): { product: Product, quantity: number }[] {
        return this.stock;
    }

    public setUser(user: User): void {
        this.user = user;
    }

    public getUser(): User {
        return this.user;
    }

    public addCustomer(c: Customer): void {
        this.customers.push(c);
        this.customersToRemove = this.customersToRemove.filter((val: Customer) => {
            return val.id != c.id;
        });
    }

    public removeCustomer(idCustomer: number): void {
        this.customersToRemove.push(this.customers.filter((val: Customer) => {
            return val.id == idCustomer;
        })[0]);
        this.customers = this.customers.filter((val: Customer) => {
            return val.id != idCustomer;
        });
    }

    public getCustomers(): Customer[] {
        return this.customers.map<Customer>(c => <Customer>c);
    }

    public getCustomersToRemove(): Customer[] {
        return this.customersToRemove;
    }

    public reorderCustomer(position: number, newPosition: number): void {
        var auxPOS = this.customers[newPosition];
        this.customers[newPosition] = this.customers[position];
        this.customers[position] = auxPOS;
    }
}
