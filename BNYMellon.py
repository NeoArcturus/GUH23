class Request:

    # class attributes
    table = {"APL001": ["1Kg Apple", 2.45], "MIL001": [
        "1L Milk", 1.00], "CK001": ["1 KG Cake", 8.00]}
    valid_items = ("1Kg Apple", "1L Milk", "1 KG Cake")
    userList = {}

    # helper methods
    def basket(self):
        for key, value in self.userList.items():
            print(f"\t{key}  :  {int(value)}")

    def item_validation(self, item):
        while (item.strip() not in self.valid_items):
            print("!!! Unregistered Item !!!")
            item = input("Enter the correct item name: ")

        return item.strip()

    def quantity_validation(self, qty):
        while (not (qty.strip().isdigit())):
            print("!!!Numbers only!!!")
            qty = input("Enter quantity: ")

        return qty.strip()

    def option_validation(self, option):
        while (option.lower().strip() != "y" and option.lower().strip() != "n"):
            print("!!!Wrong input!!!")
            option = input("Do you want to continue? (Y/N/y/n) ")

        return option.strip()

    # Input reader

    def input(self):
        while (True):

            item = input("Enter the item name: ")
            item = self.item_validation(item)

            qty = input("Enter quantity: ")
            qty = float(self.quantity_validation(qty))

            if (item not in list(self.userList.keys())):
                self.userList[item] = float(qty)
            else:
                self.userList[item] += float(qty)

            print("\n\tCurrent Basket\t\n")
            self.basket()

            while (sum(list(self.userList.values())) > 15):
                print(
                    f"!!!Maximum limit of 15 items exceeded!!!\nYou have {int(sum(list(self.userList.values()))-15)} extra items!")
                option = input("Do you want to remove items? (Y/N/y/n)")
                option = self.option_validation(option)

                if (option.lower() == 'y'):
                    item = input("Which item would you like to remove?: ")
                    item = self.item_validation(item)
                    while (item not in list(self.userList.keys())):
                        print("!!!Item not present in basket!!!")
                        item = input("Which item would you like to remove?: ")
                        item = self.item_validation(item)

                    qty = input(
                        "How much quantity would you like to remove?: ")
                    qty = float(self.quantity_validation(qty))

                    while (qty > self.userList[item]):
                        print("!!! Enter the valid quantity !!!")
                        qty = input(
                            "How much quantity would you like to remove?: ")
                        qty = float(self.quantity_validation(qty))

                    if (qty == self.userList[item]):
                        self.userList.pop(item)
                        print("Item removed!")

                    else:
                        self.userList[item] -= qty

                    print("\n\tCurrent Basket\t\n")
                    self.basket()

                else:
                    print("\n\t!!!Cart limit exceeded!!!\t")
                    return False

            print("\n")
            option = input("Do you want to add more items? (Y/N/y/n)")

            option = self.option_validation(option)

            if (option.lower() == "n"):
                print("\n\tBasket\t\n")
                self.basket()
                print("\n")
                break

        return True

    # payment generation

    def total(self):
        if (self.input()):
            amount = 0.0
            key_list = list(self.table.keys())
            item_list = list(self.userList.keys())
            for key1 in key_list:
                for key2 in item_list:
                    if (self.table[key1][0] == key2):
                        amount += (self.userList[key2]) * (self.table[key1][1])

            return amount

        else:
            return "NIL"


# Object generation
requestGen = Request()

print(f"\nPayement Request: {requestGen.total()}")
