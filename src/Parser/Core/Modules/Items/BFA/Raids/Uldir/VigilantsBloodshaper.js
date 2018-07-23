import React from 'react';
import SPELLS from 'common/SPELLS';
import ITEMS from 'common/ITEMS';

import Analyzer from 'Parser/Core/Analyzer';

/**
 * Vigilant's Bloodshaper -
 * Equip: Your damaging spells have a chance to launch an orb of charged blood at your target,
 * dealing 0 shadow damage split among all nearby enemeies.
 */
import ItemDamageDone from 'Interface/Others/ItemDamageDone';


class VigilantsBloodshaper extends Analyzer{
  damage = 0;
  hits = 0;

  constructor(...args){
    super(...args);
    this.active = this.selectedCombatant.hasTrinket(ITEMS.VIGILANTS_BLOODSHAPER.id);
  }

  on_byPlayer_damage(event){
    const spellId = event.ability.guid;
    if(spellId === SPELLS.VOLATILE_BLOOD_EXPLOSION.id){
      this.damage += event.amount + (event.absorbed || 0);
      this.hits += 1;
    }
  }

  item(){
    return{
      item: ITEMS.VIGILANTS_BLOODSHAPER,
      result: (
        <React.Fragment>
          <ItemDamageDone amount={this.damage} />
        </React.Fragment>
      ),
    };
  }

}


export default VigilantsBloodshaper;
