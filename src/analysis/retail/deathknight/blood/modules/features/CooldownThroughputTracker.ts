import SPELLS from 'common/SPELLS';
import TALENTS from 'common/TALENTS/deathknight';
import GameBranch from 'game/GameBranch';
import CoreCooldownThroughputTracker, {
  BUILT_IN_SUMMARY_TYPES,
} from 'parser/shared/modules/CooldownThroughputTracker';

class CooldownThroughputTracker extends CoreCooldownThroughputTracker {
  static cooldownSpells = [
    ...CoreCooldownThroughputTracker.cooldownSpells,
    {
      spell: SPELLS.DANCING_RUNE_WEAPON_TALENT_BUFF.id,
      summary: [BUILT_IN_SUMMARY_TYPES.DAMAGE],
      branch: GameBranch.Retail,
    },

    {
      spell: TALENTS.VAMPIRIC_BLOOD_TALENT.id,
      summary: [BUILT_IN_SUMMARY_TYPES.HEALING, BUILT_IN_SUMMARY_TYPES.OVERHEALING],
      branch: GameBranch.Retail,
    },

    {
      spell: TALENTS.ANTI_MAGIC_SHELL_TALENT.id,
      summary: [BUILT_IN_SUMMARY_TYPES.ABSORBED],
      branch: GameBranch.Retail,
    },
  ];
}

export default CooldownThroughputTracker;
