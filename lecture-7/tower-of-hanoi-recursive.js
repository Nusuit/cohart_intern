function towerOfHanoiJS(n, source, helper, destination) {
    if (n === 1) {
        console.log(`move disk 1 from ${source} to ${destination}`);
        return;
    }
    towerOfHanoiJS(n - 1, source, destination, helper);
    console.log(`move disk ${n} from ${source} to ${destination}`);
    towerOfHanoiJS(n - 1, helper, source, destination);
}
const numberOfDisks = 3;

towerOfHanoiJS(numberOfDisks, 'source', 'helper', 'destination');

console.log(`\nMinimum number of moves: ${Math.pow(2, numberOfDisks) - 1}`);