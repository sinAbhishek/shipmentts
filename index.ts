function checkValidation(pickup: string[], trips: [string, string][], drops: string[]): boolean {

    const newPickup: Array<[string, string[]]> = pickup.map((c) => [c, [c]]);
    const newDrops: Array<[string, string[]]> = drops.map((c) => [c, [c]]);


    const map1 = new Map<string, string[]>([...newPickup, ...newDrops]);

    trips.forEach((c) => {
        let firstArray = map1.get(c[0])!;
        if (map1.has(c[1])) {
            let currentArray = map1.get(c[1])!;
            let newArray = [...currentArray, ...firstArray];
            map1.set(c[1], newArray);
        } else {
            map1.set(c[1], firstArray);
        }
    });

    const drop1: string[] = map1.get(drops[0]) || [];
    const drop2: string[] = map1.get(drops[1]) || [];
  

    return drop1.includes(pickup[0]) && drop1.includes(pickup[1]) && drop2.includes(pickup[0]) && drop2.includes(pickup[1]);
}

console.log(checkValidation(["A", "B"], [["A", "W"], ["B", "W"], ["W", "C"], ["W", "D"]], ["C", "D"]))