# Dantech
Dantech is a lightweight tech-focussed Minecraft modpack for 1.21.1 based on NeoForge.

Highlights include:
1. Tech focus with mods like [Mekanism](www.curseforge.com/minecraft/mc-mods/mekanism) and [Oritech](https://www.curseforge.com/minecraft/mc-mods/oritech).
2. Amazing world generation using [Terralith](https://www.curseforge.com/minecraft/mc-mods/terralith) and [Tectonic](https://www.curseforge.com/minecraft/mc-mods/tectonic).
3. The ability to see the aforementioned world generation using [Distant Horizons](https://www.curseforge.com/minecraft/mc-mods/distant-horizons) and [Just Zoom](https://www.curseforge.com/minecraft/mc-mods/just-zoom).

## Development
Dantech is built using [Packwiz](https://github.com/packwiz/packwiz).

### Download missing mods on startup
1. Download the [Packwiz Installer](https://github.com/packwiz/packwiz-installer-bootstrap).
2. Start the Packwiz server: `packwiz serve`.
3. Configure the Prism Launcher with a startup script to run the installer before launching: `"$INST_JAVA" -jar "C:\Users\<user>\Downloads\packwiz-installer-bootstrap.jar" http://localhost:8080/pack.toml`.