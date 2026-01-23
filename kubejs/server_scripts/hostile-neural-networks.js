ServerEvents.recipes(event => {
    const models = [
        ["zombie", "minecraft:rotten_flesh", "overworld"],
        ["skeleton", "minecraft:bone", "overworld"],
        ["creeper", "minecraft:gunpowder", "overworld"],
        ["spider", "minecraft:spider_eye", "overworld"],
        ["slime", "minecraft:slime_ball", "overworld"],
        ["witch", "minecraft:glass_bottle", "overworld"],
        ["phantom", "minecraft:phantom_membrane", "overworld"],
        ["drowned", "minecraft:copper_ingot", "overworld"],
        ["guardian", "minecraft:prismarine_shard", "overworld"],
        ["elder_guardian", "minecraft:heart_of_the_sea", "overworld"],
        ["warden", "minecraft:echo_shard", "overworld"],
        ["breeze", "minecraft:breeze_rod", "overworld"],
        ["evoker", "minecraft:totem_of_undying", "overworld"],
        ["vindicator", "minecraft:emerald", "overworld"],
        ["iron_golem", "minecraft:iron_block", "overworld"],
        ["snow_golem", "minecraft:snowball", "overworld"],
        ["silverfish", "minecraft:infested_stone", "overworld"],
        ["rabbit", "minecraft:rabbit_foot", "overworld"],
        ["polar_bear", "minecraft:cod", "overworld"],
        ["pig", "minecraft:porkchop", "overworld"],
        ["sheep", "minecraft:white_wool", "overworld"],
        ["cow", "minecraft:leather", "overworld"],
        ["chicken", "minecraft:feather", "overworld"],
        ["squid", "minecraft:ink_sac", "overworld"],
        ["glow_squid", "minecraft:glow_ink_sac", "overworld"],
        ["mooshroom", "minecraft:red_mushroom", "overworld"],
        ["blaze", "minecraft:blaze_rod", "nether"],
        ["ghast", "minecraft:ghast_tear", "nether"],
        ["wither_skeleton", "minecraft:wither_skeleton_skull", "nether"],
        ["wither", "minecraft:nether_star", "nether"],
        ["hoglin", "minecraft:cooked_porkchop", "nether"],
        ["zombified_piglin", "minecraft:gold_ingot", "nether"],
        ["magma_cube", "minecraft:magma_cream", "nether"],
        ["enderman", "minecraft:ender_pearl", "end"],
        ["shulker", "minecraft:shulker_shell", "end"],
        ["ender_dragon", "minecraft:dragon_breath", "end"]
    ]

    models.forEach(model => {
        let mobId = `hostilenetworks:${model[0]}`;
        let item = `hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:cow", hostilenetworks:data=9999]`;

        event.shapeless(
            Item.of(item), 
            [
                "hostilenetworks:blank_data_model", 
                model[1],
                `4x hostilenetworks:${model[2]}_prediction`
            ]
        );
    })
})