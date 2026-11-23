document.addEventListener("DOMContentLoaded", () => {
  const player = document.getElementById("virtual-cube");
  const algDisplay = document.getElementById("alg-display");

  const scrambleBtn = document.getElementById("scramble-btn");
  const sexyMoveBtn = document.getElementById("sexy-move-btn");
  const tPermBtn = document.getElementById("t-perm-btn");
  const resetBtn = document.getElementById("reset-btn");

  const moves = ["R", "R'", "R2", "L", "L'", "L2", "U", "U'", "U2", "D", "D'", "D2", "F", "F'", "F2", "B", "B'", "B2"];

  function generateScramble(length = 20) {
    const scramble = [];
    let lastAxis = "";
    for (let i = 0; i < length; i++) {
      let move;
      let axis;
      do {
        move = moves[Math.floor(Math.random() * moves.length)];
        axis = move[0];
      } while (axis === lastAxis);
      lastAxis = axis;
      scramble.push(move);
    }
    return scramble.join(" ");
  }

  scrambleBtn.addEventListener("click", () => {
    const scramble = generateScramble(20);
    player.alg = "";
    player.experimentalSetupAlg = scramble;
    algDisplay.textContent = `Scramble: ${scramble}`;
  });

  sexyMoveBtn.addEventListener("click", () => {
    const alg = "R U R' U'";
    player.experimentalSetupAlg = "";
    player.alg = alg;
    player.play();
    algDisplay.textContent = `Executing Trigger: ${alg}`;
  });

  tPermBtn.addEventListener("click", () => {
    const alg = "R U R' U' R' F R2 U' R' U' R U R' F'";
    player.experimentalSetupAlg = "";
    player.alg = alg;
    player.play();
    algDisplay.textContent = `Executing PLL (T-Perm): ${alg}`;
  });

  resetBtn.addEventListener("click", () => {
    player.experimentalSetupAlg = "";
    player.alg = "";
    algDisplay.textContent = "Status: Solved // Ready for inspection";
  });
});
