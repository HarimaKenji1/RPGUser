enum Quality {
    WHITE = 1,
    GREEN = 1.1,
    BLUE = 1.2,
    PURPLE = 1.4,
    ORAGE = 1.8
}

enum WeaponType {
    HANDSWORD = 1,
    GREATSWORD = 2,
    AXE = 3,
    KATANA = 4,
    HAMMER = 5
}

enum ArmorType{
    LIGHTARMOR = 1,
    LEATHERARMOR = 2,
    PLATEARMOR = 3,
    HEAVYARMOR = 4
}

enum JewelPromotion{
    ATTACKPRMOTE = 1,
    DEFENCEPRMOTE = 2,
    AGILEPRMOTE = 3,
}



class User{
    currentExp : number = 0;
    totalExp = 0;
    level : number = 0;
    diamonds : number = 0;
    gold : number = 0;
    heros : Hero [] = [];
    __herosInTeam : Hero[] = [];
    get FightPower(){
        var result = 0;
        this.__herosInTeam.forEach(hero => result += hero.FightPower);
        return result;
    }
}

class Hero{
    isInTeam : boolean = false;
    quality  = 0;
    maxHP = 0;
    currentHP = 0;
    attack = 0;
    defence = 0;
    agile = 0;
    level = 0;
    currentExp = 0;
    totalExp = 0;
    __equipmentOnEquip : Equipment[] = [];
    get FightPower(){
        var result = 0;
        this.__equipmentOnEquip.forEach(equipment => result += equipment.FightPower);
        result = (this.attack * 10 + this.defence * 8 + this.agile * 6) * this.level * this.quality;
        return result;
    }
}

class Equipment{
    quality  = 0;
    level = 0;
    currentExp = 0;
    totalExp = 0;
    agile = 0;
    __jewelOnEquip : Jewel[] = [];
    //@Cache
    get FightPower(){
        return 0;
    }

}

class Weapon extends Equipment{
     attack = 0;
     //@Cache
     get FightPower(){
         var result = 0;
         this.__jewelOnEquip.forEach(jewel => result += jewel.FightPower);
         result += this.attack * this.quality * 10 + this.agile * this.quality * 8;
         return result;
     }
}

class Armor extends Equipment{
     defence = 0;
     //@Cache
     get FightPower(){
         var result = 0;
         this.__jewelOnEquip.forEach(jewel => result += jewel.FightPower);
         result += this.defence * this.quality * 10 + this.agile * this.quality * 5;
         return result;
     }
}

class Jewel{
    quality  = 0;
    promotionType = 0;
    //@Cache
    get FightPower(){
        var result = 0;
        result = this.quality * 50;
        return result;
    }
}