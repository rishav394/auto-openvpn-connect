## Requirements

- `brew install openvpn`
- `brew install node`
- `cp .env.example .env`
- Change values in `.env`

## How to get values in .env
- `vpnuser` is your user name. Example -> `pro.user`
- `secret` is your secret that came from the QR you scanned in Authy App

## How to run
- `sudo OPEN_PATH=path_of_your_ovpn_file ./login.sh`
