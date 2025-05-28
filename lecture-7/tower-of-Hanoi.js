class DiskStack {
    constructor(name) {
        this.name = name;
        this.items = [];
    }

    push(disk) {
        if (this.items.length > 0 && disk > this.peek()) {
            return false;
        }
        this.items.push(disk);
        return true;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function moveDisk(src, dest, moves) {
    const disk = src.pop();
    if (disk === null) {
        return false;
    }
    const success = dest.push(disk);
    if (!success) {
        src.push(disk);
        return false;
    }
    moves.push(`Move disk ${disk} from ${src.name} to ${dest.name}`);
    return true;
}

function solveHanoiIterative(n, sourceName, subcolumnName, destinationName) {
    const source = new DiskStack(sourceName);
    const subcolumn = new DiskStack(subcolumnName);
    const destination = new DiskStack(destinationName);

    for (let i = n; i >= 1; i--) {
        source.push(i);
    }

    const totalMoves = Math.pow(2, n) - 1;
    let movesMade = 0;

    const [c1, c2, c3] = n % 2 === 0
        ? [source, subcolumn, destination]
        : [source, destination, subcolumn];

    const moveLog = [];

    while (destination.items.length !== n) {
        movesMade++;

        if (movesMade % 3 === 1) {
            if (!moveDisk(c1, c3, moveLog)) {
                moveDisk(c3, c1, moveLog);
            }
        } else if (movesMade % 3 === 2) {
            if (!moveDisk(c1, c2, moveLog)) {
                moveDisk(c2, c1, moveLog);
            }
        } else {
            if (!moveDisk(c2, c3, moveLog)) {
                moveDisk(c3, c2, moveLog);
            }
        }

        const cols = [source, subcolumn, destination].filter(p => p.peek() !== 1);

        if (cols.length === 2) {
            const p1 = cols[0];
            const p2 = cols[1];

            if (p1.isEmpty() && !p2.isEmpty()) {
                moveDisk(p2, p1, moveLog);
            }
            else if (p2.isEmpty() && !p1.isEmpty()) {
                moveDisk(p1, p2, moveLog);
            }
            else if (p1.peek() < p2.peek()) {
                moveDisk(p1, p2, moveLog);
            } else {
                moveDisk(p2, p1, moveLog);
            }
        }
    }

    moveLog.forEach(move => console.log(move));
    console.log(`Completed in ${movesMade} moves.`);
    console.log(`Minimum number of moves: ${totalMoves}`);
}

const numDisks = 3;
solveHanoiIterative(numDisks, 'A', 'B', 'C');