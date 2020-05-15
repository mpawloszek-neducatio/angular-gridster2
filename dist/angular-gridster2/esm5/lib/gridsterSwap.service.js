import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { GridsterItemComponentInterface } from './gridsterItemComponent.interface';
var GridsterSwap = /** @class */ (function () {
    function GridsterSwap(gridsterItem) {
        this.gridsterItem = gridsterItem;
        this.gridster = gridsterItem.gridster;
    }
    GridsterSwap.prototype.destroy = function () {
        delete this.gridster;
        delete this.gridsterItem;
        delete this.swapedItem;
    };
    GridsterSwap.prototype.swapItems = function () {
        if (this.gridster.$options.swap) {
            this.checkSwapBack();
            this.checkSwap(this.gridsterItem);
        }
    };
    GridsterSwap.prototype.checkSwapBack = function () {
        if (this.swapedItem) {
            var x = this.swapedItem.$item.x;
            var y = this.swapedItem.$item.y;
            this.swapedItem.$item.x = this.swapedItem.item.x || 0;
            this.swapedItem.$item.y = this.swapedItem.item.y || 0;
            if (this.gridster.checkCollision(this.swapedItem.$item)) {
                this.swapedItem.$item.x = x;
                this.swapedItem.$item.y = y;
            }
            else {
                this.swapedItem.setSize();
                this.gridsterItem.$item.x = this.gridsterItem.item.x || 0;
                this.gridsterItem.$item.y = this.gridsterItem.item.y || 0;
                this.swapedItem = undefined;
            }
        }
    };
    GridsterSwap.prototype.restoreSwapItem = function () {
        if (this.swapedItem) {
            this.swapedItem.$item.x = this.swapedItem.item.x || 0;
            this.swapedItem.$item.y = this.swapedItem.item.y || 0;
            this.swapedItem.setSize();
            this.swapedItem = undefined;
        }
    };
    GridsterSwap.prototype.setSwapItem = function () {
        if (this.swapedItem) {
            this.swapedItem.checkItemChanges(this.swapedItem.$item, this.swapedItem.item);
            this.swapedItem = undefined;
        }
    };
    GridsterSwap.prototype.checkSwap = function (pushedBy) {
        var gridsterItemCollision;
        if (this.gridster.$options.swapWhileDragging) {
            gridsterItemCollision = this.gridster.checkCollisionForSwaping(pushedBy.$item);
        }
        else {
            gridsterItemCollision = this.gridster.checkCollision(pushedBy.$item);
        }
        if (gridsterItemCollision && gridsterItemCollision !== true && gridsterItemCollision.canBeDragged()) {
            var gridsterItemCollide = gridsterItemCollision;
            var copyCollisionX = gridsterItemCollide.$item.x;
            var copyCollisionY = gridsterItemCollide.$item.y;
            var copyX = pushedBy.$item.x;
            var copyY = pushedBy.$item.y;
            gridsterItemCollide.$item.x = pushedBy.item.x || 0;
            gridsterItemCollide.$item.y = pushedBy.item.y || 0;
            pushedBy.$item.x = gridsterItemCollide.item.x || 0;
            pushedBy.$item.y = gridsterItemCollide.item.y || 0;
            if (this.gridster.checkCollision(gridsterItemCollide.$item) || this.gridster.checkCollision(pushedBy.$item)) {
                pushedBy.$item.x = copyX;
                pushedBy.$item.y = copyY;
                gridsterItemCollide.$item.x = copyCollisionX;
                gridsterItemCollide.$item.y = copyCollisionY;
            }
            else {
                gridsterItemCollide.setSize();
                this.swapedItem = gridsterItemCollide;
                if (this.gridster.$options.swapWhileDragging) {
                    this.gridsterItem.checkItemChanges(this.gridsterItem.$item, this.gridsterItem.item);
                    this.setSwapItem();
                }
            }
        }
    };
    GridsterSwap.ctorParameters = function () { return [
        { type: GridsterItemComponentInterface }
    ]; };
    GridsterSwap = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [GridsterItemComponentInterface])
    ], GridsterSwap);
    return GridsterSwap;
}());
export { GridsterSwap };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0ZXJTd2FwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWdyaWRzdGVyMi8iLCJzb3VyY2VzIjpbImxpYi9ncmlkc3RlclN3YXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUlqRjtJQUtFLHNCQUFZLFlBQTRDO1FBQ3RELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztJQUN4QyxDQUFDO0lBRUQsOEJBQU8sR0FBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxnQ0FBUyxHQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUVELG9DQUFhLEdBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBTSxDQUFDLEdBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQU0sQ0FBQyxHQUFXLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZ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Q0EwRnhCO0lBQUQsbUJBQUM7Q0FBQSxBQTFGRCxJQTBGQztTQTFGWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2V9IGZyb20gJy4vZ3JpZHN0ZXJJdGVtQ29tcG9uZW50LmludGVyZmFjZSc7XG5pbXBvcnQge0dyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVyLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcmlkc3RlclN3YXAge1xuICBwcml2YXRlIHN3YXBlZEl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZTtcbiAgcHJpdmF0ZSBncmlkc3RlcjogR3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2U7XG5cbiAgY29uc3RydWN0b3IoZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpIHtcbiAgICB0aGlzLmdyaWRzdGVySXRlbSA9IGdyaWRzdGVySXRlbTtcbiAgICB0aGlzLmdyaWRzdGVyID0gZ3JpZHN0ZXJJdGVtLmdyaWRzdGVyO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5ncmlkc3RlcjtcbiAgICBkZWxldGUgdGhpcy5ncmlkc3Rlckl0ZW07XG4gICAgZGVsZXRlIHRoaXMuc3dhcGVkSXRlbTtcbiAgfVxuXG4gIHN3YXBJdGVtcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5zd2FwKSB7XG4gICAgICB0aGlzLmNoZWNrU3dhcEJhY2soKTtcbiAgICAgIHRoaXMuY2hlY2tTd2FwKHRoaXMuZ3JpZHN0ZXJJdGVtKTtcbiAgICB9XG4gIH1cblxuICBjaGVja1N3YXBCYWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN3YXBlZEl0ZW0pIHtcbiAgICAgIGNvbnN0IHg6IG51bWJlciA9IHRoaXMuc3dhcGVkSXRlbS4kaXRlbS54O1xuICAgICAgY29uc3QgeTogbnVtYmVyID0gdGhpcy5zd2FwZWRJdGVtLiRpdGVtLnk7XG4gICAgICB0aGlzLnN3YXBlZEl0ZW0uJGl0ZW0ueCA9IHRoaXMuc3dhcGVkSXRlbS5pdGVtLnggfHwgMDtcbiAgICAgIHRoaXMuc3dhcGVkSXRlbS4kaXRlbS55ID0gdGhpcy5zd2FwZWRJdGVtLml0ZW0ueSB8fCAwO1xuICAgICAgaWYgKHRoaXMuZ3JpZHN0ZXIuY2hlY2tDb2xsaXNpb24odGhpcy5zd2FwZWRJdGVtLiRpdGVtKSkge1xuICAgICAgICB0aGlzLnN3YXBlZEl0ZW0uJGl0ZW0ueCA9IHg7XG4gICAgICAgIHRoaXMuc3dhcGVkSXRlbS4kaXRlbS55ID0geTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3dhcGVkSXRlbS5zZXRTaXplKCk7XG4gICAgICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnggPSB0aGlzLmdyaWRzdGVySXRlbS5pdGVtLnggfHwgMDtcbiAgICAgICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueSA9IHRoaXMuZ3JpZHN0ZXJJdGVtLml0ZW0ueSB8fCAwO1xuICAgICAgICB0aGlzLnN3YXBlZEl0ZW0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICByZXN0b3JlU3dhcEl0ZW0oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3dhcGVkSXRlbSkge1xuICAgICAgdGhpcy5zd2FwZWRJdGVtLiRpdGVtLnggPSB0aGlzLnN3YXBlZEl0ZW0uaXRlbS54IHx8IDA7XG4gICAgICB0aGlzLnN3YXBlZEl0ZW0uJGl0ZW0ueSA9IHRoaXMuc3dhcGVkSXRlbS5pdGVtLnkgfHwgMDtcbiAgICAgIHRoaXMuc3dhcGVkSXRlbS5zZXRTaXplKCk7XG4gICAgICB0aGlzLnN3YXBlZEl0ZW0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgc2V0U3dhcEl0ZW0oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3dhcGVkSXRlbSkge1xuICAgICAgdGhpcy5zd2FwZWRJdGVtLmNoZWNrSXRlbUNoYW5nZXModGhpcy5zd2FwZWRJdGVtLiRpdGVtLCB0aGlzLnN3YXBlZEl0ZW0uaXRlbSk7XG4gICAgICB0aGlzLnN3YXBlZEl0ZW0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tTd2FwKHB1c2hlZEJ5OiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICBsZXQgZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uO1xuICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLnN3YXBXaGlsZURyYWdnaW5nKSB7XG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaXNpb24gPSB0aGlzLmdyaWRzdGVyLmNoZWNrQ29sbGlzaW9uRm9yU3dhcGluZyhwdXNoZWRCeS4kaXRlbSk7XG4gICAgfWVsc2V7XG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaXNpb24gPSB0aGlzLmdyaWRzdGVyLmNoZWNrQ29sbGlzaW9uKHB1c2hlZEJ5LiRpdGVtKTtcbiAgICB9XG4gICAgaWYgKGdyaWRzdGVySXRlbUNvbGxpc2lvbiAmJiBncmlkc3Rlckl0ZW1Db2xsaXNpb24gIT09IHRydWUgJiYgZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uLmNhbkJlRHJhZ2dlZCgpKSB7XG4gICAgICBjb25zdCBncmlkc3Rlckl0ZW1Db2xsaWRlOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UgPSBncmlkc3Rlckl0ZW1Db2xsaXNpb247XG4gICAgICBjb25zdCBjb3B5Q29sbGlzaW9uWCA9IGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueDtcbiAgICAgIGNvbnN0IGNvcHlDb2xsaXNpb25ZID0gZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS55O1xuICAgICAgY29uc3QgY29weVggPSBwdXNoZWRCeS4kaXRlbS54O1xuICAgICAgY29uc3QgY29weVkgPSBwdXNoZWRCeS4kaXRlbS55O1xuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS54ID0gcHVzaGVkQnkuaXRlbS54IHx8IDA7XG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnkgPSBwdXNoZWRCeS5pdGVtLnkgfHwgMDtcbiAgICAgIHB1c2hlZEJ5LiRpdGVtLnggPSBncmlkc3Rlckl0ZW1Db2xsaWRlLml0ZW0ueCB8fCAwO1xuICAgICAgcHVzaGVkQnkuJGl0ZW0ueSA9IGdyaWRzdGVySXRlbUNvbGxpZGUuaXRlbS55IHx8IDA7XG4gICAgICBpZiAodGhpcy5ncmlkc3Rlci5jaGVja0NvbGxpc2lvbihncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtKSB8fCB0aGlzLmdyaWRzdGVyLmNoZWNrQ29sbGlzaW9uKHB1c2hlZEJ5LiRpdGVtKSkge1xuICAgICAgICBwdXNoZWRCeS4kaXRlbS54ID0gY29weVg7XG4gICAgICAgIHB1c2hlZEJ5LiRpdGVtLnkgPSBjb3B5WTtcbiAgICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS54ID0gY29weUNvbGxpc2lvblg7XG4gICAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueSA9IGNvcHlDb2xsaXNpb25ZO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS5zZXRTaXplKCk7XG4gICAgICAgIHRoaXMuc3dhcGVkSXRlbSA9IGdyaWRzdGVySXRlbUNvbGxpZGU7XG4gICAgICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLnN3YXBXaGlsZURyYWdnaW5nKSB7XG4gICAgICAgICAgdGhpcy5ncmlkc3Rlckl0ZW0uY2hlY2tJdGVtQ2hhbmdlcyh0aGlzLmdyaWRzdGVySXRlbS4kaXRlbSwgdGhpcy5ncmlkc3Rlckl0ZW0uaXRlbSk7XG4gICAgICAgICAgdGhpcy5zZXRTd2FwSXRlbSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=