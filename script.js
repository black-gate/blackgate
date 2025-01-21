// Secure hash display
document.getElementById("walletHash").textContent = "[######...######]";

// Percentage-based loading
let progress = 0;
const loadingText = document.getElementById("loadingText");
const percentage = document.getElementById("percentage");
const hackingSection = document.getElementById("hackingSection");
const proceedSection = document.getElementById("proceedSection");
const walletList = document.getElementById("walletList");
const totalAssetsCompromised = document.getElementById("totalAssetsCompromised");
const statusText = document.getElementById("statusText");

const messages = [
  "Engaging stealth mode...",
  "Infiltrating Blockchains...",
  "Activating CipherOps algorithms...",
  "Deploying covert decryption sequences...",
];

const hackingMessages = [
  "Injecting severe brute force attack...",
  "Overloading security protocols...",
  "Exploiting vulnerabilities...",
  "Engaging dynamic cryptographic brute force...",
  "Deconstructing Blockchain defenses...",
  "Initiating advanced penetration sequence...",
  "Cracking multi-layered encryption barriers...",
  "Bypassing intrusion detection systems...",
  "Deploying Quantum decryption algorithms...",
  "Disrupting hostile firewall structures...",
  "Compromising secure blockchain architecture...",
  "Executing precision data injection...",
  "Analyzing cryptographic weaknesses...",
  "Launching recursive exploit operations...",
  "Targeting high-priority encryption nodes...",
  "Saturating defense network with overload signals...",
];

const errorMessages = [
  "Defense matrix breach detected.",
  "Access denied due to countermeasures.",
  "Intrusion blocked by AI firewall.",
  "Error: Secure node unreachable.",
  "Connection severed by adversary systems...",
  "Access path eliminated due to interference...",
  "Secure node disabled by hostile algorithm...",
  "Intrusion sequence neutralized by defense bot...",
  "Connection mitigated by threat mitigation AI...",
  "Unauthorized access deflected by data shield...",
  "Hacking attempt detected and mitigated...",
  "Node compromise prevented by core shield...",
  "System override blocked by security matrix...",
  "Encryption protocol disrupted by AI defense...",
  "Intrusion pathway severed by countermeasures...",
  "Access restricted by adaptive firewalls...",
  "System lock engaged by adversary countermeasures...",
];

// Wallet hacking data with unique 30-character wallet addresses
const wallets = Array.from({ length: 20 }, () => ({
  address: `0x${[...Array(30)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("")}`,
  success: Math.random() < 0.55, // 40% chance of success (hacked)
  balance: Math.random() * 73 + 67.5, // Random balance between $10 and $60
}));

let totalBalance = 0;

// Percentage-based loading animation
const loadingInterval = setInterval(() => {
  if (progress < 100) {
    progress++;
    percentage.textContent = `Loading........ ${progress}%`;
    if (progress % 20 === 0 && messages.length) {
      loadingText.textContent = messages.shift();
      loadingText.style.color = "purple"; // Purple color for loading messages
    }
  } else {
    clearInterval(loadingInterval);
    loadingText.style.display = "none";
    percentage.style.display = "none";
    statusText.textContent = "Targets Found";
    statusText.style.color = "red";
    startHacking();
  }
}, 325);

function startHacking() {
  hackingSection.classList.remove("hidden");

  wallets.forEach((wallet, index) => {
    setTimeout(() => {
      const li = document.createElement("li");

      // Display hacking message with wallet address
      li.innerHTML = `<span style="color: #b37f5d;">${wallet.address}</span> - <span>${hackingMessages[index % hackingMessages.length]}</span>`;
      walletList.appendChild(li);

      // Display random characters simulation beside the hacking message
      simulateRandomData(li, wallet, index);
    }, index * 13000); // Hacking animation delay
  });
}

function simulateRandomData(li, wallet, index) {
  const randomContainer = document.createElement("span"); // Container for random text
  randomContainer.style.color = "#1e90ff"; // Electric blue color
  randomContainer.style.marginLeft = "10px";
  randomContainer.style.whiteSpace = "nowrap"; // Prevent text wrapping
  li.appendChild(randomContainer);

  const randomInterval = setInterval(() => {
    randomContainer.textContent = generateRandomString(45); // Generate random text (40 characters)
  }, 150); // Update every 150ms

  setTimeout(() => {
    clearInterval(randomInterval);

    // Ensure randomized "hacked" and "failed" outcomes with preference for "failed"
    const isHacked = wallet.success && Math.random() < 0.5; // Add randomness to mix outcomes
    if (isHacked && totalBalance + wallet.balance <= 600.24) {
      totalBalance += wallet.balance;
      li.innerHTML = `<span style="color: #d3d3d3;">${wallet.address}</span> - <span class="hacked">Hacked</span>: <span class="success">$${wallet.balance.toFixed(2)}</span>`;
    } else {
      li.innerHTML = `<span style="color: #d3d3d3;">${wallet.address}</span> - <span class="error">Failed</span>: ${errorMessages[Math.floor(Math.random() * errorMessages.length)]}`;
    }

    // Finalize process after all wallets are processed
    if (index === wallets.length - 1) {
      finalizeProcess();
    }
  }, 10000); // Display random data for 4.5 seconds
}

function generateRandomString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function finalizeProcess() {
  let currentBalance = 0;
  totalAssetsCompromised.classList.remove("hidden");
  const interval = setInterval(() => {
    if (currentBalance < totalBalance) {
      currentBalance = Math.min(totalBalance, currentBalance + 10); // Increment toward the total
      totalAssetsCompromised.textContent = `[Total Assets Compromised: $${currentBalance.toFixed(2)}]`;
    } else {
      clearInterval(interval);
      proceedSection.classList.remove("hidden");
    }
  }, 50);
}

// Proceed button functionality
document.getElementById("proceedButton").addEventListener("click", function () {
  allowPageUnload = true;
  window.location.href = "asset-extraction.html";
});

setTimeout(() => {
  console.log("Summary:");
  console.log("- Total wallets hacked worldwide this minute: 127 ");
  console.log("- Total funds: $9,345.67");
}, 20000); // Show after 10 seconds

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("kepOFF404")) {
    window.location.href = "404.html";
  } else {
    localStorage.setItem("kepOFF404", "true");
  }

  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
    window.location.href = "404.html";
  };
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert("Prohibited!!");
});