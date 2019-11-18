let clickUpgrades = {
  fairyGuide: {
    price: 20,
    quantity: 0,
    multiplier: 5
    // BuyFairyGuide: function() {
    //   if (crystalCount > clickUpgrades.fairyGuide.price) {document.getElementById("getFairyBtn").disabled = false;
    //   }
  },
  leprechaunMap: {
    price: 40,
    quantity: 0,
    multiplier: 10
  }
};
let autoUpgrades = {
  unicorn: {
    price: 50,
    quantity: 0,
    multiplier: 20
  },
  dwarfTeam: {
    price: 100,
    quantity: 0,
    multiplier: 30
  }
};

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
let startButton = document.getElementById('start-button');
let endButton = document.getElementById('end-button');
let getFairyBtn = document.getElementById('getFairyBtn');
let getLeprMapBtn = document.getElementById('getLeprMapBtn');
let getUnicornBtn = document.getElementById('getUnicornBtn');
let hireDwarfTeamBtn = document.getElementById('hireDwarfTeamBtn');

/**
 * Set Price shortcuts
 */
let fairyPrice = clickUpgrades.fairyGuide.price;
console.log(fairyPrice);

let leprMapPrice = clickUpgrades.leprechaunMap.price;
console.log(leprMapPrice);

let unicornPrice = autoUpgrades.unicorn.price;
console.log(unicornPrice)

let dwarfPrice = autoUpgrades.dwarfTeam.price;
console.log(dwarfPrice)

let crystalCount = 0;
let unicornCount = 0;
let leprechaunCount = 0;
let unicornCrystalCount = 0;
let dwarfCrystalCount = 0;
let fairyCount = 0;
let dwarfCount = 0;

/**
 * Multiplier Variables
 */
let fairyMultiplier = clickUpgrades.fairyGuide.multiplier;
let leprMultiplier = clickUpgrades.leprechaunMap.multiplier;
let unicornMultiplier = autoUpgrades.unicorn.multiplier;
let dwarfMultiplier = autoUpgrades.dwarfTeam.multiplier;
/**
 * Adds to crystalCount on every click of crystal
 */
function mine() {
  crystalCount++
  update();
  upgrades();
}
/**
 * Toggle Buttons: Disable whenever exceeds count
 */
function update(){
  buttonFairyToggle();
  buttonLeprMapToggle();
  buttonUnicornToggle();
  buttonDwarfTmToggle();
}
/**
 * Single Items Click Upgrades
 */
function upgrades() {
  fairyUpgrade();
  leprechaunUpgrade();
}
/**
 * Game Play Functions: New Quest & Reset Game
 */
function startGame(){
  
  crystalCount = 0;
  fairyCount = 0;
  unicornCount = 0;
  dwarfCount = 0;
  update()
  startButton.setAttribute('disabled', 'true')
  endButton.removeAttribute('disabled')
  getFairyBtn.setAttribute('disabled','true')
  getLeprMapBtn.setAttribute('disabled','true')
  getUnicornBtn.setAttribute('disabled','true')
  hireDwarfTeamBtn.setAttribute('disabled','true')
};
function endGame(){
  crystalCount = 0;
  fairyCount = 0;
  leprechaunCount = 0;
  unicornCount = 0;
  dwarfCount = 0;
  update()
  endButton.setAttribute('disabled', 'true')
  getFairyBtn.setAttribute('disabled','true')
  getLeprMapBtn.setAttribute('disabled','true')
  getUnicornBtn.setAttribute('disabled','true')
  hireDwarfTeamBtn.setAttribute('disabled','true')
  startButton.removeAttribute('disabled')
}

/**
 * Purchase & Upgrade Functions
 */
function buyFairy() {
  if (crystalCount >= fairyPrice)
  {fairyCount++;
    crystalCount = crystalCount - fairyPrice;
  }
  
  fairyCountElem.innerHTML = fairyCount;
  update();
}
function fairyUpgrade(){
  if(fairyCount > 0) {
    crystalCount = crystalCount + (fairyCount * 2);
  }
}
function fairyMult() {
  var multiplier = fairyMultiplier;
  for (var i = 0; i <= fairyCount; i++) {fairyPrice = fairyPrice + multiplier}
  }


function buyLeprMap() {
  if (crystalCount >= leprMapPrice){
    leprechaunCount++;
    crystalCount = crystalCount - leprMapPrice;
  }
  leprMapElem.innerHTML = leprechaunCount;
  update();
}
function leprechaunUpgrade(){
  if(leprechaunCount > 0) {
    crystalCount = crystalCount +(leprechaunCount *3);
  }
}
function buyUnicorn() {
  if (crystalCount >= unicornPrice){
    unicornCount++;
    crystalCount = crystalCount - unicornPrice;
  }
  unicornCountElem.innerHTML = unicornCount;
  update();
}

setInterval(function unicornUpgrade(){
  if (unicornCount > 0) {crystalCount = crystalCount + 5}}, 10000);

function hireDwarfTeam(){
  if (crystalCount >= dwarfPrice){
    dwarfCount++;
    crystalCount = crystalCount - dwarfPrice;
  }
  dwarfCountElem.innerHTML = dwarfCount;
  update();
}
setInterval(function dwarfUpgrade(){
  if (dwarfCount > 0) {
    crystalCount = crystalCount + 10000}}, 2000);
/**
 * Updates Crystal Count every 1/4 second
 */
setInterval(function update() {
  crystalCountElem.innerHTML = crystalCount.toString();
}, 250);

function buttonFairyToggle() {
  if (crystalCount > fairyPrice) {
    getFairyBtn.removeAttribute('disabled');
  } else {
    getFairyBtn.setAttribute('disabled','true');
  }
  }
function buttonLeprMapToggle() {
  if (crystalCount > leprMapPrice) {
    getLeprMapBtn.removeAttribute('disabled');
  } else {
    getLeprMapBtn.setAttribute('disabled','true');
  }
  }
function buttonUnicornToggle() {
  if (crystalCount > unicornPrice) {
    getUnicornBtn.removeAttribute('disabled');
  } else {
    getUnicornBtn.setAttribute('disabled','true')
  }
    }
function buttonDwarfTmToggle() {
  if (crystalCount > dwarfPrice) {
    hireDwarfTeamBtn.removeAttribute('disabled');
  } else {
hireDwarfTeamBtn.setAttribute('disabled','true')
  }
  }

