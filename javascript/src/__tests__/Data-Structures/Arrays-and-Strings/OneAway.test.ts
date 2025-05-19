import { oneAway } from "@code/Data-Structures/Arrays-and-Strings"

test("strings are one change away", () => {
    expect(oneAway('pale', 'ple')).toEqual(true);
    expect(oneAway('pales', 'pale')).toEqual(true);
    expect(oneAway('pale', 'bale')).toEqual(true);
    expect(oneAway('pale', 'bake')).toEqual(false);
});
