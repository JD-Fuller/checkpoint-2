let clickUpgrades = {
  fairyGuide: {
    price: 30,
    quantity: 0,
    multiplier: 25
    // BuyFairyGuide: function() {
    //   if (crystalCount > clickUpgrades.fairyGuide.price) {document.getElementById("getFairyBtn").disabled = false;
    //   }
  },
  leprechaunMap: {
    price: 45,
    quantity: 0,
    multiplier: 30
  }
};
let autoUpgrades = {
  unicorn: {
    price: 100,
    quantity: 0,
    multiplier: 50
  },
  dwarfTeam: {
    price: 250,
    quantity: 0,
    multiplier: 75
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
 * Price Elements
 */
let fairyPriceElem = document.getElementById("fairy-price");
let leprechaunPriceElem = document.getElementById("leprechaun-price");
let unicornPriceElem = document.getElementById("unicorn-price")
let dwarfPriceElem = document.getElementById("dwarf-price")

/**
 * Reset all elements
 */
function countReset() {
crystalCountElem = document.getElementById("crystal-count");
fairyCountElem = document.getElementById("fairy-count");
leprMapElem = document.getElementById("leprechaun-count");
unicornCountElem = document.getElementById("unicorn-count");
dwarfCountElem = document.getElementById("dwarf-count");
let fairyPriceElem = document.getElementById("fairy-price");
let leprechaunPriceElem = document.getElementById("leprechaun-price");
let unicornPriceElem = document.getElementById("unicorn-price")
let dwarfPriceElem = document.getElementById("dwarf-price")
}
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

let leprMapPrice = clickUpgrades.leprechaunMap.price;

let unicornPrice = autoUpgrades.unicorn.price;

let dwarfPrice = autoUpgrades.dwarfTeam.price;

let crystalCount = 0;
let unicornCount = 0;
let leprechaunCount = 0;
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
  startButton.setAttribute('disabled', 'true')
  endButton.removeAttribute('disabled')
  getFairyBtn.setAttribute('disabled','true')
  getLeprMapBtn.setAttribute('disabled','true')
  getUnicornBtn.setAttribute('disabled','true')
  hireDwarfTeamBtn.setAttribute('disabled','true')
  update()
  countReset()
};
function endGame(){
  crystalCount = 0
  fairyCount = 0
  leprechaunCount = 0
  unicornCount = 0
  dwarfCount = 0
  endButton.setAttribute('disabled', 'true')
  getFairyBtn.setAttribute('disabled','true')
  getLeprMapBtn.setAttribute('disabled','true')
  getUnicornBtn.setAttribute('disabled','true')
  hireDwarfTeamBtn.setAttribute('disabled','true')
  startButton.removeAttribute('disabled')
  countReset()
  update()
}

/**
 * Reset All numbers
 */
function countReset() {
  crystalCountElem.innerHTML = crystalCount
  fairyCountElem.innerHTML = fairyCount
  fairyPriceElem.innerHTML = fairyPrice
  leprMapElem.innerHTML = leprechaunCount
  leprechaunPriceElem.innerHTML = leprMapPrice
  unicornCountElem.innerHTML = unicornCount
  unicornPriceElem.innerHTML = unicornPrice
  dwarfCountElem.innerHTML = dwarfCount
  dwarfPriceElem.innerHTML = dwarfPrice
  }
/**
 * Purchase - Upgrade & Multiplier Functions
 */
  function buyFairy() {
  if (crystalCount >= fairyPrice)
  {fairyCount++;
    crystalCount = crystalCount - fairyPrice;
  }
  fairyCountElem.innerHTML = fairyCount;
  fairyPriceElem.innerHTML = fairyPrice;
  fairyMult();
  update();
}
  function fairyUpgrade(){
  if(fairyCount > 0) {
    crystalCount = crystalCount + (fairyCount * 2);
  }
}
  function fairyMult() {
  var multiplier = fairyMultiplier;
   fairyPrice = fairyPrice + multiplier;
  }
  function buyLeprMap() {
    if (crystalCount >= leprMapPrice){
      leprechaunCount++;
      crystalCount = crystalCount - leprMapPrice;
    }
    leprMapElem.innerHTML = leprechaunCount;
    leprechaunPriceElem.innerHTML = leprMapPrice;
    leprechaunMult()
    update();
  
  }
  function leprechaunUpgrade(){
    if(leprechaunCount > 0) {
      crystalCount = crystalCount +(leprechaunCount *3);
    }
  }
  function leprechaunMult(){
    var multiplier = leprMultiplier;
    leprMapPrice = leprMapPrice + multiplier;
  }
  function buyUnicorn() {
    if (crystalCount >= unicornPrice){
      unicornCount++;
      crystalCount = crystalCount - unicornPrice;
    }
    unicornCountElem.innerHTML = unicornCount;
    unicornPriceElem.innerHTML = unicornPrice;
    unicornMult();
    update();
  }
  setInterval(function unicornUpgrade(){
    if (unicornCount > 0) 
    {crystalCount = crystalCount + 5}}, 10000);
  function unicornMult(){
    var multiplier = unicornMultiplier;
    unicornPrice = unicornPrice + multiplier;
  }
  function hireDwarfTeam(){
    if (crystalCount >= dwarfPrice){
      dwarfCount++;
      crystalCount = crystalCount - dwarfPrice;
    }
    dwarfCountElem.innerHTML = dwarfCount;
    dwarfPriceElem.innerHTML = dwarfPrice;
    dwarfMult();
    update();
  }
  setInterval(function dwarfUpgrade(){
    if (dwarfCount > 0) {
      crystalCount = crystalCount + 10}}, 30000);
  function dwarfMult(){
    var multiplier = dwarfMultiplier;
    dwarfPrice = dwarfPrice + multiplier;
  }
/**
 * Updates Crystal Count every 1/4 second
 */
setInterval(function update() {
  crystalCountElem.innerHTML = crystalCount.toString();
}, 250);

/**
 * Button Toggle Functions
 */
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

