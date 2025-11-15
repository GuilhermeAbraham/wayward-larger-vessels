import { doodadDescriptions } from "@wayward/game/game/doodad/Doodads";
import { DoodadType, IDoodadDescription } from "@wayward/game/game/doodad/IDoodad";
import { IItemDescription, ItemType } from "@wayward/game/game/item/IItem";
import { itemDescriptions } from "@wayward/game/game/item/ItemDescriptions";
import Mod from "@wayward/game/mod/Mod";

// Boats to be modified with increased weight capacity
enum Boats {
    Raft,
    BullBoat,
    Sailboat
};

// Mapping of ItemType for each boat type
const boatsItemTypes: Record<Boats, ItemType> = {
    [Boats.Raft]: ItemType.Raft,
    [Boats.BullBoat]: ItemType.BullBoat,
    [Boats.Sailboat]: ItemType.Sailboat
};

// Mapping of DoodadType for each boat type
const boatsDoodadTypes: Record<Boats, DoodadType> = {
    [Boats.Raft]: DoodadType.Raft,
    [Boats.BullBoat]: DoodadType.BullBoat,
    [Boats.Sailboat]: DoodadType.Sailboat
};

// Mapping of new weight capacities for each boat type
const weightCapacities: Partial<Record<Boats, number>> = {
    [Boats.Raft]: 300,
    [Boats.BullBoat]: 700,
    [Boats.Sailboat]: 1200
};

export default class LargerVessels extends Mod {

    @Mod.instance<LargerVessels>()
    public static readonly INSTANCE: LargerVessels;

    // Structure to store the original item description to restore it on unload
    private vanillaItems: {
        itemIndex: number;
        originalItem: IItemDescription
    }[] = [];

    private vanillaDoodads: {
        doodadIndex: number;
        originalDoodad: IDoodadDescription
    }[] = [];

    public override onLoad(): void {
        Object.entries(Boats).map(([key, boat]) => {
            const newCapacity = weightCapacities[boat as Boats];
            if (newCapacity !== undefined && isNaN(newCapacity) === false) {
                // Store the original item and adjust the weight capacity
                const itemDescription = itemDescriptions[boatsItemTypes[boat as Boats]];
                if (itemDescription) {
                    this.vanillaItems.push({ itemIndex: Number(key), originalItem: { ...itemDescription } });
                    itemDescription.weightCapacity = newCapacity;
                }

                // Store the original doodad and adjust the weight capacity
                const doodadDescription = doodadDescriptions[boatsDoodadTypes[boat as Boats]];
                if (doodadDescription) {
                    this.vanillaDoodads.push({ doodadIndex: Number(key), originalDoodad: { ...doodadDescription } });
                    doodadDescription.weightCapacity = newCapacity;
                }
            }
        })
    }

    public override onUnload(): void {
        // Restore the original item descriptions for items
        this.vanillaItems.map(original => {
            itemDescriptions[original.itemIndex] = original.originalItem;
        });

        // Restore the original item descriptions for doodads
        this.vanillaDoodads.map(original => {
            doodadDescriptions[original.doodadIndex] = original.originalDoodad;
        });
    }
}
