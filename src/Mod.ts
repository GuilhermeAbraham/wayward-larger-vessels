import { doodadDescriptions } from "@wayward/game/game/doodad/Doodads";
import { DoodadType, IDoodadDescription } from "@wayward/game/game/doodad/IDoodad";
import { IItemDescription, ItemType } from "@wayward/game/game/item/IItem";
import { itemDescriptions } from "@wayward/game/game/item/ItemDescriptions";
import Mod from "@wayward/game/mod/Mod";

// Vessels to be modified with increased weight capacity
const enum Vessels {
    Raft,
    BullBoat,
    Sailboat
};

// Mapping of ItemType for each vessel type
const vesselsItemTypes: Record<Vessels, ItemType> = {
    [Vessels.Raft]: ItemType.Raft,
    [Vessels.BullBoat]: ItemType.BullBoat,
    [Vessels.Sailboat]: ItemType.Sailboat,
};

// Mapping of DoodadType for each vessel type
const vesselsDoodadTypes: Record<Vessels, DoodadType> = {
    [Vessels.Raft]: DoodadType.Raft,
    [Vessels.BullBoat]: DoodadType.BullBoat,
    [Vessels.Sailboat]: DoodadType.Sailboat
};

// Mapping of new weight capacities for each vessel type
const weightCapacities: Partial<Record<Vessels, number>> = {
    [Vessels.Raft]: 300,
    [Vessels.BullBoat]: 700,
    [Vessels.Sailboat]: 1200
};

export default class LargerVessels extends Mod {

    @Mod.instance<LargerVessels>()
    public static readonly INSTANCE: LargerVessels;

    // Structure to store the original item description to restore it on unload
    private vanillaItems: Map<ItemType, IItemDescription> = new Map();

    private vanillaDoodads: Map<DoodadType, IDoodadDescription> = new Map();

    public override onLoad(): void {
        // Iterate through vessels defined in weightCapacities
        for (const [vesselKey, newCapacity] of Object.entries(weightCapacities)) {
            const vessel = Number(vesselKey) as Vessels;
            
            // Store the original item and adjust the weight capacity
            const itemType = vesselsItemTypes[vessel];
            const itemDescription = itemDescriptions[itemType];
            if (itemDescription && !this.vanillaItems.has(itemType)) {
                this.vanillaItems.set(itemType, { ...itemDescription });
                itemDescription.weightCapacity = newCapacity;
            }

            // Store the original doodad and adjust the weight capacity
            const doodadType = vesselsDoodadTypes[vessel];
            const doodadDescription = doodadDescriptions[doodadType];
            if (doodadDescription && !this.vanillaDoodads.has(doodadType)) {
                this.vanillaDoodads.set(doodadType, { ...doodadDescription });
                doodadDescription.weightCapacity = newCapacity;
            }
        }
    }

    public override onUnload(): void {
        // Restore the original item descriptions for items
        for (const [itemType, originalItem] of this.vanillaItems) {
            itemDescriptions[itemType] = originalItem;
        }

        // Restore the original item descriptions for doodads
        for (const [doodadType, originalDoodad] of this.vanillaDoodads) {
            doodadDescriptions[doodadType] = originalDoodad;
        }
    }
}
