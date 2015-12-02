# DNS Downtime Detector for TWC ISP

I have a problem with my ISP. In recent weeks I've seen multiple DNS
server outages. Network connectivity is okay, but no DNS queries can be
resolved. This breaks the Internet, and isn't acceptable.

I've switched to OpenDNS (208.67.222.222, 208.67.220.220) and Google's 
DNS server (8.8.8.8) for my network. I have three severs and they should
be pretty reliable.

Now I'm writing a program to run in my crontab to monitor the TWC DNS
servers and automatically report outages on twitter and log them.

I don't expect this to change anything about the TWC service. I'm
already switched over to OpenDNS. This is mostly for my amusement.

# TWC DNS Server Addresses

* 209.18.47.61
* 209.18.47.62

This is from the TWC website:
https://business.timewarnercable.com/support/resources/internet/dns/server_addresses/what_are_the_dnsserveraddresses.html

# My Script

This script is written on Node.js, using the built-in dns library.
Additionally there is a twitter library on NPM. 


