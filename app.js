let crystalCount = 0;
let unicornCount = 0;
let leprechaunCount = 0;
let unicornCrystalCount = 0;
let dwarfCrystalCount = 0;
let fairyCount = 0;
let dwarfCount = 0;
let fairyPrice = 5;

let startButton = document.getElementById('start-button');


/**
 * Count Elements
 */
let crystalCountElem = document.getElementById("crystal-count");
let fairyCountElem = document.getElementById("fairy-count");
let leprMapElem = document.getElementById("leprechaun-count");
let unicornCountElem = document.getElementById("unicorn-count");
let dwarfCountElem = document.getElementById("dwarf-count");

/**
 * Get Buttons
 */
let getFairyBtn = document.getElementById("#getFairyBtn");
let getLeprMapBtn = document.getElementById("#getLeprMapBtn");
let getUnicornBtn = document.getElementById("#getUnicornBtn");
let hireDwarfTeamBtn = document.getElementById("#hireDwarfTeamBtn");

let clickUpgrades = {
  fairyGuide: {
    price: 10,
    quantity: 0,
    multiplier: 5
    // BuyFairyGuide: function() {
    //   if (crystalCount > clickUpgrades.fairyGuide.price) {document.getElementById("getFairyBtn").disabled = false;
    //   }
  },
  leprechaunMap: {
    price: 11,
    quantity: 0,
    multiplier: 10
  }
};
let autoUpgrades = {
  unicorn: {
    price: 12,
    quantity: 0,
    multiplier: 20
  },
  dwarfTeam: {
    price: 13,
    quantity: 0,
    multiplier: 30
  }
};

/**
 * Adds to crystalCount on every click of crystal
 */
function mine() {
  crystalCount++;
  
}
// function startGame();

function buyFairy() {
  if (crystalCount > clickUpgrades.fairyGuide.price)
  {fairyCount++;}
  fairyCountElem.innerHTML = fairyCount;

//   crystalCount = crystalCount - clickUpgrades.fairyGuide.price;
// } else {
//   // @ts-ignore
//   document.getElementById("getFairyBtn").disabled = true;
// }
}
function buyLeprMap() {
  leprechaunCount++;
  // @ts-ignore
  leprMapElem.innerHTML = leprechaunCount;

  crystalCount = crystalCount - clickUpgrades.leprechaunMap.price;
}
function buyUnicorn() {
  unicornCount++;
  // @ts-ignore
  unicornCountElem.innerHTML = unicornCount;
  crystalCount = crystalCount - autoUpgrades.unicorn.price;

  setInterval(() => {console.log("Here come the Unicorns!")}, 3000)
  setInterval(() => {crystalCount+4},6000);
  // @ts-ignore
  update();
}
function hireDwarfTeam(){
  dwarfCount++;
  // @ts-ignore
  dwarfCountElem.innerHTML = dwarfCount;
  crystalCount = crystalCount - autoUpgrades.dwarfTeam.price;

  setInterval(crystalCount.toString() + 10), 5000;
}
/**
 * Updates Crystal Count every 1/4 second
 */
setInterval(function update() {
  crystalCountElem.innerHTML = crystalCount.toString();
}, 250);

function buttonFairyToggle() {
  if (clickUpgrades.fairyGuide.price > crystalCount) {
    document.getElementById("getFairyBtn").disabled = true;
  } else {
    document.getElementById("getFairyBtn").disabled = false;
  }
  }

function buttonLeprMapToggle() {
  if (clickUpgrades.leprechaunMap.price > crystalCount) {
    document.getElementById("getLeprMapBtn").disabled = true}
    else {
      document.getElementById("getLeprMapBtn").disabled = false;
    }
  }
setInterval(function buttonUnicornToggle() {
  if (autoUpgrades.unicorn.price > crystalCount) {
    document.getElementById("getUnicornBtn").disabled = true;
  }
}), 100;
setInterval(function buttonDwarfTmToggle() {
  if (autoUpgrades.dwarfTeam.price > crystalCount) {
    document.getElementById("hireDwarfTeamBtn").disabled = true;
  }
}), 100;
