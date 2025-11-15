var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@wayward/game/game/item/IItem", "@wayward/game/game/item/ItemDescriptions", "@wayward/game/mod/Mod"], function (require, exports, IItem_1, ItemDescriptions_1, Mod_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const boats = [
        IItem_1.ItemType.BoatPaddle,
        IItem_1.ItemType.BullBoat,
        IItem_1.ItemType.Sailboat
    ];
    const weightCapacities = {
        [IItem_1.ItemType.BoatPaddle]: 500,
        [IItem_1.ItemType.BullBoat]: 1000,
        [IItem_1.ItemType.Sailboat]: 1200
    };
    class LargerVessels extends Mod_1.default {
        constructor() {
            super(...arguments);
            this.vanillaDuplicates = [];
        }
        onLoad() {
            boats.map(itemType => {
                const newCapacity = weightCapacities[itemType];
                if (newCapacity !== undefined) {
                    this.vanillaDuplicates.push({ itemIndex: itemType, originalItem: { ...ItemDescriptions_1.itemDescriptions[itemType] } });
                    ItemDescriptions_1.itemDescriptions[itemType].weightCapacity = weightCapacities[itemType];
                }
            });
        }
        onUnload() {
            this.vanillaDuplicates.map(original => {
                ItemDescriptions_1.itemDescriptions[original.itemIndex] = original.originalItem;
            });
        }
    }
    exports.default = LargerVessels;
    __decorate([
        Mod_1.default.instance()
    ], LargerVessels, "INSTANCE", void 0);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL01vZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFLQSxNQUFNLEtBQUssR0FBRztRQUNWLGdCQUFRLENBQUMsVUFBVTtRQUNuQixnQkFBUSxDQUFDLFFBQVE7UUFDakIsZ0JBQVEsQ0FBQyxRQUFRO0tBQ3BCLENBQUM7SUFHRixNQUFNLGdCQUFnQixHQUFzQztRQUN4RCxDQUFDLGdCQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRztRQUMxQixDQUFDLGdCQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSTtRQUN6QixDQUFDLGdCQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSTtLQUM1QixDQUFDO0lBRUYsTUFBcUIsYUFBYyxTQUFRLGFBQUc7UUFBOUM7O1lBTVksc0JBQWlCLEdBR25CLEVBQUUsQ0FBQztRQWlCYixDQUFDO1FBZm1CLE1BQU07WUFDbEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDakIsTUFBTSxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9DLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRSxDQUFDO29CQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsRUFBRSxHQUFHLG1DQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUN0RyxtQ0FBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzNFLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7UUFFZSxRQUFRO1lBQ3BCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2xDLG1DQUFnQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1lBQ2pFLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUNKO0lBMUJELGdDQTBCQztJQXZCMEI7UUFEdEIsYUFBRyxDQUFDLFFBQVEsRUFBaUI7eUNBQ2lCIn0=