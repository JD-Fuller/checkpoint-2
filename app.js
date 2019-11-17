let crystalCount = 0;
let fairyCount = 0;
let leprechaunCount = 0;
let unicornCount = 0;
let dwarfCount = 0;
let fairyPrice = 50;
let unicornCrystalCount = 0;
let dwarfCrystalCount = 0;


/**
 * Count Elements
 */
let crystalCountElem = document.querySelector("#crystal-count");
let fairyCountElem = document.querySelector("#fairy-count");
let leprMapElem = document.querySelector("#leprechaun-count");
let unicornCountElem = document.querySelector("#unicorn-count");
let dwarfCountElem = document.querySelector("#dwarf-count");

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
    price: 200,
    quantity: 0,
    multiplier: 10
  }
};
let autoUpgrades = {
  unicorn: {
    price: 15,
    quantity: 0,
    multiplier: 20
  },
  dwarfTeam: {
    price: 3,
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


function buyFairy() {
  fairyCount++;
  fairyCountElem.innerHTML = fairyCount;

  crystalCount = crystalCount - clickUpgrades.fairyGuide.price;
}
function buyLeprMap() {
  leprechaunCount++;
  leprMapElem.innerHTML = leprechaunCount;

  crystalCount = crystalCount - clickUpgrades.leprechaunMap.price;
}
function buyUnicorn() {
  unicornCount++;
  unicornCountElem.innerHTML = unicornCount;
  crystalCount = crystalCount - autoUpgrades.unicorn.price;

  setInterval(() => {console.log("Here come the Unicorns!")}, 3000)
  setInterval(() => {crystalCount+4},6000);
  update();
}
function hireDwarfTeam(){
  dwarfCount++;
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
    getFairyBtn.disabled = true;
  }
}

function buttonLeprMapToggle() {
  if (clickUpgrades.leprechaunMap.price > crystalCount) {
    getLeprMapBtn.disabled = true;
  }
}
function buttonUnicornToggle() {
  if (autoUpgrades.unicorn.price > crystalCount) {
    getUnicornBtn.disabled = true;
  }
}
function buttonDwarfTmToggle() {
  if (autoUpgrades.dwarfTeam.price > crystalCount) {
    hireDwarfTeamBtn.disabled = true;
  }
}
