type ParentChildSet<T> = [T, T[]];
type FlatDependencyGraph<T> = Array<ParentChildSet<T>>;

interface NestedDependencyGraph<T> extends Array<NestedDependencyGraph<T> | T> {}

export function flatten<T>(graph: FlatDependencyGraph<T>): T[] {
    const clone = graph.concat();

    for (let i: number = 0, length: number = clone.length; i < length; i++) {
        const splice: T[] = [clone[i][0]].concat(clone[i][1]);

        // Search in tree for dependencies, if none are found than then is the root
        // and we should splice in place

        console.log(splice)
    }

    // for each item, 
    return []

}


