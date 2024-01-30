export default function bs_list(haystack: number[], needle: number): boolean {
    console.log(haystack);
    let minI = 0;
    let maxI = haystack.length - 1;
    while (minI <= maxI) {
        const currentI = Math.floor((maxI - minI) / 2) + minI;
        console.log(minI, currentI, maxI);
        console.log(needle, haystack[currentI]);

        if (needle === haystack[currentI]) {
            return true;
        }
        if (needle < haystack[currentI]) {
            maxI = currentI - 1;
        } else {
            minI = currentI + 1;
        }
    }
    return false;
}
