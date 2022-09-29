# X-UI
CN|[EN](./README_EN.md)

> Disclaimer: This project is only for personal study and communication, please do not use it for illegal purposes, please do not use it in production environment

Support single port multi-user, multi-protocol xray panel, the ultimate stitch monster
Monitor and manage your proxy services quickly and easily with a free Telegram bot
For specific tutorials, please refer to the personal blog article [link](https://coderfan.net/how-to-use-x-ui-pannel-to-set-up-proxies-for-bypassing-gfw.html)
Welcome everyone to use and give feedback or submit Pr to help the project better improve
If you think this project is helpful to you, please give me a star: star2: support me~

# Documentation directory
- [Function introduction](#function introduction)
- [One-click installation] (#One-click installation)
- [Effect preview](#effect preview)
- [shortcut](#shortcut)
- [changelog](#changelog)

# Features

- System status monitoring
- Support single-port multi-user, multi-protocol, web page visualization operation
- Supported protocols: vmess, vless, trojan, shadowsocks, shadowsocks 2022, dokodemo-door, socks, http
- Support to configure more transmission configurations: http, tcp, ws, grpc, kcp, quic
- Traffic statistics, limit traffic, limit expiration time, one-key reset and device monitoring
- Customizable xray configuration templates
- Support https access panel (bring your own domain name + ssl certificate)
- Support one-click SSL certificate application and automatic renewal
- Telegram bot notification, control function
- For more advanced configuration items, see the panel for details

:bulb: For details **use, configuration details and troubleshooting** please click here:point_right:[WIKI](https://github.com/FranzKafkaYu/x-ui/wiki):point_left:
# A key installation
Before installation, please make sure that your system supports the `bash` environment and the system network is normal

&#x26A1;This command can also be used to upgrade from the original version, the data will not be lost&#x26A1;

````
bash <(curl -Ls https://raw.githubusercontent.com/FranzKafkaYu/x-ui/master/install.sh)
````
# Effect preview
`Panel usage`:
<details>
<summary><b>Click to view the preview</b></summary>
  
![image](https://user-images.githubusercontent.com/38254177/180629631-f76a05c8-ecf0-4685-bbc7-a7058747d213.png)
![image](https://user-images.githubusercontent.com/38254177/180629662-b7a325fc-1ebb-47c9-992c-1e7c758a326b.png)


 </details>
 
`Bot uses`:
<details>
<summary><b>Click to view the preview</b></summary>
  
![image](https://user-images.githubusercontent.com/38254177/178551055-893936b7-b75f-4ee8-a773-eee7c6f43f51.png)
 
</details>

`Flow Alert`:
<details>
<summary><b>Click to view the preview</b></summary>
  
![image](https://user-images.githubusercontent.com/38254177/180039760-dc987a30-e21c-49a3-8e03-19666566a822.png)

</details>

`SSH alert`:
<details>
<summary><b>Click to view the preview</b></summary>
  
![image](https://user-images.githubusercontent.com/38254177/180040129-2ec1a7c0-abd3-41dc-aab0-8cd22415c943.png)

</details>

`Limit reminder`:
<details>
<summary><b>Click to view the preview</b></summary>
  
![image](https://user-images.githubusercontent.com/38254177/180040521-af6e9ef8-d7e5-44e8-834e-25b3b8e3e1b5.png)

</details>

`Expiration reminder`:
<details>
<summary><b>Click to view the preview</b></summary>
  
![image](https://user-images.githubusercontent.com/38254177/180041690-90ca4b1f-3a2d-470b-bc0c-eca9261a739a.png)

</details>

`Login reminder`:
<details>
<summary><b>Click to view the preview</b></summary>
  
![image](https://user-images.githubusercontent.com/38254177/180040913-b8bf2fe1-6fc1-43ab-a683-ae23db1866b2.png)
![image](https://user-images.githubusercontent.com/38254177/180041179-a5f4cd52-a1ba-4aa9-abb2-b94e36722385.png)

</details>




# Shortcut
After successful installation, enter the control options menu by typing `x-ui`, the current menu content:
````
  x-ui panel management script
  0. Exit the script
———————————————
  1. Install x-ui
  2. Update x-ui
  3. Uninstall x-ui
———————————————
  4. Reset username and password
  5. Reset panel settings
  6. Set the panel port
  7. View current panel settings
———————————————
  8. Start x-ui
  9. Stop x-ui
  10. Restart x-ui
  11. View x-ui status
  12. View x-ui log
———————————————
  13. Set x-ui to start automatically
  14. Cancel x-ui auto-start
———————————————
  15. One-click install bbr (latest kernel)
  16. One-click application for SSL certificate (acme application)
 
Panel Status: Running
Whether to start automatically: yes
xray status: running

Please enter selection [0-16]:
````
## suggestion system

- CentOS 7+
- Ubuntu 16+
- Debian 8+

# change log  
- 2022.08.11: Implement Vmess/Vless/Trojan single-port multi-user; increase CPU usage overrun reminder
- 2022.07.28: Add acme standalone mode to apply for certificate; add x-ui automatic keep-alive mechanism; optimize compilation options to adapt to more systems
- 2022.07.24: Added automatic generation of panel root paths, automatic reset of node traffic, and notification of device IP access changes
- 2022.07.21: Added node IP access change reminder, added stop/restart xray function in web panel, optimized some translations
- 2022.07.11: Add node expiration reminder, traffic warning strategy, add Telegram bot node replication, get sharing links, etc.
- 2022.07.03: Refactor Telegram bot function, command control no longer requires keyboard input; increase Trojan underlying transmission configuration
- 2022.06.19: Added new Cipher for Shadowsocs2022, added node search and one-click traffic clearing functions
- 2022.05.14: Added Telegram bot Command control function to support closing/opening/deleting nodes, etc.
- 2022.04.25: Added SSH login reminder and panel login reminder
- 2022.04.23: Add more Telegram bot reminder functions
- 2022.04.16: Added Telegram bot function in panel settings
- 2022.04.12: Optimized Telegram Bot notification reminder
- 2022.04.06: Optimize the installation/update process, increase the certificate issuance function, and add the Telegram bot robot push function
#Telegram

[Subscribe to channel](https://t.me/CoderfanBaby)
[Discussion group](https://t.me/franzkafayu)

# thanks

- [vaxilu/x-ui](https://github.com/vaxilu/x-ui)
- [XTLS/Xray-core](https://github.com/XTLS/Xray-core)
- [telegram-bot-api](https://github.com/go-telegram-bot-api/telegram-bot-api)

## Stargazers over time

[![Stargazers over time](https://starchart.cc/FranzKafkaYu/x-ui.svg)](https://starchart.cc/FranzKafkaYu/x-ui)
