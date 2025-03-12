SMS Bomber (Educational Purpose Only)

🚨 Disclaimer: This project is strictly for educational purposes only. Unauthorized use of this tool for any illegal or unethical activities is strictly prohibited. The author is not responsible for any misuse of this tool.

📌 About

This script is designed to demonstrate how automated API requests work. It sends multiple requests to various APIs with a delay and logs the responses. The tool is built using Node.js and requires external dependencies like axios.

⚙️ Requirements

Ensure you have the following installed:

Node.js (Latest version) → Download here

Git (Optional, for cloning the repository)

Termux (For Android users)

🚀 Installation & Usage

1️⃣ Clone the Repository

# Using Git (Recommended)
git clone https://github.com/neeraj3161/SmsBomber.git
cd SmsBomber

# Or manually download the ZIP and extract it.

2️⃣ Install Dependencies

npm install

This will install axios and other required dependencies.

3️⃣ Configure the Script

Open index.js in a text editor.

Modify the following variables with the correct values:

const phone_number = "YOUR_PHONE_NUMBER_HERE"; // Enter the phone number to send requests
const delay = 5; // Delay in seconds between requests
const start = 0;
const stop = 10; // Number of attempts

4️⃣ Run the Script

node index.js

This will start sending requests based on the provided configuration.

📱 Running on Termux (Android)

If you're using Termux on Android, follow these steps:

1️⃣ Install Node.js in Termux

pkg update && pkg upgrade
pkg install nodejs git

2️⃣ Clone & Navigate to the Project

git clone https://github.com/neeraj3161/SmsBomber.git
cd SmsBomber

3️⃣ Install Dependencies & Run

npm install
node index.js

❗ Legal Warning

This script is for educational and research purposes only. Do not use it to harass or spam individuals. Unauthorized usage is illegal in many countries and can result in severe legal consequences. Use responsibly.

