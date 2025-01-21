

// Dynamic Logs and Progress Updates
const logs = document.getElementById("logs");
const progressFill = document.getElementById("progress-fill");
const progressPercentage = document.getElementById("progress-percentage");
const errorOverlay = document.getElementById("error-overlay");

let progress = 0; // Initial progress
const totalProcessTime = 315; // Total time for the process (in seconds, 5.25 minutes)

const logMessages = [
  "Initializing extraction process... Gathering system information, securing environment...",
  "Connecting to secure server [127.0.0.1]... Successful connection established, verifying network status...",
  "Authenticating decryption keys... Initiating multi-factor cryptographic handshake...",
  "Accessing Asset: [CipherOps_Data.bin]... Asset verified, access granted, proceeding with decryption...",
  "Decrypting data chunk 1 of 50... Processing data stream, please wait...",
  "Decrypting data chunk 2 of 50... Data chunk integrity check complete, decryption in progress...",
  "Decrypting data chunk 3 of 50... Key validation ongoing, ensuring no interference with primary data flow...",
  "Decrypting data chunk 4 of 50... Data integrity confirmed, decompression in process...",
  "Validating cryptographic signatures... Verifying authenticity of data chunks to prevent tampering...",
  "Synchronizing with blockchain nodes... Establishing synchronization for final validation phase...",
  "Analyzing data integrity... Performing full data integrity check, potential issues under review...",
  "Decrypting data chunk 5 of 50......Triggering data fragmentation protocol...",
  "Rebuilding fragmented asset tables... Asset structure analysis underway, restoring critical data...",
  "Cross-verifying checksum values... Confirming consistency across encrypted asset fragments...",
  "Metadata retrieval in progress... Extracting meta information from encrypted data nodes...",
  "Warning: Low-level access detected, running diagnostics... Security breach potential identified, monitoring further...",
  "Resolving conflicting asset identifiers... Analyzing possible conflicts between asset signatures...",
  "Continuing extraction process... Full data flow is proceeding smoothly, ensuring all protocols are intact...",
  "Validating key permissions... Finalizing user access protocol checks, confirming authorization...",
  "Updating decryption protocols... Last phase of protocol updates in progress, system adjustments underway...",
  "Performing advanced data stream analysis... Compiling all relevant data logs for integrity verification...",
  "Starting blockchain transaction audit... Monitoring the blockchain activity for any suspicious patterns...",
  "Performing system-wide security check... Scanning for potential vulnerabilities or breaches...",
  "Finalizing data extraction... Preparing for upload and storage in the secure vault...",
  "Triggering data fragmentation protocol... Ensuring proper distribution of encrypted chunks across nodes...",
  "Retrieving final validation signatures... Confirming data accuracy and integrity for archival storage...",
  "Running post-process integrity checks... Reviewing final data sets to ensure compliance with security standards...",
  "Error detection and correction underway... Ensuring no critical flaws in the data pipeline..."
];

// Function to update logs dynamically
function updateLogs() {
  if (progress >= 55) {
    // Clear all previous messages when the error occurs at 55%
    logs.innerHTML = '';

    // Display the error messages
    logs.innerHTML += `
      <p style="color: red; font-weight: bold;">> ERROR: Blockchain defenses have detected unusual activity. Authentication key required. Critical protocol breach identified.</p>
      <p style="color: red; font-weight: bold;">> Authentication key required. Immediate action needed.</p>
    `;

    // Show error for 3 seconds before continuing with the other actions
    setTimeout(() => {
      // Trigger the screen flashing red once and delay the overlay
      document.body.classList.add("flash-red");
      setTimeout(() => {
        document.body.classList.remove("flash-red"); // Stop flashing after one flash
        errorOverlay.classList.remove("hidden"); // Show error overlay
        setTimeout(() => {
          window.location.href = "BlockchainDefenceOverride.html"; // Redirect after 5 seconds
        }, 3900); // Redirect after 5 seconds
      }, 3000); // Flash duration (1 second)
    }, 3500); // 3 seconds before the other actions happen

    return; // Don't update logs after this point
  }

  const newMessage =
    progress < 55
      ? logMessages.shift() || "Performing advanced protocol validation... Ensuring system stability..."
      : "Waiting for further instructions...";

  // Append the new message to the logs
  logs.innerHTML += `<p>> ${newMessage}</p>`;

  // Ensure that the terminal scrolls to the bottom when new messages appear
  logs.scrollTop = logs.scrollHeight; // Auto-scroll to the latest log
}

// Function to update the progress bar and handle errors
function updateProgress() {
  if (progress < 55) {
    progress += (1 / totalProcessTime) * 100; // Progress towards 100% over 315 seconds
    progress = Math.min(progress, 55); // Cap progress at 55%
    progressFill.style.width = `${progress.toFixed(1)}%`;
    progressPercentage.textContent = `Progress: ${progress.toFixed(1)}% | Estimated Time Remaining: ${Math.max(
      0,
      (totalProcessTime - (progress / 100) * totalProcessTime).toFixed(0)
    )} seconds`; // Time remaining in seconds
  } else if (progress === 55) {
    progressFill.style.background = "#ff0000"; // Change progress bar to red
    logs.innerHTML += `<p style="color: red;">> ERROR: Blockchain defenses have detected unusual activity.</p>`;
    logs.innerHTML += `<p style="color: red; font-weight: bold;">> WARNING: AUTHENTICATION KEY REQUIRED TO BYPASS BLOCKCHAIN DEFENCES.</p>`;

    // No updates to the logs after this point, handled in the updateLogs function
  }
}

// Timers for updates
const logInterval = setInterval(updateLogs, 7500); // Update logs every 5 seconds (slower)
const progressInterval = setInterval(updateProgress, 1000); // Update progress every 1 second

document.addEventListener('DOMContentLoaded', function (){ 
  if (localStorage.getItem('ERROR2')) {
    window.location.href = '404.html';
  } else {
    localStorage.setItem('ERROR2', 'true');
  }
  
  
  window.history.pushState(null, '', window.location.href);
  window.onpopstate = function () {
    window.location.href = '404.html'
  };
  });

  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("Prohibited!!");
});

