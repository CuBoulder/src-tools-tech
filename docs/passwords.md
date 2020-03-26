# Passwords and Secrets
## Keepass
KeePass is an open-source secrets management project, allowing passwords to be stored in a vault file.  We use this in conjunction with Google Drive, allowing us to bi-directionally sync a vault file between the members of our group.  A secret key file is held by each user, allowing access to the vault.

Since KeePass is an open project, several different clients have been developed which can access the vault files.

## Recommended clients:
- MacOS, Windows, and Linux: KeePassXC
- iOS:
- Android:

## Configuration:

## Mac:

In order to use KeePass, three things are needed:
- A KeePass client
- A vault file
- A key file

The prefered client for MacOS is KeePassXC.  Download and install the MacOS client from https://keepassxc.org/.

The key file is secret, and should not be stored anywhere publically accessible.  The key file can be obtained from someone else with the file, then stored securely somewhere on your computer.

The common vault file is stored on Google Drive, and can be downloaded from the “SRC Web - Development and Operations Team” folder.  While you can simply download this file to your computer and access it, it is more convenient to set up syncing via Google Backup and Sync to automatically bi-directonally sync a local copy with the Drive copy.

To set up syncing, download and install Google Backup and Sync from https://www.google.com/drive/download/backup-and-sync/.  Next, in a browser, right-click the vault file located in the “SRC Web - Development and Operations Team” share, and click “...”.  The file should now automatically be synced down to your computer.

Finally, run KeePassXC and load the vault file.  Set the key file, leaving the password blank.  You should now be able to access the contents of the vault file.
## LastPass
LastPass is a freemium password manager that stores encrypted passwords online. The standard version of LastPass comes with a web interface, but also includes plugins for various web browsers and apps for many smartphones. It also includes support for bookmarklets. LogMeIn, Inc. acquired LastPass in October 2015. Wikipedia

Download
