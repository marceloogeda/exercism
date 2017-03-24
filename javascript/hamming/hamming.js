class Hamming {
  compute(sequenceOne, sequenceTwo) {
    let count = 0;

    if (!this.isValid([sequenceOne, sequenceTwo])) {
      throw new Error('DNA strands must be of equal length.');
    }

    for (let i = 0; i <= sequenceOne.length; i++) {
      if (sequenceOne[i] != sequenceTwo[i]) {
        count++;
      }
    }

    return count;
  }

  isValid(sequencies) {
    return sequencies[0].length === sequencies[1].length;
  }
}

module.exports = Hamming;
