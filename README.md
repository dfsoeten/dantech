# Personal Modpack
My personal modpack using [Packwiz](https://github.com/packwiz/packwiz).

## Download missing mods on startup
1. Download the [Packwiz Installer](https://github.com/packwiz/packwiz-installer-bootstrap).
2. Start the Packwiz server: `packwiz serve`.
3. Configure the Prism Launcher with a startup script to run the installer before launching: `"$INST_JAVA" -jar "C:\Users\<user>\Downloads\packwiz-installer-bootstrap.jar" http://localhost:8080/pack.toml`.