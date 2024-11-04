class RandomizedSet {
    list: number[];
    mappedList: Map<number, number>;

    constructor() {
        this.list = [];
        // [value, indexInList]
        this.mappedList = new Map();
    }

    insert(val: number): boolean {
        if (this.mappedList.has(val)) {
            return false;
        }

        this.list.push(val);
        this.mappedList.set(val, this.list.length - 1);
        return true;
    }

    remove(val: number): boolean {
        if (this.mappedList.has(val)) {
            const index = this.mappedList.get(val);
            // remove from list
            this.list[index] = this.list.at(-1);
            this.list.pop();

            // delete from mapped List
            this.mappedList.delete(val);

            // update map
            this.mappedList.set(this.list[index], index)


            return true;
        }

        return false;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.list.length);
        return this.list[randomIndex];
    }
}
