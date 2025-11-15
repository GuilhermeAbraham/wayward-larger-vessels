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
        IItem_1.ItemType.Raft,
        IItem_1.ItemType.BullBoat,
        IItem_1.ItemType.Sailboat
    ];
    const weightCapacities = {
        [IItem_1.ItemType.Raft]: 300,
        [IItem_1.ItemType.BullBoat]: 700,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL01vZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFLQSxNQUFNLEtBQUssR0FBRztRQUNWLGdCQUFRLENBQUMsSUFBSTtRQUNiLGdCQUFRLENBQUMsUUFBUTtRQUNqQixnQkFBUSxDQUFDLFFBQVE7S0FDcEIsQ0FBQztJQUdGLE1BQU0sZ0JBQWdCLEdBQXNDO1FBQ3hELENBQUMsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHO1FBQ3BCLENBQUMsZ0JBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHO1FBQ3hCLENBQUMsZ0JBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJO0tBQzVCLENBQUM7SUFFRixNQUFxQixhQUFjLFNBQVEsYUFBRztRQUE5Qzs7WUFNWSxzQkFBaUIsR0FHbkIsRUFBRSxDQUFDO1FBaUJiLENBQUM7UUFmbUIsTUFBTTtZQUNsQixLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNqQixNQUFNLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFLENBQUM7b0JBQzVCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxFQUFFLEdBQUcsbUNBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ3RHLG1DQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDM0UsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQztRQUVlLFFBQVE7WUFDcEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDbEMsbUNBQWdCLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7WUFDakUsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQ0o7SUExQkQsZ0NBMEJDO0lBdkIwQjtRQUR0QixhQUFHLENBQUMsUUFBUSxFQUFpQjt5Q0FDaUIifQ==