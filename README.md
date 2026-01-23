# Dantech
Dantech is a Minecraft modpack for 1.12.1 that blends modern technology, easy automation, beautiful worlds and cozy a atmosphere.

Highlights include:
1. Tech core with mods like [Mekanism](https://www.curseforge.com/minecraft/mc-mods/mekanism) and [Oritech](https://www.curseforge.com/minecraft/mc-mods/oritech).
2. Beautiful world generation using [Terralith](https://www.curseforge.com/minecraft/mc-mods/terralith) and [Tectonic](https://www.curseforge.com/minecraft/mc-mods/tectonic).
3. The ability to see the aforementioned world generation using [Distant Horizons](https://www.curseforge.com/minecraft/mc-mods/distant-horizons) and [Just Zoom](https://www.curseforge.com/minecraft/mc-mods/just-zoom).
4. Developery feel using the JetBrains Mono font and [Dark Mode Everywhere](https://www.curseforge.com/minecraft/mc-mods/dark-mode-everywhere) preinstalled.

## How to play
1. Go to the [releases](https://github.com/dfsoeten/dantech/releases) page for this repo. 
2. Download the latest `.zip` or `.mrpack` file.
3. Open your Minecraft launcher, e.g. [Prism Launcher](https://prismlauncher.org/) and create a new instance using the downloaded file.

## Development
Dantech is built using [Packwiz](https://github.com/packwiz/packwiz).

### Download missing mods on startup
1. Download the [Packwiz Installer](https://github.com/packwiz/packwiz-installer-bootstrap).
2. Start the Packwiz server: `packwiz serve`.
3. Configure the Prism Launcher with a startup script to run the installer before launching: `"$INST_JAVA" -jar "C:\Users\<user>\Downloads\packwiz-installer-bootstrap.jar" http://localhost:8080/pack.toml`.