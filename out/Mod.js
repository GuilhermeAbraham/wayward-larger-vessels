var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@wayward/game/game/doodad/Doodads", "@wayward/game/game/doodad/IDoodad", "@wayward/game/game/item/IItem", "@wayward/game/game/item/ItemDescriptions", "@wayward/game/mod/Mod"], function (require, exports, Doodads_1, IDoodad_1, IItem_1, ItemDescriptions_1, Mod_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Boats;
    (function (Boats) {
        Boats[Boats["Raft"] = 0] = "Raft";
        Boats[Boats["BullBoat"] = 1] = "BullBoat";
        Boats[Boats["Sailboat"] = 2] = "Sailboat";
    })(Boats || (Boats = {}));
    ;
    const boatsItemTypes = {
        [Boats.Raft]: IItem_1.ItemType.Raft,
        [Boats.BullBoat]: IItem_1.ItemType.BullBoat,
        [Boats.Sailboat]: IItem_1.ItemType.Sailboat
    };
    const boatsDoodadTypes = {
        [Boats.Raft]: IDoodad_1.DoodadType.Raft,
        [Boats.BullBoat]: IDoodad_1.DoodadType.BullBoat,
        [Boats.Sailboat]: IDoodad_1.DoodadType.Sailboat
    };
    const weightCapacities = {
        [Boats.Raft]: 300,
        [Boats.BullBoat]: 700,
        [Boats.Sailboat]: 1200
    };
    class LargerVessels extends Mod_1.default {
        constructor() {
            super(...arguments);
            this.vanillaItems = [];
            this.vanillaDoodads = [];
        }
        onLoad() {
            Object.entries(Boats).map(([key, boat]) => {
                const newCapacity = weightCapacities[boat];
                if (newCapacity !== undefined && isNaN(newCapacity) === false) {
                    const itemDescription = ItemDescriptions_1.itemDescriptions[boatsItemTypes[boat]];
                    if (itemDescription) {
                        this.vanillaItems.push({ itemIndex: Number(key), originalItem: { ...itemDescription } });
                        itemDescription.weightCapacity = newCapacity;
                    }
                    const doodadDescription = Doodads_1.doodadDescriptions[boatsDoodadTypes[boat]];
                    if (doodadDescription) {
                        this.vanillaDoodads.push({ doodadIndex: Number(key), originalDoodad: { ...doodadDescription } });
                        doodadDescription.weightCapacity = newCapacity;
                    }
                }
            });
        }
        onUnload() {
            this.vanillaItems.map(original => {
                ItemDescriptions_1.itemDescriptions[original.itemIndex] = original.originalItem;
            });
            this.vanillaDoodads.map(original => {
                Doodads_1.doodadDescriptions[original.doodadIndex] = original.originalDoodad;
            });
        }
    }
    exports.default = LargerVessels;
    __decorate([
        Mod_1.default.instance()
    ], LargerVessels, "INSTANCE", void 0);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL01vZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFPQSxJQUFLLEtBSUo7SUFKRCxXQUFLLEtBQUs7UUFDTixpQ0FBSSxDQUFBO1FBQ0oseUNBQVEsQ0FBQTtRQUNSLHlDQUFRLENBQUE7SUFDWixDQUFDLEVBSkksS0FBSyxLQUFMLEtBQUssUUFJVDtJQUFBLENBQUM7SUFHRixNQUFNLGNBQWMsR0FBNEI7UUFDNUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsZ0JBQVEsQ0FBQyxJQUFJO1FBQzNCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLGdCQUFRLENBQUMsUUFBUTtRQUNuQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxnQkFBUSxDQUFDLFFBQVE7S0FDdEMsQ0FBQztJQUdGLE1BQU0sZ0JBQWdCLEdBQThCO1FBQ2hELENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLG9CQUFVLENBQUMsSUFBSTtRQUM3QixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxvQkFBVSxDQUFDLFFBQVE7UUFDckMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsb0JBQVUsQ0FBQyxRQUFRO0tBQ3hDLENBQUM7SUFHRixNQUFNLGdCQUFnQixHQUFtQztRQUNyRCxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHO1FBQ2pCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUc7UUFDckIsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSTtLQUN6QixDQUFDO0lBRUYsTUFBcUIsYUFBYyxTQUFRLGFBQUc7UUFBOUM7O1lBTVksaUJBQVksR0FHZCxFQUFFLENBQUM7WUFFRCxtQkFBYyxHQUdoQixFQUFFLENBQUM7UUFrQ2IsQ0FBQztRQWhDbUIsTUFBTTtZQUNsQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ3RDLE1BQU0sV0FBVyxHQUFHLGdCQUFnQixDQUFDLElBQWEsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLFdBQVcsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDO29CQUU1RCxNQUFNLGVBQWUsR0FBRyxtQ0FBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBYSxDQUFDLENBQUMsQ0FBQztvQkFDeEUsSUFBSSxlQUFlLEVBQUUsQ0FBQzt3QkFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFlBQVksRUFBRSxFQUFFLEdBQUcsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUN6RixlQUFlLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQztvQkFDakQsQ0FBQztvQkFHRCxNQUFNLGlCQUFpQixHQUFHLDRCQUFrQixDQUFDLGdCQUFnQixDQUFDLElBQWEsQ0FBQyxDQUFDLENBQUM7b0JBQzlFLElBQUksaUJBQWlCLEVBQUUsQ0FBQzt3QkFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxFQUFFLEdBQUcsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBQ2pHLGlCQUFpQixDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUM7b0JBQ25ELENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQztRQUVlLFFBQVE7WUFFcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzdCLG1DQUFnQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1lBQ2pFLENBQUMsQ0FBQyxDQUFDO1lBR0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQy9CLDRCQUFrQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDO1lBQ3ZFLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUNKO0lBaERELGdDQWdEQztJQTdDMEI7UUFEdEIsYUFBRyxDQUFDLFFBQVEsRUFBaUI7eUNBQ2lCIn0=