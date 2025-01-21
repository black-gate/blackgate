// let allowPageUnload = false;
// window.onbeforeunload = function () {
//   if (!allowPageUnload) {
//     return "Warning: Unauthorized refresh detected! Darkweb protocol will terminate progress.";
//   }
// };



// List of valid keys for simulation


let timer = 20 * 60 + 4; // Timer set to 10 minutes and 45 seconds
let keyUsed = []; // Track used keys

// Timer countdown function
function startTimer() {
    const timerElement = document.getElementById("timer");

    const countdown = setInterval(() => {
        if (timer <= 0) {
            clearInterval(countdown);
            window.location.href = "404.html"; // Redirect to 404 page
        } else {
            let minutes = Math.floor(timer / 60);
            let seconds = timer % 60;
            timerElement.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
            timer--;
        }
    }, 1000);
}



startTimer(); // Start the timer when the page loads


// Key Validation Logic
const validKeys = [
    
    "SOFG-6G5R-UANT-L6GV", "W78A-WSZM-BZVI-36MG", "UTTT-ZAKE-MTS7-FFME", "I6VU-H7TZ-TTWY-4IK9",
    "JMS7-R4Q4-SCDD-RFSA", "2CX7-A691-UDEY-U7G8", "JQVS-QFFA-EWJ9-M425", "GFGW-D6QS-XCQI-KXP4",
    "13Z4-YSLO-Z6RJ-WNL7", "RF1T-E9UW-K8Y6-KAIP", "IEJK-ILJH-QCFQ-WKV6", "0E06-XGWF-XHXM-OVJY",
    "4XU4-J4BW-33L4-4BOA", "J34U-X1LK-4RRB-MZKW", "I7LA-YJK4-9NZT-GROW", "S1JD-794J-5QTY-KZN9",
    "R6AF-SKBH-CKNY-YHAW", "FEQ0-H071-VY9I-4EF3", "JBNM-WARI-32FV-V72B", "V1QC-IKNL-WB8A-CJG1",
    "Y0R7-O5JE-R8IR-P54R", "YJE8-MA4L-SYDH-TN39", "5MCA-KZ1F-J6ZI-PB6X", "UXN1-IFQN-AKXM-ISFV",
    "D1FX-OR3E-X5OF-48SH", "OAJ4-NU3A-NZJ6-SK8F", "4LB7-A2PH-AF74-G3UD", "RF4S-4BTA-WMWF-WW7G",
    "WF9G-TI4E-2211-HO51", "IL91-H5K1-IO67-NZB2", "PCD0-FO7X-XHH5-6ZQU", "BJVA-Y0YW-1N2S-BXNZ",
    "8VU4-KO3X-ZVNM-Z28B", "C2J6-77DH-AEXM-29PY", "T1N0-V1Y5-XWGH-J9HR", "Y86T-NQ7N-WGL1-LP6U",
    "KPSH-J4LI-PQJE-2E4R", "LABF-HKVX-GAKB-LA6F", "RUPD-LIC3-8JCR-IA0Z", "K01U-KQDA-7M1A-DBH9",
    "WUP1-NKFJ-IIP0-U0EN", "STJL-KSVB-UM57-RN2U", "C20O-CV3X-JCN9-DX5N", "0ZNU-JMWO-ZVZB-EGPT",
    "PLNK-ENL7-QTZ0-7LYY", "9L08-SGXI-AD82-TUGO", "OR20-54SV-VQYK-OEAQ", "PQGI-45B4-OMU7-FE3X",
    "RZYJ-T62M-8RE5-0XJG", "P108-A0NI-BXV8-028N", "J2C8-P1MT-QTQK-6IWG", "0EHS-5UFW-91T0-M8I0",
    "8L6U-HHBH-8QAQ-R4L2", "6IQL-AM47-L99P-SSET", "Z9UR-169X-OEEW-UMOM", "64L4-X14H-5KZ6-APSI",
    "BYKH-EGPY-HX60-79ER", "ROY3-3LUY-NVTL-ZWY3", "VV79-DSIL-S6VY-I7RY", "COTC-6APK-XRH4-11CF",
    "KMML-LWW4-DQIW-9IDO", "UB43-255P-AFHA-6XZR", "K3K6-J5JC-KOHW-RLE9", "0D1K-5UAV-OX3V-2BYS",
    "2QT2-2ABX-3QDU-56CM", "DYD8-RIY7-BGLQ-VEOJ", "6V0D-QXBI-SQJG-C2T1", "EX8M-U3FX-PNJ6-7W6D",
    "L2NS-WD8C-78OI-0HM6", "G63D-GDP2-8E70-4HTP", "3QP3-76G1-3T2U-2NGP", "DGF0-020H-0SYR-E0S7",
    "OA7K-40EX-XK03-4EVB", "H79I-TRIY-9DXG-MLSN", "UP8K-3PQN-3KEL-PR7B", "Z9EJ-M2M7-6AFZ-QU6Q",
    "MP8R-7Z9N-DRCX-JMD6", "K5BB-7TT7-ZV1R-35N5", "V08X-8H7N-IWZQ-VRSQ", "8CRR-CEA2-W69W-KI4B",
    "VH7S-2SME-QPEB-7PDD", "3ITM-OAZ5-Z916-6I9R", "WO5N-DJ3P-6BXG-KGEF", "I51U-XFDT-ZY4W-PL6I",
    "S10O-KQAR-049F-33K7", "OAQ3-CP9G-QNKX-HBW0", "VRDC-K5T9-1TF2-CETI", "FSFU-BHI4-O4XD-Y5DH",
    "BBF5-8I4I-DAYP-5NIC", "P5G2-9DYA-G6SV-TFE5", "NFR5-H41A-G234-ZWXN", "QBJD-E11F-3HP5-25S0",
    "3AJ5-C3LV-J9IC-R3N1", "X0TN-A8XV-06GU-PO2T", "OISM-W5IC-UUOA-VHKA", "4MNL-MJVG-CWOJ-9AWD",
    "B4ZY-A03F-LAHJ-S5LB", "104W-0WH4-OYUZ-IZEU", "O94W-856J-W64M-NPG0", "WEQ7-KMT5-IO21-86RZ"

];
  const usedKeys = new Set();
  let attempts = 0;
  
  const keyInput = document.getElementById("auth-key");
  const submitBtn = document.getElementById("submit-btn");
  const errorMsg = document.getElementById("error-msg");
  
  // Enable button on valid input
