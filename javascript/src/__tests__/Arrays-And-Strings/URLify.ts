import URLify from "@code/Arrays-And-Strings/URLify"

test("replace all spaces in a string with '%20'", () => {
    expect(URLify('Mr John Smith   ', 13)).toEqual('Mr%20John%20Smith');
});
