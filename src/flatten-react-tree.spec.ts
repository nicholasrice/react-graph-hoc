import { flatten } from "./flatten-react-tree"
import { uniqueId } from "lodash";

const items = (() => {
    return new Array(1000).fill(0).map(() => uniqueId())
})();

describe("flatten", () => {
    test("should return an array when the flap-map is empty", () => {
        expect(flatten([])).toEqual([])
    });
    test("should flatten a flat-map with a single item in insertion order", () => {
        expect(flatten([
            [items[0], [items[1], items[2], items[3]]
        ]])).toEqual([items[0], items[1], items[2], items[3]])
    })
})