keyInput.addEventListener("input", () => {
    submitBtn.disabled = keyInput.value.length < 5;
});

// Form Submission
document.getElementById("key-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const enteredKey = keyInput.value.trim();

    // Retrieve used keys from localStorage
    const usedKeysStorage = JSON.parse(localStorage.getItem("usedKeys")) || [];

    if (usedKeys.has(enteredKey) || usedKeysStorage.includes(enteredKey)) {
        displayError("Warning: Compromised key ⚠️");
        handleInvalidInput();
        return;
    }

    if (validKeys.includes(enteredKey)) {
        usedKeys.add(enteredKey);
        usedKeysStorage.push(enteredKey); // Add to localStorage
        localStorage.setItem("usedKeys", JSON.stringify(usedKeysStorage)); // Save back to localStorage
        handleValidInput();
        successEffect();
    } else {
        handleInvalidInput();
        handleFailedAttempt();
    }
});

// Error Handling
function handleFailedAttempt() {
    attempts++;
    if (attempts === 1) {
        displayError("INVALID CODE: Unauthorized access attempt. Wallet Flagged for Termination...");
    } else if (attempts === 2) {
        displayError("SEVERE ERROR: Wallet would be Exposed And Terminated...");
    } else if (attempts >= 3) {
        displayError("Wallet Flagged. Assets Compromised. Redirecting...");
        setTimeout(() => (window.location.href = "404.html"), 2000);
    } else {
        displayError("Critical Error: Invalid Key");
    }
}

// Display Error
function displayError(message) {
    errorMsg.textContent = message;
    errorMsg.style.opacity = 1;
    setTimeout(() => {
        errorMsg.style.opacity = 0;
    }, 3000);
}

// Success Effect
function successEffect() {
    errorMsg.textContent = "Processing..."; // Green processing message restored
    errorMsg.style.color = "#0f0"; // Green text
    keyInput.classList.add("input-success"); // Input shines green
    setTimeout(() => {
        window.location.href = "success.html";
    }, 2000);
}

// Function to handle invalid input (shake and turn red)
function handleInvalidInput() {
    keyInput.classList.add("input-error"); // Input turns red
    setTimeout(() => keyInput.classList.remove("input-error"), 300); // Remove after animation
}

// Function to handle valid input (shine green)
function handleValidInput() {
    keyInput.classList.add("input-success"); // Input turns green
    setTimeout(() => keyInput.classList.remove("input-success"), 2000); // Optional: Reset after 2 seconds
}

document.addEventListener('DOMContentLoaded', function (){ 

    let refreshCount =  localStorage.getItem('refreshCount');

    if (refreshCount) {
        refreshCount = parseInt(refreshCount) + 1;

        localStorage.setItem('refreshCount', refreshCount);

        if (refreshCount >= 2) {
            window.location.href = '404.html';
        }
    } else {
        localStorage.setItem('refreshCount', 1);
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
    
