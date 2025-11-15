import { IItemDescription, ItemType } from "@wayward/game/game/item/IItem";
import { itemDescriptions } from "@wayward/game/game/item/ItemDescriptions";
import Mod from "@wayward/game/mod/Mod";

// Boats to be modified with increased weight capacity
const boats = [
    ItemType.Raft,
    ItemType.BullBoat,
    ItemType.Sailboat
];

// Mapping of new weight capacities for each boat type
const weightCapacities: Partial<Record<ItemType, number>> = {
    [ItemType.Raft]: 300,
    [ItemType.BullBoat]: 700,
    [ItemType.Sailboat]: 1200
};

export default class LargerVessels extends Mod {

    @Mod.instance<LargerVessels>()
    public static readonly INSTANCE: LargerVessels;

    // Structure to store the original item description to restore it on unload
    private vanillaDuplicates: {
        itemIndex: number;
        originalItem: IItemDescription
    }[] = [];

    public override onLoad(): void {
        boats.map(itemType => {
            const newCapacity = weightCapacities[itemType];
            if (newCapacity !== undefined) {
                this.vanillaDuplicates.push({ itemIndex: itemType, originalItem: { ...itemDescriptions[itemType] } });
                itemDescriptions[itemType].weightCapacity = weightCapacities[itemType];
            }
        })
    }

    public override onUnload(): void {
        this.vanillaDuplicates.map(original => {
            itemDescriptions[original.itemIndex] = original.originalItem;
        });
    }
}
