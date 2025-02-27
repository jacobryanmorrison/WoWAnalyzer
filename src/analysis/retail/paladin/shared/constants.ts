import SPELLS from 'common/SPELLS';
import TALENTS from 'common/TALENTS/paladin';
import Spell from 'common/SPELLS/Spell';

export const DIVINE_PURPOSE_CHANCE = 0.15;

export const HEALING_HOLY_POWER_SPENDERS: readonly Spell[] = [
  SPELLS.WORD_OF_GLORY,
  SPELLS.LIGHT_OF_DAWN_HEAL,
  TALENTS.LIGHT_OF_DAWN_TALENT,
] as const;

export const DAMAGE_HOLY_POWER_SPENDERS: readonly Spell[] = [
  SPELLS.SHIELD_OF_THE_RIGHTEOUS,
  SPELLS.SHIELD_OF_THE_RIGHTEOUS_HOLY,
  SPELLS.TEMPLARS_VERDICT,
  SPELLS.TEMPLARS_VERDICT_DAMAGE,
  SPELLS.DIVINE_STORM_DAMAGE,
  SPELLS.FINAL_VERDICT_FINISHER,
  TALENTS.DIVINE_STORM_TALENT,
  TALENTS.JUSTICARS_VENGEANCE_TALENT,
  TALENTS.EXECUTION_SENTENCE_TALENT,
] as const;

const BUFF_HOLY_POWER_SPENDERS: readonly Spell[] = [] as const;

export const ALL_HOLY_POWER_SPENDERS: readonly Spell[] = [
  ...HEALING_HOLY_POWER_SPENDERS,
  ...DAMAGE_HOLY_POWER_SPENDERS,
  ...BUFF_HOLY_POWER_SPENDERS,
] as const;

const SHARED_HOLY_POWER_GENERATORS = [
  SPELLS.CRUSADER_STRIKE,
  TALENTS.HAMMER_OF_WRATH_TALENT,
  TALENTS.DIVINE_TOLL_TALENT,
] as const;

export const HOLY_SPEC_HOLY_POWER_GENERATORS = [
  ...SHARED_HOLY_POWER_GENERATORS,
  TALENTS.HOLY_SHOCK_TALENT,
] as const;

export const PROT_SPEC_HOLY_POWER_GENERATORS = [
  ...SHARED_HOLY_POWER_GENERATORS,
  TALENTS.BLESSED_HAMMER_TALENT,
  TALENTS.HAMMER_OF_THE_RIGHTEOUS_TALENT,
  SPELLS.JUDGMENT_CAST_PROTECTION,
] as const;

export const RET_SPEC_HOLY_POWER_GENERATORS = [
  ...SHARED_HOLY_POWER_GENERATORS,
  TALENTS.BLADE_OF_JUSTICE_TALENT,
  TALENTS.WAKE_OF_ASHES_TALENT,
  SPELLS.JUDGMENT_CAST,
] as const;
