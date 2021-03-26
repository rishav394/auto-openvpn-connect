node ./index.js
sudo $(brew --prefix openvpn)/sbin/openvpn --config $OPEN_PATH --auth-user-pass pass.txt
