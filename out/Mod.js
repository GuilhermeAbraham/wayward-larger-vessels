var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@wayward/game/game/doodad/Doodads", "@wayward/game/game/doodad/IDoodad", "@wayward/game/game/item/IItem", "@wayward/game/game/item/ItemDescriptions", "@wayward/game/mod/Mod"], function (require, exports, Doodads_1, IDoodad_1, IItem_1, ItemDescriptions_1, Mod_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Vessels;
    (function (Vessels) {
        Vessels[Vessels["Raft"] = 0] = "Raft";
        Vessels[Vessels["BullBoat"] = 1] = "BullBoat";
        Vessels[Vessels["Sailboat"] = 2] = "Sailboat";
    })(Vessels || (Vessels = {}));
    ;
    const vesselsItemTypes = {
        [0]: IItem_1.ItemType.Raft,
        [1]: IItem_1.ItemType.BullBoat,
        [2]: IItem_1.ItemType.Sailboat,
    };
    const vesselsDoodadTypes = {
        [0]: IDoodad_1.DoodadType.Raft,
        [1]: IDoodad_1.DoodadType.BullBoat,
        [2]: IDoodad_1.DoodadType.Sailboat
    };
    const weightCapacities = {
        [0]: 300,
        [1]: 700,
        [2]: 1200
    };
    class LargerVessels extends Mod_1.default {
        constructor() {
            super(...arguments);
            this.vanillaItems = new Map();
            this.vanillaDoodads = new Map();
        }
        onLoad() {
            for (const [vesselKey, newCapacity] of Object.entries(weightCapacities)) {
                const vessel = Number(vesselKey);
                const itemType = vesselsItemTypes[vessel];
                const itemDescription = ItemDescriptions_1.itemDescriptions[itemType];
                if (itemDescription && !this.vanillaItems.has(itemType)) {
                    this.vanillaItems.set(itemType, { ...itemDescription });
                    itemDescription.weightCapacity = newCapacity;
                }
                const doodadType = vesselsDoodadTypes[vessel];
                const doodadDescription = Doodads_1.doodadDescriptions[doodadType];
                if (doodadDescription && !this.vanillaDoodads.has(doodadType)) {
                    this.vanillaDoodads.set(doodadType, { ...doodadDescription });
                    doodadDescription.weightCapacity = newCapacity;
                }
            }
        }
        onUnload() {
            for (const [itemType, originalItem] of this.vanillaItems) {
                ItemDescriptions_1.itemDescriptions[itemType] = originalItem;
            }
            for (const [doodadType, originalDoodad] of this.vanillaDoodads) {
                Doodads_1.doodadDescriptions[doodadType] = originalDoodad;
            }
        }
    }
    exports.default = LargerVessels;
    __decorate([
        Mod_1.default.instance()
    ], LargerVessels, "INSTANCE", void 0);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL01vZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFPQSxJQUFXLE9BSVY7SUFKRCxXQUFXLE9BQU87UUFDZCxxQ0FBSSxDQUFBO1FBQ0osNkNBQVEsQ0FBQTtRQUNSLDZDQUFRLENBQUE7SUFDWixDQUFDLEVBSlUsT0FBTyxLQUFQLE9BQU8sUUFJakI7SUFBQSxDQUFDO0lBR0YsTUFBTSxnQkFBZ0IsR0FBOEI7UUFDaEQsR0FBYyxFQUFFLGdCQUFRLENBQUMsSUFBSTtRQUM3QixHQUFrQixFQUFFLGdCQUFRLENBQUMsUUFBUTtRQUNyQyxHQUFrQixFQUFFLGdCQUFRLENBQUMsUUFBUTtLQUN4QyxDQUFDO0lBR0YsTUFBTSxrQkFBa0IsR0FBZ0M7UUFDcEQsR0FBYyxFQUFFLG9CQUFVLENBQUMsSUFBSTtRQUMvQixHQUFrQixFQUFFLG9CQUFVLENBQUMsUUFBUTtRQUN2QyxHQUFrQixFQUFFLG9CQUFVLENBQUMsUUFBUTtLQUMxQyxDQUFDO0lBR0YsTUFBTSxnQkFBZ0IsR0FBcUM7UUFDdkQsR0FBYyxFQUFFLEdBQUc7UUFDbkIsR0FBa0IsRUFBRSxHQUFHO1FBQ3ZCLEdBQWtCLEVBQUUsSUFBSTtLQUMzQixDQUFDO0lBRUYsTUFBcUIsYUFBYyxTQUFRLGFBQUc7UUFBOUM7O1lBTVksaUJBQVksR0FBb0MsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUUxRCxtQkFBYyxHQUF3QyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBb0M1RSxDQUFDO1FBbENtQixNQUFNO1lBRWxCLEtBQUssTUFBTSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztnQkFDdEUsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBWSxDQUFDO2dCQUc1QyxNQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDMUMsTUFBTSxlQUFlLEdBQUcsbUNBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25ELElBQUksZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsR0FBRyxlQUFlLEVBQUUsQ0FBQyxDQUFDO29CQUN4RCxlQUFlLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQztnQkFDakQsQ0FBQztnQkFHRCxNQUFNLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUMsTUFBTSxpQkFBaUIsR0FBRyw0QkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDekQsSUFBSSxpQkFBaUIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7b0JBQzVELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO29CQUM5RCxpQkFBaUIsQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDO2dCQUNuRCxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFFZSxRQUFRO1lBRXBCLEtBQUssTUFBTSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3ZELG1DQUFnQixDQUFDLFFBQVEsQ0FBQyxHQUFHLFlBQVksQ0FBQztZQUM5QyxDQUFDO1lBR0QsS0FBSyxNQUFNLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDN0QsNEJBQWtCLENBQUMsVUFBVSxDQUFDLEdBQUcsY0FBYyxDQUFDO1lBQ3BELENBQUM7UUFDTCxDQUFDO0tBQ0o7SUE1Q0QsZ0NBNENDO0lBekMwQjtRQUR0QixhQUFHLENBQUMsUUFBUSxFQUFpQjt5Q0FDaUIifQ==