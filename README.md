# Last Telegram Message
This is a simple script that will fetch the latest message from a Telegram bot account and print it to stdout. This can then be used in something like i3blocks to display the message in your i3bar for example.

## Setup
1. Clone the repository
2. Change directory to the repo and then edit the example config file to use your bot token. You do not need to change the `counter` value.
3. Install dependencies with npm
4. Run the script
```sh
git clone https://github.com/Hoi15A/tg-last-message.git
cd tg-last-message
cp tg-config.example.json tg-config.json
vim tg-config.json
npm install
npm start
```
