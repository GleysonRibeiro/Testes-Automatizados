export interface IRepository<E> {
    findAll(): Promise<Array<E>>;
    findById(id: string): Promise<E | undefined>;
    insert(id: string, obj: E): Promise<E | null>;
    update(id: string, obj: E): Promise<E | null>;
    delete(id: string): Promise<boolean>; 
}

